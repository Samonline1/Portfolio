"use client";

import React, { useEffect, useState } from "react";

const Loading = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2; // Speed up the loading text
      });
    }, 20);

    const finishTimeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      onFinish();
    }, 1100);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500">
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-purple-600 transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-purple-600 font-mono text-sm tracking-[0.2em] font-medium">
        {progress}%
      </p>
    </div>
  );
};

export default Loading;
