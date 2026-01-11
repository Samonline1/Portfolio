import { motion } from "framer-motion";

const Loading = ({ onFinish }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-purple-900 z-[999]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      onAnimationComplete={onFinish}
    />
  );
};

export default Loading;
