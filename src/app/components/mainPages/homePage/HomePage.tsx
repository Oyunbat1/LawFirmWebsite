"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScroll, motion, easeInOut } from "motion/react";
function HomePage() {
  const MotionImage = motion(Image);
  return (
    <motion.div
      className="h-screen w-screen  relative  lg:flex lg:items-center"
      id="scroll-indicator"
    >
      <MotionImage
        width={400}
        height={300}
        alt="bgImage"
        src="/section-1.webp"
        className="bg-cover absolute bottom-0 right-0 h-[429px] w-[618px] sm:h-[449px] sm:w-[719px] md:h-[589px] md:w-[789px] lg:h-[619px] lg:w-[812px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mt-[100px] absolute left-[40px] flex flex-col gap-4 lg:ml-[100px]"
      >
        <h1 className="text-[32px] w-[318px] sm:text-[38px] sm:w-[378px] lg:text-[44px] lg:w-[532px] xl:text-[54px] ">
          Host Design Meetings From Anywhere
        </h1>
        <p className="text-[16px] font-[400] w-[316px] sm:text-[18px] sm:w-[356px] lg:w-[408px] xl:w-[568px]">
          Unlock your design skills to create beautiful websites and apps with a
          poweful and easy-to-use tool.
        </p>
        <Button className="w-[137px] h-[44px] xl:w-[228px] xl:h-[56px]  lg:w-[228px] lg:h-[56px] bg-black text-white ">
          Холбогдох
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
