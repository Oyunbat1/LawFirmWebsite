"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useMousePosition from "@/app/utils/useMousePosition";
import useIsInView from "@/app/utils/useIsInView";

interface HomePageProps {
  setMaskEnabled: (val: boolean) => void;
}
const handleEmailClick = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=sainkanzlei@gmail.com",
    "_blank"
  );
};

function HomePage({ setMaskEnabled }: HomePageProps) {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 20;

  const MotionImage = motion(Image);

  const { ref, isInView } = useIsInView();

  useEffect(() => {
    setMaskEnabled(!isInView);
  }, [isInView, setMaskEnabled]);

  return (
    <div ref={ref} className="relative">
      <div className="min-h-screen w-full ">
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="h-full w-full flex flex-col items-center text-black text-[34px] leading-snug cursor-default absolute z-20"
          style={{
            maskImage: 'url("/mask.webp")',
            WebkitMaskImage: 'url("/mask.webp")',
            background: "black",
            maskRepeat: "no-repeat",
            maskPosition: "50%",
            maskSize: "40px",
            color: "white",
          }}
        >
          <div className="mt-[100px] sm:pr-[160px] sm:pt-[20px] md:pr-[320px] xl:pr-[600px]">
            <h1
              className="w-[300px] text-[24px] font-bold sm:w-[400px] sm:text-[36px] md:w-[460px] lg:w-[520px] lg:text-[52px] xl:w-[568px] xl:text-[54px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Аливаа асуудлыг шийдэхэд гаргалгаа үргэлж байдаг.
            </h1>
            <p
              className="text-[16px] w-[300px] mt-[10px] sm:mt-[20px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Хуулийн үйлчилгээг та юу гэж боддог вэ?
            </p>
          </div>
        </motion.div>

        <div className="h-full w-full flex flex-col items-center text-black text-[34px] leading-snug cursor-default bg-white pt-[100px] sm:pr-[160px] sm:pt-[130px] md:pr-[320px] xl:pr-[600px]">
          <div>
            <h1 className="w-[300px] text-[24px] font-bold sm:w-[400px] sm:text-[36px] md:w-[460px] lg:w-[520px] lg:text-[52px] xl:w-[568px] xl:text-[54px]">
              Та өөрийнхөө <span className="text-[#BEA673]">хуулийн</span>{" "}
              үйлчилгээг бидэнд даатга
            </h1>
            <p className="text-[16px] w-[300px] mt-[10px] sm:text-[18px]">
              Бид таны эрхийг хамгаалж, үнэнийг тогтоохын төлөө хамт зогсох
              болно.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[200px] z-30 left-1/2 transform -translate-x-36 translate-y-16 sm:top-[290px] sm:-translate-x-68 md:-translate-x-95 md:top-[266px] lg:top-[366px] lg:-translate-x-103 xl:top-[396px] xl:-translate-x-144">
        <Button
          onClick={handleEmailClick}
          className="w-[137px] h-[44px] xl:w-[228px] xl:h-[56px] lg:w-[228px] lg:h-[56px] bg-[#BEA673] hover:bg-[#ad935c] text-white cursor-pointer"
        >
          Холбогдох <ChevronRight className="text-white" />
        </Button>
      </div>

      <MotionImage
        width={400}
        height={300}
        alt="bgImage"
        src="/section-1.webp"
        className="absolute bottom-0 right-0 bg-cover z-10 h-[329px] w-[518px] sm:h-[429px] sm:w-[519px] md:h-[489px] md:w-[578px] lg:h-[584px] lg:w-[886px] xl:h-[684px] xl:w-[1012px]"
      />
    </div>
  );
}

export default HomePage;
