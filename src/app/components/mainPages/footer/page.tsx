import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({ id }: any) {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=sainkanzlei@gmail.com",
      "_blank"
    );
  };
  return (
    <div
      id={id}
      className="w-screen h-[300px] pt-[260px] pb-[120px] flex flex-col items-center justify-center p-[40px] gap-[40px]"
    >
      <div className="h-auto w-full flex flex-col gap-2.5 mt-[140px] sm:flex-row sm:justify-around xl:justify-between xl:px-[40px]">
        <div className="flex flex-col gap-4 xl:gap-8">
          <Image
            src="/logo.webp"
            width={186}
            height={186}
            alt="logo"
            className="cursor-pointer w-[146px] lg:w-[186px]"
          />
          <p className="w-[240px] text-[14px] lg:text-[16px]">
            Бид таны эрхийг хамгаалж, үнэнийг тогтоохын төлөө хамт зогсох болно.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 xl:gap12 xl:mr-[40px]">
          <div className="flex flex-col gap-3 xl:gap-6">
            <h1 className="h-[16px] lg:text-[18px] font-[600]">Нүүр хуудас</h1>
            <div className="flex flex-col gap-1 xl:gap-3 font-[400] text-[14px] lg:text-[16px] xl:py-[6px]">
              <Link
                href="#section2"
                scroll={true}
                className="hover:text-blue-500 transition-colors"
              >
                Үндсэн хууль
              </Link>
              <Link
                href="#services"
                scroll={true}
                className="hover:text-blue-500 transition-colors"
              >
                Эрх зүй
              </Link>
              <Link
                href="#section4"
                scroll={true}
                className="hover:text-blue-500 transition-colors"
              >
                Зорилго
              </Link>
              <Link
                href="#employees"
                scroll={true}
                className="hover:text-blue-500 transition-colors"
              >
                Хамт олон
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:gap-6">
            <h1 className="h-[16px] lg:text-[18px] font-[600]">Холбоо барих</h1>
            <div className="flex flex-col gap-1 xl:gap-3 font-[400] text-[14px] lg:text-[16px] xl:py-[6px]">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                Facebook
              </Link>
              <p
                className="hover:text-blue-500 transition-colors"
                onClick={handleEmailClick}
              >
                {" "}
                Gmail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[20px] flex flex-col justify-center gap-[30px] h-auto w-full sm:flex-row sm:justify-around xl:justify-between xl:px-[40px] xl:mr-[40px]">
        <p className="xl:pl-[40px]">@2025 ...</p>
        <div className="flex gap-3 justify-center text-[12px]">
          <p>Нууцлалын бодлого</p>
          <p>Үйлчилгээний нөхцөл</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
