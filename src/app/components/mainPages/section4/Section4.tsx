import React from "react";

function Section4() {
  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center gap-10 md:gap-16 pb-[80px]  s">
      <div className="flex flex-col xl:gap-18 gap-10 xl:justify-center xl:items-center">
        <h1 className="w-[337px] h-[45px] text-[24px] font-[700] text-center md:text-[34px] md:w-[537px] xl:text-[60px] xl:w-screen">
          Lorem Ipsum is simply dummy
        </h1>
        <p className=" w-[358px] h-[42px] text-[12px] font-[400] md:w-[537px] md:text-[18px] xl:w-[1000px] xl:text-[20px]">
          Welcome to Burger Bliss, where we take your cravings to a whole new
          level! Our mouthwatering burgers are made from 100% beef and are
          served on freshly baked buns.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="flex gap-4">
          <div className="w-[171px] h-[171px] bg-red-500 sm:w-[191px] sm:h-[191px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px]"></div>
          <div className="w-[171px] h-[171px] bg-red-500 sm:w-[191px] sm:h-[191px] lg:w-[280px] lg:h-[280px]  xl:w-[360px] xl:h-[360px]"></div>
        </div>
        <div className="w-[358px] h-[177px] bg-red-600 sm:w-[391px] sm:h-[191px] md:w-[191px] lg:w-[280px] lg:h-[280px]  xl:w-[360px] xl:h-[360px]"></div>
      </div>
    </div>
  );
}

export default Section4;
