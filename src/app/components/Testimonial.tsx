"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
function Testimonial() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return (
    <>
      {isMobile && (
        <div className="h-[635px] w-auto bg-slate-200 pt-[70px] flex items-center justify-between">
          <div>a</div>
        </div>
      )}
      {!isMobile && (
        <div className="h-[635px] w-auto bg-slate-200 pt-[70px] flex items-center justify-between">
          <div>a</div>
          <div className="bg-[url('/section-1.webp')] bg-no-repeat  bg-cover bg-center h-full  w-[600px]"></div>
        </div>
      )}
    </>
  );
}

export default Testimonial;
