"use client";
import React from "react";
import { FaFolderOpen, FaTerminal, FaCog, FaStore, FaEnvelope, FaFilePdf, FaClipboardList, FaLayerGroup } from "react-icons/fa";

export const FinderIcon = () => (
  <FaFolderOpen className="w-full p-2 h-full text-blue-400  transition-all hover:scale-110" />
);

export const TerminalIcon = () => (
  <FaTerminal className="w-full p-2 h-full text-white bg-black-400  transition-all hover:scale-110" />
);

export const MailIcon = () => (
  <FaEnvelope className="w-full p-2 h-full text-green-400  transition-all hover:scale-110" />
);

export const NotesIcon = () => (
  <FaClipboardList className="w-full p-2 h-full text-yellow-400  transition-all hover:scale-110" />
);

export const AppStoreIcon = () => (
  <FaStore className="w-full p-2 h-full text-cyan-400  transition-all hover:scale-110" />
);

export const SettingsIcon = () => (
  <FaCog className="w-full p-2 h-full text-gray-300  transition-all hover:scale-110" />
);

export const FolderIcon = () => (
  <FaLayerGroup className="w-full p-2 h-full text-purple-400  transition-all hover:scale-110" />
);

export const PreviewIcon = () => (
  <FaFilePdf className="w-full p-2 h-full text-red-500 transition-all hover:scale-110" />
);
