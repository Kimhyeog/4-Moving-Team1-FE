"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string; // Tailwind class string, e.g., "w-[500px]"
  height?: string;
}

const ResponsiveModal: React.FC<ResponsiveModalProps> = ({
  isOpen,
  onClose,
  children,
  width = "w-full",
  height = "h-auto",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isFullWidth, setIsFullWidth] = useState(true); // true면 bottom 모달

  useEffect(() => {
    const updatePosition = () => {
      if (!modalRef.current) return;

      const modalWidth = modalRef.current.offsetWidth;
      const windowWidth = window.innerWidth;

      // modalWidth가 windowWidth보다 커지면 bottom sheet 스타일
      setIsFullWidth(modalWidth >= windowWidth);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [width]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-gray-300/30 backdrop-blur-[1px] transition-all duration-300"
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            ref={modalRef}
            className={`
              fixed z-50 bg-white p-6
              ${height}
              ${width}
              ${
                isFullWidth
                  ? // 👇 바닥 모달 (화면 너비보다 모달이 크거나 같을 때)
                    "bottom-0 left-0 w-full rounded-t-3xl"
                  : // 👇 중앙 모달 (모달이 더 작을 때)
                    "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-2xl shadow-xl"
              }
            `}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveModal;
