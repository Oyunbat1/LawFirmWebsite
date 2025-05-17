"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/app/utils/useMousePosition";

interface Props {
  children: React.ReactNode;
  showMask?: boolean;
  maskColor?: string;
}

const CursorMaskWrapper = ({ children, showMask = true }: Props) => {
  const { x, y } = useMousePosition();

  const size = 20;

  return (
    <div className="relative w-screen">
      {children}
      {showMask && (
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="pointer-events-none fixed top-0 left-0 z-50 w-full h-full"
          style={{
            maskImage: 'url("/mask.webp")',
            WebkitMaskImage: 'url("/mask.webp")',
            background: "black",
            maskRepeat: "no-repeat",
            maskPosition: "50%",
            maskSize: "40px",
            color: "white",
          }}
        />
      )}
    </div>
  );
};

export default CursorMaskWrapper;
