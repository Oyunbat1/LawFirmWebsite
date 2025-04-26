import React from "react";

function Info() {
  return (
    <div className="h-auto  w-screen border-t-gray-400 border-t-2 flex flex-col gap-[40px] items-center justify-center pb-[100px]">
      <h1 className="pt-[40px] text-[20px] font-[700] w-[335px] h-[22px] sm:text-[26px] sm:w-[430px] lg:text-[42px] lg:w-[980px] lg:text-center lg:my-[20px] xl:mb-[40px] ">
        Bibendum amet at molestie mattis.
      </h1>
      <p className="w-[428px] h-[85px] sm:w-[530px] lg:text-[22px] lg:h-[50px] lg:w-[880px] xl:w-[1200px]">
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
        scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus
        iaculis.
      </p>
      <div className="grid grid-cols-2 gap-5 mt-8  lg:mt-[100px]">
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
      </div>
    </div>
  );
}

export default Info;
