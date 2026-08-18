import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./LoadingScreen.css";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    let completed = false;

    const interval = setInterval(() => {
      current += 1;

      setProgress(current);

      if (current >= 100 && !completed) {
        completed = true;
        clearInterval(interval);

        // Pastikan 100% terlihat terlebih dahulu
        setTimeout(() => {
          setIsExiting(true);

          setTimeout(() => {
            onComplete?.();
          }, 500);
        }, 700);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen"
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* Decorative glow */}
          <div className="loading-glow loading-glow-one"></div>
          <div className="loading-glow loading-glow-two"></div>
          <div className="loading-glow loading-glow-three"></div>

          {/* Decorative stars */}
          <motion.div
            className="loading-star star-one"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="loading-star star-two"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✧
          </motion.div>

          <motion.div
            className="loading-star star-three"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.15, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>

          {/* Main content */}
          <div className="loading-content">

            <h1 className="loading-title">
              Shafa's Portfolio
            </h1>

            <div className="loading-progress-wrapper">

              <div className="loading-progress-track">
                <div
                  className="loading-progress-bar"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div className="loading-progress-text">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;