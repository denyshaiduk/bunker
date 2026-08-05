"use client";

import Image from "next/image";
import { useRef, useState, type TouchEvent as ReactTouchEvent } from "react";
import { motion, useMotionValue } from "framer-motion";
import { withBasePath } from "@/lib/base-path";

interface ZoomableImageProps {
  src: string;
  alt: string;
  onZoomChange?: (zoomed: boolean) => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_TAP_ZOOM = 2.4;
const DOUBLE_TAP_WINDOW = 280;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ZoomableImage({ src, alt, onZoomChange }: ZoomableImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lastDistance = useRef<number | null>(null);
  const lastTap = useRef(0);
  const [isZoomed, setIsZoomed] = useState(false);

  function applyZoom(nextScale: number) {
    const clamped = clamp(nextScale, MIN_SCALE, MAX_SCALE);
    scale.set(clamped);
    const zoomed = clamped > 1.02;
    setIsZoomed(zoomed);
    onZoomChange?.(zoomed);
    if (clamped === MIN_SCALE) {
      x.set(0);
      y.set(0);
    }
  }

  function toggleDoubleTapZoom() {
    applyZoom(scale.get() > 1 ? 1 : DOUBLE_TAP_ZOOM);
  }

  function handleTouchStart(event: ReactTouchEvent<HTMLDivElement>) {
    if (event.touches.length === 2) {
      const [a, b] = [event.touches[0], event.touches[1]];
      lastDistance.current = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    } else if (event.touches.length === 1) {
      const now = Date.now();
      if (now - lastTap.current < DOUBLE_TAP_WINDOW) {
        toggleDoubleTapZoom();
      }
      lastTap.current = now;
    }
  }

  function handleTouchMove(event: ReactTouchEvent<HTMLDivElement>) {
    if (event.touches.length === 2) {
      const [a, b] = [event.touches[0], event.touches[1]];
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (lastDistance.current !== null) {
        const delta = distance - lastDistance.current;
        applyZoom(scale.get() + delta * 0.01);
      }
      lastDistance.current = distance;
    }
  }

  function handleTouchEnd(event: ReactTouchEvent<HTMLDivElement>) {
    if (event.touches.length < 2) {
      lastDistance.current = null;
    }
  }

  function handlePointerDoubleClick() {
    toggleDoubleTapZoom();
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full touch-none select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handlePointerDoubleClick}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ scale, x, y }}
        drag={isZoomed}
        dragElastic={0.06}
        dragMomentum={false}
        dragConstraints={containerRef}
      >
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className="pointer-events-none object-contain"
        />
      </motion.div>
    </div>
  );
}
