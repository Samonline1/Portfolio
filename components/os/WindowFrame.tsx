"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import { useWindowManager, WindowState } from "./WindowManager";
import { IoClose, IoRemove, IoExpand } from "react-icons/io5";

export const WindowFrame = ({ windowState, children }: { windowState: WindowState; children: ReactNode }) => {
  const { id, title, isMinimized, isMaximized, zIndex, x, y, width, height } = windowState;
  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, updateWindowPosition } = useWindowManager();

  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, winX: 0, winY: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag on left click and on the title bar
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      winX: x,
      winY: y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || isMaximized) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    updateWindowPosition(id, dragStart.current.winX + deltaX, dragStart.current.winY + deltaY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  if (isMinimized) return null;

  return (
    <div
      onPointerDown={() => focusWindow(id)}
      className={`absolute flex flex-col overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-200 ease-out sm:transition-none ${
        isMaximized
          ? "inset-0 !w-full !h-full !rounded-none !translate-x-0 !translate-y-0"
          : ""
      }`}
      style={{
        zIndex,
        width: isMaximized ? "100%" : width,
        height: isMaximized ? "100%" : height,
        transform: isMaximized ? "none" : `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 select-none cursor-default"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={() => maximizeWindow(id)}
      >
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => closeWindow(id)}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group"
          >
            <IoClose className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => minimizeWindow(id)}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center group"
          >
            <IoRemove className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => maximizeWindow(id)}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center group"
          >
            <IoExpand className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="text-xs font-semibold text-gray-300 font-sans tracking-wide">
          {title}
        </div>
        <div className="w-12"></div> {/* Spacer for centering title */}
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto relative bg-transparent text-white custom-scrollbar">
        {children}
      </div>
    </div>
  );
};
