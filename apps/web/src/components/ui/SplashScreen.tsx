import { AnimatePresence, motion } from "motion/react";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

import brandLogo from "../../assets/brandLogo.svg";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps): ReactElement {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait 2.5 seconds, then start hiding
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
        >
          {/* Ambient Background Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/20"
          />

          <div className="relative flex flex-col items-center justify-center">
            {/* Pulsating ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.15, 0], scale: [0.8, 1.4, 1.6] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
              className="absolute h-40 w-40 rounded-full bg-blue-600/20 dark:bg-blue-400/20"
            />

            {/* Logo with blur reveal */}
            <motion.img
              src={brandLogo}
              alt="CavinKare"
              initial={{ scale: 0.9, opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 h-16 w-auto md:h-20 dark:invert"
            />

            {/* Subtle loading line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 h-[2px] w-32 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-blue-600 dark:bg-blue-500"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
