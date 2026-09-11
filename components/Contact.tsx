import React, { forwardRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = forwardRef<HTMLDivElement, {}>((props, contact) => {
  return (
    <div
      ref={contact}
      className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 lg:px-40 py-6 sm:py-8 border-t border-purple-900/40 bg-black/40 text-gray-300 w-full backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-xs sm:text-sm font-medium">
        <span className="text-purple-400">© {new Date().getFullYear()} Sameer Hussain</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span>All Rights Reserved</span>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="https://www.linkedin.com/in/sameer-hussain-6829222a6"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg sm:text-xl" />
        </a>
        <a
          href="mailto:mrsampvt@gmail.com"
          className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
          aria-label="Email"
        >
          <SiGmail className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
