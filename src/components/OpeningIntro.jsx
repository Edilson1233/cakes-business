import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandIdentity from "./BrandIdentity.jsx";

const INTRO_STORAGE_KEY = "zulmira-cakes-opening-seen-v2";

function hasSeenIntro() {
  try {
    return window.localStorage.getItem(INTRO_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function shouldForceIntro() {
  try {
    return new URLSearchParams(window.location.search).has("intro");
  } catch {
    return false;
  }
}

function markIntroAsSeen() {
  try {
    window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
  } catch {
    // Local storage can be unavailable in private contexts; the intro still works.
  }
}

function OpeningIntro() {
  const reduceMotion = useReducedMotion();
  const [forcedIntro] = useState(() => shouldForceIntro());
  const [visible, setVisible] = useState(() => forcedIntro || !hasSeenIntro());
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const firstDelay = reduceMotion ? 700 : 2000;
    const finishDelay = reduceMotion ? 1700 : 3600;

    const phaseTimer = window.setTimeout(() => setPhase(1), firstDelay);
    const finishTimer = window.setTimeout(() => {
      if (!forcedIntro) {
        markIntroAsSeen();
      }
      setVisible(false);
    }, finishDelay);

    return () => {
      window.clearTimeout(phaseTimer);
      window.clearTimeout(finishTimer);
    };
  }, [forcedIntro, reduceMotion, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-cream px-5 text-center text-cocoa"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <motion.div
              className="flex min-h-16 items-center justify-center"
              initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
              animate={reduceMotion ? {} : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrandIdentity
                className="items-center text-center"
                fallbackClassName="items-center"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.p
                key={phase}
                className="mt-8 font-display text-4xl font-bold leading-tight sm:text-6xl"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: -16 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {phase === 0
                  ? "Toda grande marca começa com um pequeno sonho..."
                  : "Bem-vinda à Zulmira Cakes. ❤️"}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="mt-8 h-1.5 w-44 overflow-hidden rounded-full bg-cocoa/10"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? {} : { opacity: 1 }}
            >
              <motion.div
                className="h-full rounded-full bg-rose"
                initial={reduceMotion ? false : { width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: reduceMotion ? 0.01 : 3.4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OpeningIntro;
