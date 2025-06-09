"use client";
import Image from "next/image";
import React from "react";

function Section4() {
  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center gap-10 md:gap-16 pb-[80px]  s">
      <div className="flex flex-col xl:gap-18 gap-4 xl:justify-center xl:items-center">
        <h1 className="w-[337px] h-[45px] text-[24px] font-[700] text-center md:text-[34px] md:w-[537px] xl:text-[60px] xl:w-screen">
          Бидний эрхэм зорилго
        </h1>
        <p className="text-black w-[358px] h-[42px] text-[12px] font-[400] md:w-[537px] md:text-[18px] xl:w-[1000px] xl:text-[22px] pb-[80px]">
          Монгол Улсад засгийн бүх эрх ард түмний мэдэлд байна. Монголын ард
          түмэн төрийн үйл хэрэгт шууд оролцож, мөн сонгож байгуулсан төрийн эрх
          барих төлөөлөгчдийн байгууллагаараа уламжлан энэхүү эрхээ эдэлнэ.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="flex gap-4">
          <div className=" flex justify-center items-center relative group overflow-hidden ">
            {" "}
            <Image
              src={"/mission/mission-img1.webp"}
              width={171}
              height={171}
              alt="mission-1"
              className=" object-cover transform transition-transform group-hover:scale-125 duration-1000 sm:w-[191px] sm:h-[191px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] shadow-2xl"
            ></Image>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className=" w-[140px] text-white text-[10px] sm:text-[14px] lg:text-[16px]  lg:w-[260px] sm:h-[120px]  h-[100px] flex items-center justify-center text-center">
                Үйлчлүүлэгчийн эрх, хууль ёсны ашиг сонирхлыг хамгаалах
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          </div>

          <div className=" flex justify-center items-center relative group overflow-hidden ">
            {" "}
            <Image
              src={"/mission/mission-img2.webp"}
              width={171}
              height={171}
              alt="mission-1"
              className=" object-cover transform transition-transform group-hover:scale-125 duration-1000 sm:w-[191px] sm:h-[191px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] shadow-2xl"
            ></Image>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="text-center w-[160px] text-white text-[10px] sm:text-[14px] lg:text-[16px]  lg:w-[260px] flex items-center justify-center">
                Шаардлагатай эрх зүйн зөвлөгөө, дэмжлэгийг мэргэжлийн түвшинд
                үзүүлэх
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
          </div>
        </div>
        <div className=" flex justify-center items-center relative group overflow-hidden ">
          {" "}
          <Image
            src={"/mission/mission-img3.webp"}
            width={171}
            height={171}
            alt="mission-1"
            className=" object-cover transform transition-transform group-hover:scale-125 duration-1000 w-[358px] h-[141px] sm:w-[191px] sm:h-[191px] lg:w-[280px] lg:h-[280px] xl:w-[360px] xl:h-[360px] shadow-2xl"
          ></Image>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <p className="text-center w-[160px] text-white text-[10px] sm:text-[14px] lg:text-[16px]  lg:w-[260px] sm:h-[120px] h-[100px] flex items-center justify-center">
              Эрсдэлийг бууруулж, хамгийн үр дүнтэй шийдлийг олох
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
