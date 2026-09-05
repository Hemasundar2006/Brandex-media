"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on fine pointers (desktop mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    }

    const moveCursor = (e: MouseEvent) => {
      const size = active && text ? 80 : active ? 40 : 16;
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor-text]") as HTMLElement;
      if (cursorTarget) {
        setText(cursorTarget.getAttribute("data-cursor-text") || "");
        setActive(true);
      } else {
        const isClickable = target.closest('a, button, [role="button"]');
        if (isClickable) {
          setActive(true);
          setText("");
        } else {
          setActive(false);
          setText("");
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [active, text, cursorX, cursorY]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      suppressHydrationWarning
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] items-center justify-center font-bold text-[10px] uppercase tracking-wider overflow-hidden shadow-lg hidden md:flex"
      style={{
        x,
        y,
        width: active && text ? 80 : active ? 40 : 16,
        height: active && text ? 80 : active ? 40 : 16,
        backgroundColor: active ? "var(--color-brand-accent)" : "white",
        opacity: 0.9,
        transition: "width 0.2s, height 0.2s, background-color 0.2s",
      }}
    >
      {active && text && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-1 text-black font-extrabold leading-tight"
        >
          {text}
        </motion.span>
      )}
    </motion.div>
  );
}
