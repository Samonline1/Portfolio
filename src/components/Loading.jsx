import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onFinish }) {
  const progress = useMotionValue(0);
  const roundedProgress = useTransform(() => `${Math.round(progress.get())}%`);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 0.9,
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center px-5 sm:px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.2,
      }}
      onAnimationComplete={onFinish}
    >
      <div className="w-full max-w-[420px]">
        {/* Title */}
        <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
          <h1 className="hidden sm:block text-white sm:text-4xl md:text-5xl font-light leading-tight">
            Loading
          </h1>

          <motion.span
            className="text-purple-900 text-5xl sm:text-2xl md:text-3xl shrink-0 mx-auto sm:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {roundedProgress}
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="h-[5px] sm:h-[6px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-900 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
