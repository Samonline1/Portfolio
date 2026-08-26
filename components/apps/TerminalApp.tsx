"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWindowManager, AppId } from "../os/WindowManager";

interface LogEntry {
  type: "input" | "output" | "error";
  text: string;
}

export const TerminalApp = () => {
  const { openWindow, closeWindow, windows } = useWindowManager();
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "output", text: "Welcome to SamOS Terminal v1.0.0" },
    { type: "output", text: "Type 'help' for a list of available commands." }
  ]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<"~" | "~/Portfolio">("~");
  
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const inputCmds = history.filter(h => h.type === "input").map(h => h.text.split("$ ")[1]);
      if (inputCmds.length > 0) {
        const newIndex = historyIndex < inputCmds.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(inputCmds[inputCmds.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const inputCmds = history.filter(h => h.type === "input").map(h => h.text.split("$ ")[1]);
        setInput(inputCmds[inputCmds.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdStr = input.trim();
    if (!cmdStr) return;

    setHistoryIndex(-1); // Reset history index on submit
    setHistory((prev) => [...prev, { type: "input", text: `sam@samos:${cwd}$ ${cmdStr}` }]);
    setInput("");

    const args = cmdStr.split(" ").filter(Boolean);
    const cmd = args[0].toLowerCase();

    const output: LogEntry[] = [];

    switch (cmd) {
      case "help":
        output.push({ type: "output", text: "Available commands: help, clear, ls, cd, about, experience, projects, contact, resume, skills, open, close, exit, whoami" });
        break;
      case "clear":
        setHistory([]);
        return;
      case "ls":
        if (cwd === "~") {
          output.push({ type: "output", text: "Portfolio  Terminal" });
        } else if (cwd === "~/Portfolio") {
          output.push({ type: "output", text: "About  Experience  Projects  Contact  Skills  Resume.pdf" });
        }
        break;
      case "cd":
        const target = args[1];
        if (!target || target === "~") setCwd("~");
        else if (target === "Portfolio" && cwd === "~") setCwd("~/Portfolio");
        else if (target === ".." && cwd === "~/Portfolio") setCwd("~");
        else output.push({ type: "error", text: `cd: no such file or directory: ${target}` });
        break;
      case "whoami":
        output.push({ type: "output", text: "sam" });
        break;
      case "about":
      case "experience":
      case "projects":
      case "contact":
      case "resume":
      case "skills":
        // Direct open aliases
        openWindow(cmd as AppId);
        output.push({ type: "output", text: `Opening ${cmd}...` });
        break;
      case "open":
        const appToOpen = args[1]?.toLowerCase();
        if (["about", "experience", "projects", "contact", "resume", "skills", "portfolio", "terminal"].includes(appToOpen)) {
          openWindow(appToOpen as AppId);
          output.push({ type: "output", text: `Opening ${appToOpen}...` });
        } else {
          output.push({ type: "error", text: `open: unknown application '${appToOpen}'` });
        }
        break;
      case "close":
      case "exit":
        const termWin = windows.find(w => w.appId === "terminal");
        if (termWin) {
          closeWindow(termWin.id);
        }
        return;
      default:
        output.push({ type: "error", text: `Command not found: ${cmd}` });
    }

    setHistory((prev) => [...prev, ...output]);
  };

  return (
    <div 
      className="h-full w-full bg-black/95 text-green-400 font-mono text-sm p-4 flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-auto custom-scrollbar flex flex-col gap-1">
        {history.map((entry, i) => (
          <div key={i} className={`${entry.type === "error" ? "text-red-400" : entry.type === "input" ? "text-gray-300" : "text-green-400"}`}>
            {entry.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2 shrink-0">
        <span className="text-blue-400 font-bold select-none">sam@samos:{cwd}$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none text-green-400 shadow-none focus:ring-0"
          autoFocus
        />
      </form>
    </div>
  );
};

