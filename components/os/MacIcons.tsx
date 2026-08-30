"use client";
import React from "react";
import { FaFolderOpen, FaTerminal, FaCog, FaStore, FaEnvelope, FaFilePdf, FaClipboardList, FaLayerGroup } from "react-icons/fa";

export const FinderIcon = () => (
  <FaFolderOpen className="w-full h-full text-blue-400 drop-shadow-[0_4px_10px_rgba(96,165,250,0.6)] transition-all hover:scale-110" />
);

export const TerminalIcon = () => (
  <FaTerminal className="w-full h-full text-gray-400 drop-shadow-[0_4px_10px_rgba(156,163,175,0.6)] transition-all hover:scale-110" />
);

export const MailIcon = () => (
  <FaEnvelope className="w-full h-full text-green-400 drop-shadow-[0_4px_10px_rgba(74,222,128,0.6)] transition-all hover:scale-110" />
);

export const NotesIcon = () => (
  <FaClipboardList className="w-full h-full text-yellow-400 drop-shadow-[0_4px_10px_rgba(250,204,21,0.6)] transition-all hover:scale-110" />
);

export const AppStoreIcon = () => (
  <FaStore className="w-full h-full text-cyan-400 drop-shadow-[0_4px_10px_rgba(34,211,238,0.6)] transition-all hover:scale-110" />
);

export const SettingsIcon = () => (
  <FaCog className="w-full h-full text-gray-300 drop-shadow-[0_4px_10px_rgba(209,213,219,0.6)] transition-all hover:scale-110" />
);

export const FolderIcon = () => (
  <FaLayerGroup className="w-full h-full text-purple-400 drop-shadow-[0_4px_10px_rgba(192,132,252,0.6)] transition-all hover:scale-110" />
);

export const PreviewIcon = () => (
  <FaFilePdf className="w-full h-full text-red-500 drop-shadow-[0_4px_10px_rgba(248,113,113,0.6)] transition-all hover:scale-110" />
);
