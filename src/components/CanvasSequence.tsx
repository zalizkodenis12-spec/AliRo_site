"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

interface CanvasSequenceProps {
  scrollContainerRef?: RefObject<HTMLElement | null>;
  folderPath?: string;
  frameCount?: number;
  fileExtension?: string;
}

export default function CanvasSequence({ 
  scrollContainerRef, 
  folderPath = "/images",
  frameCount = 240,
  fileExtension = ".jpg"
}: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track the exact scroll position of the provided container
  const { scrollYProgress } = useScroll(
    scrollContainerRef ? { target: scrollContainerRef, offset: ["start start", "end start"] } : undefined
  );
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // Reset state when folderPath changes
    setImagesLoaded(false);
    setImages([]);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // File names: ezgif-frame-001.ext
      const frameNum = i.toString().padStart(3, "0");
      img.src = `${folderPath}/ezgif-frame-${frameNum}${fileExtension}`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [folderPath, frameCount, fileExtension]);

  // If a container is provided, it accurately goes from 0 to 1 over that exact container's height.
  // Otherwise it falls back to 0-0.7 of the whole page.
  const frameIndex = useTransform(scrollYProgress, scrollContainerRef ? [0, 1] : [0, 0.7], [0, frameCount - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current || !images.length) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const index = Math.round(latest);
    const img = images[index];

    if (img && img.complete) {
      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio); // Use Math.max for cover (full screen)
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      if (index === 0) {
        console.log("Frame size:", img.width, "x", img.height, "Canvas size:", canvas.width, "x", canvas.height);
      }
      
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    }
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const canvas = canvasRef.current;
        
        // Scale canvas internal resolution for high-DPI displays (retina)
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // Keep CSS dimensions to match screen size
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        
        // Redraw current frame
        if (imagesLoaded && images.length > 0) {
          const index = Math.round(frameIndex.get());
          const img = images[index];
          if (img && img.complete) {
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio); // Use Math.max for cover (full screen)
            
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Fill white background just in case, though mix-blend handles it
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
              img,
              0, 0, img.width, img.height,
              centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
          }
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Init size
    
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-white">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          Loading Culinary Masterpiece...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
