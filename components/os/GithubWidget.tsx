"use client";
import React from "react";

export const GithubWidget = () => {
  return (
<div className="flex-1 w-full max-w-[624px] bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-5 text-white shadow-2xl relative overflow-hidden">

  {/* Background glow */}
  <div className="absolute inset-0 bg-green-500/10 blur-[80px] pointer-events-none" />

  {/* Header */}
  <div className="relative z-10 flex items-center gap-2 mb-4">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>

    <h2 className="text-xs font-bold text-gray-300">
      GitHub Contributions
    </h2>
  </div>

  {/* Contribution grid */}
  <div className="relative z-10 overflow-x-auto no-scrollbar">
    <div className="flex gap-[5px] min-w-max ">

      {Array.from({ length: 53 }).map((_, week) => (
        <div key={week} className="flex flex-col gap-[5px]">

          {Array.from({ length: 7 }).map((_, day) => {

            const level = Math.floor(Math.random() * 5);

            const levels = [
              "bg-white/5",
              "bg-green-900",
              "bg-green-700",
              "bg-green-500",
              "bg-green-300",
            ];

            return (
              <div
                key={day}
                className={`w-[8px] h-[8px] sm:w-[8px] sm:h-[8px] rounded-[3px] ${levels[level]} transition-all hover:scale-125`}
              />
            );
          })}

        </div>
      ))}

    </div>
  </div>

  {/* Legend */}
  <div className=" no-scrollbar relative z-10 flex items-center justify-end gap-2 mt-3 text-[10px] text-gray-500">
    Less

    {[0, 1, 2, 3, 4].map((level) => (
      <div
        key={level}
        className={`w-[11px] h-[11px] rounded-[3px] ${
          [
            "bg-white/5",
            "bg-green-900",
            "bg-green-700",
            "bg-green-500",
            "bg-green-300",
          ][level]
        }`}
      />
    ))}

    More
  </div>

</div>
  );
};
