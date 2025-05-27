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
        className="pt-[40px] text-[20px] font-[700] w-[335px] h-[22px] sm:text-[26px] sm:w-[430px] lg:text-[42px] lg:w-[980px] lg:text-center lg:my-[20px] xl:mb-[20px] text-center"
      >
        Монгол улсын үндсэн хууль
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[348px] h-[85px] mt-[20px] sm:w-[530px] lg:text-[22px] lg:h-[50px] lg:w-[880px] xl:w-[1200px]"
      >
        Монгол Улсад засгийн бүх эрх ард түмний мэдэлд байна. Монголын ард түмэн
        төрийн үйл хэрэгт шууд оролцож, мөн сонгож байгуулсан төрийн эрх барих
        төлөөлөгчдийн байгууллагаараа уламжлан энэхүү эрхээ эдэлнэ.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-[30px] lg:flex-row  mt-[20px] "
      >
        <div className="flex flex-col   xl:flex-row  xl:gap-[10px] gap-[20px] mt-[40px] md:gap-[40px]">
          <div className="flex gap-[10px] md:gap-[24px]">
            <div className="flex items-center justify-centere gap-[12px] md:px-[50px] md:h-[85px] xl:px-[35px]  px-[4px] h-[60px]  border border-slate-400 rounded-md">
              <p className="text-[#BEA673] text-[22px] md:text-[42px] font-bold pl-[10px]">
                932
              </p>
              <p className="w-[90px] leading-tight font-medium text-[10px] md:text-[14px] text-center">
                МОНГОЛ УЛСЫН ХУУЛЬ
              </p>
            </div>
            <div className="flex items-center justify-center  gap-[12px]  px-[4px] h-[60px]  md:px-[50px] md:h-[85px] xl:px-[35px] border border-slate-400 rounded-md">
              <p className="pl-[10px] text-[#BEA673] text-[22px] md:text-[42px]  font-bold">
                2,447
              </p>
              <p className="w-[100px] leading-tight font-medium text-[10px] md:text-[14px]">
                МОНГОЛ УЛСЫН ИХ ХУРЛЫН ТОГТООЛ
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] md:gap-[24px]">
            <div className="flex items-center  justify-center gap-[12px]  px-[4px] h-[60px]  md:px-[50px] md:h-[85px] xl:px-[35px]   border border-slate-400 rounded-md">
              <p className="pl-[10px] text-[#BEA673] text-[22px] md:text-[42px]  font-bold">
                3.090
              </p>
              <p className="w-[100px] leading-tight font-medium text-[10px] md:text-[14px] ">
                ЗАХИРГААНЫ ХЭМ ХЭМЖЭЭНИЙ АКТ
              </p>
            </div>
            <div className="flex items-center justify-center  gap-[12px]  px-[4px] h-[60px]  md:px-[50px] md:h-[85px] xl:px-[35px]  border border-slate-400 rounded-md">
              <p className="text-[#BEA673] pl-[10px] text-[22px] md:text-[42px]  font-bold">
                326
              </p>
              <p className="w-[90px] leading-tight font-medium text-[10px] md:text-[14px] text-center ">
                ХУУЛИЙН ОРЧУУЛГА
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
