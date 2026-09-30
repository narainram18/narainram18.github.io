import React, { useEffect, useRef } from 'react';
import { useRealmMode } from '@/context/RealmModeContext';

interface EmberCanvasProps {
  className?: string;
  particleCount?: number;
}

interface Ember {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkle: number;
}

export const EmberCanvas: React.FC<EmberCanvasProps> = ({
  className = 'absolute inset-0 pointer-events-none w-full h-full z-10',
  particleCount = 20,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isSpecMode } = useRealmMode();

  useEffect(() => {
    if (isSpecMode) return;
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const parent = canvas.parentElement;
    let width = (canvas.width = parent ? parent.offsetWidth : window.innerWidth);
    let height = (canvas.height = parent ? parent.offsetHeight : window.innerHeight);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const colors = ['#E9C176', '#FFB68C', '#E6C093', '#F28B48'];
    const embers: Ember[] = [];

    for (let i = 0; i < particleCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.35 + 0.1,
        speedY: -(Math.random() * 0.7 + 0.25),
        opacity: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * 0.03 + 0.01,
      });
    }

    let animationId: number | null = null;
    let isIntersecting = true;
    let isTabVisible = document.visibilityState === 'visible';
    let lastTime = performance.now();

    const startAnimation = () => {
      if (animationId === null && isIntersecting && isTabVisible) {
        lastTime = performance.now();
        animationId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Pause rendering when tab is hidden (Page Visibility API)
    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
      if (isTabVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = (time: number) => {
      if (!isIntersecting || !isTabVisible) {
        animationId = null;
        return;
      }

      animationId = requestAnimationFrame(render);

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y += e.speedY * 60 * delta;
        e.x += e.speedX * 60 * delta;
        e.opacity += Math.sin(time * e.twinkle) * 0.012;

        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        if (e.x > width + 10) e.x = -10;
        if (e.x < -10) e.x = width + 10;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.85, e.opacity));
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [particleCount, isSpecMode]);

  if (isSpecMode) return null;

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
