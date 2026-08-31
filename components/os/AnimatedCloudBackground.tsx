"use client";

import React from "react";
import Image from "next/image";
import bg from "@/docs/assets/bg.jpeg";

export const AnimatedCloudBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[linear-gradient(180deg,var(--sky-color,#48a1df)_0%,#72b8e5_45%,#a9d9ef_100%)]"
      aria-hidden="true"
    >
      <Image className="h-full w-full bg-cover bg-center
      " src={bg} alt="" />
      {/* FAR CLOUDS */}
      <div
        className="absolute inset-0 opacity-35 blur-[12px]"
        style={{
          animation: "cloudMove 160s linear infinite",
        }}
      >
        <CloudGroup scale={1.5} x="8%" y="18%" />
        <CloudGroup scale={2.2} x="72%" y="12%" />
        <CloudGroup scale={1.3} x="42%" y="48%" />
        {/* <CloudGroup scale={2.0} x="88%" y="68%" />
        <CloudGroup scale={1.6} x="18%" y="78%" /> */}
      </div>

      {/* MID CLOUDS */}
      {/* <div
        className="absolute inset-0 opacity-45 blur-[9px]"
        style={{
          animation: "cloudMove 120s linear infinite",
        }}
      >
        <CloudGroup scale={1.8} x="20%" y="30%" />
        <CloudGroup scale={1.4} x="62%" y="38%" />
        <CloudGroup scale={2.0} x="92%" y="28%" />
        <CloudGroup scale={1.5} x="35%" y="72%" />
        <CloudGroup scale={1.8} x="76%" y="82%" />
      </div> */}

      {/* NEAR CLOUDS */}
      {/* <div
        className="absolute inset-0 opacity-50 blur-[6px]"
        style={{
          animation: "cloudMove 90s linear infinite",
        }}
      >
        <CloudGroup scale={1.7} x="5%" y="52%" />
        <CloudGroup scale={2.4} x="48%" y="20%" />
        <CloudGroup scale={1.5} x="82%" y="48%" />
        <CloudGroup scale={2.0} x="25%" y="90%" />
        <CloudGroup scale={1.7} x="68%" y="72%" />
      </div> */}
    </div>
  );
};


// Reusable Cloud
const CloudGroup = ({
  scale = 1,
  x = "50%",
  y = "50%",
  className = "",
}) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <svg
        width="400"
        height="250"
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main cloud */}
        <path
          d="M140 120C140 86.8629 166.863 60 200 60C226.545 60 249.055 77.2536 256.764 100.932C261.353 96.1156 267.873 93 275 93C288.807 93 300 104.193 300 118C300 119.513 299.866 120.995 299.613 122.428C313.111 125.684 323 137.915 323 152.5C323 169.069 309.569 182.5 293 182.5H135C110.147 182.5 90 162.353 90 137.5C90 114.733 106.669 95.8239 128.539 91.9566C131.558 107.986 140 120 140 120Z"
          fill="white"
        />

        {/* Soft cloud blobs */}
        <circle
          cx="160"
          cy="135"
          r="50"
          fill="white"
          opacity="0.8"
        />

        <circle
          cx="230"
          cy="125"
          r="60"
          fill="white"
          opacity="0.75"
        />

        <circle
          cx="270"
          cy="145"
          r="40"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

