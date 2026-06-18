import { useEffect } from "react";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timeout = setTimeout(onFinish, 1100);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center px-5 sm:px-6"
    >
      <div className="w-full max-w-[420px]">
        {/* Title */}
        <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
          <h1 className="hidden sm:block text-white sm:text-4xl md:text-5xl font-light leading-tight">
            Loading
          </h1>

          <span
            className="text-purple-900 text-5xl sm:text-2xl md:text-3xl shrink-0 mx-auto sm:mx-0"
          >
            100%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-[5px] sm:h-[6px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-900 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
