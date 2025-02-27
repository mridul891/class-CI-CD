'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Trigger confetti when component mounts
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-bounce">
          Happy Birthday Mridul! 🎉
        </h1>
        <div className="space-y-4 text-white text-xl md:text-2xl animate-fade-in">
          <p className="opacity-90">
            Wishing you a day filled with joy, laughter, and amazing moments!
          </p>
          <p className="opacity-90">
            May this year bring you endless opportunities and success! 🌟
          </p>
          <div className="mt-8 text-3xl">
            🎂 🎈 🎁
          </div>
        </div>
      </div>
    </main>
  );
}
