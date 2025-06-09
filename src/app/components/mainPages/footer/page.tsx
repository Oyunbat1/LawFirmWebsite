import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="w-screen h-[300px] pt-[220px] pb-[220px] flex flex-col items-center justify-center border-t-2 border-t-slate-200 p-[40px] gap-[40px] ">
      <div
        className="  h-auto w-full flex flex-col  gap-2.5  mt-[140px] sm:flex-row sm:justify-around xl:justify-between xl:px-[40px]
"
      >
        <div className="flex flex-col gap-4 xl:gap-8">
          <Image
            src="/logo.webp"
            width={186}
            height={186}
            alt="logo"
            className="cursor-pointer"
          />
          <p className="w-[240px] text-[16px] lg:text-[18px]">
            Бид таны эрхийг хамгаалж, үнэнийг тогтоохын төлөө хамт зогсох болно.
          </p>
        </div>
        <div
          className="flex flex-col gap-2 sm:flex-row sm:gap-8 xl:gap12  xl:mr-[40px]
        "
        >
          <div className="flex flex-col gap-3 xl:gap-6 ">
            <h1 className="h-[16px] lg:text-[18px] font-[600]">Нүүр хуудас</h1>
            <div
              className="flex flex-col gap-1 xl:gap-3 font-[400] text-[16px] lg:text-[18px] xl:py-[6px]
"
            >
              <p>Үндсэн хууль</p>
              <p>Эрх зүй</p>
              <p>Зорилго</p>
              <p>Хамт олон</p>
            </div>
          </div>
          <div className="flex flex-col gap-3  xl:gap-6">
            <h1 className="h-[16px] lg:text-[18px] font-[600]">Холбоо барих</h1>
            <div className="flex flex-col gap-1 xl:gap-3 font-[400] text-[16px] lg:text-[18px] xl:py-[6px]">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Gmail</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[20px] flex flex-col justify-center gap-[60px]  h-auto w-full sm:flex-row sm:justify-around  xl:justify-between xl:px-[40px] xl:mr-[40px]">
        <p className="xl:pl-[40px]">@2025 ...</p>
        <div className="flex gap-2 justify-center">
          <p>Нууцлалын бодлого</p>
          <p>Үйлчилгээний нөхцөл</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;
