"use client";
import React from "react";
import { useScroll, motion, easeInOut } from "framer-motion";
function Info() {
  return (
    <div className="h-[400px] pt-[100px] w-screen border-t-gray-400 border-t-2 flex flex-col gap-[40px] items-center justify-center">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="pt-[40px] text-[20px] font-[700] w-[335px] h-[22px] sm:text-[26px] sm:w-[430px] lg:text-[42px] lg:w-[980px] lg:text-center lg:my-[20px] xl:mb-[20px] "
      >
        Bibendum amet at molestie mattis.
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[348px] h-[85px] sm:w-[530px] lg:text-[22px] lg:h-[50px] lg:w-[880px] xl:w-[1200px]"
      >
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
        scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus
        iaculis.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-2 gap-5 mt-14  lg:mt-[100px]"
      >
        <div className="w-[172px] sm:w-[192px] h-[48px] xl:w-[302px] xl:h-[80px] sm:h-[58px] bg-slate-500 flex items-center justify-center gap-4">
          <div className="w-[30px] h-[30px] bg-white"></div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[14px] font-bold">250+</p>
            <p className="text-[9px]">Availble Resourse</p>
          </div>
        </div>
        <div className="w-[172px] sm:w-[192px] h-[48px]  xl:w-[302px] xl:h-[80px] sm:h-[58px] bg-slate-500 flex items-center justify-center gap-4">
          <div className="w-[30px] h-[30px] bg-white"></div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[14px] font-bold">250+</p>
            <p className="text-[9px]">Availble Resourse</p>
          </div>
        </div>
        <div className="w-[172px] sm:w-[192px] h-[48px]  xl:w-[302px] xl:h-[80px] sm:h-[58px] bg-slate-500 flex items-center justify-center gap-4">
          <div className="w-[30px] h-[30px] bg-white"></div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[14px] font-bold">250+</p>
            <p className="text-[9px]">Availble Resourse</p>
          </div>
        </div>
        <div className="w-[172px] sm:w-[192px] h-[48px]  xl:w-[302px] xl:h-[80px] sm:h-[58px] bg-slate-500 flex items-center justify-center gap-4">
          <div className="w-[30px] h-[30px] bg-white"></div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[14px] font-bold">250+</p>
            <p className="text-[9px]">Availble Resourse</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
