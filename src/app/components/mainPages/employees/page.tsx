"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

function Employee() {
  return (
    <div>
      <div
        className="bg-gray-100 h-auto w-screen px-[40px] flex flex-col items-center justify-center gap-8 pb-[120px] pt-[100px]
      "
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-[700] text-[18px] md:text-[34px] xl:text-[42px]">
            Багийн гишүүд
          </h1>
          <p className="text-center text-[16px] font-[400] sm:w-[448px] md:text-[20px] lg:w-[558px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <Image
            src="/employees/oyunbat.jpg"
            width={100}
            height={100}
            alt="logo"
            className="cursor-pointer rounded-md w-[200px] md:w-[220px] lg:w-[250px]"
          />
          <div className="flex flex-col gap-1 lg:gap-2 items-center">
            <h1 className=" md:text-[20px] xl:text-[28px] font-[600]">Нэр</h1>
            <p>Мэргэжил</p>
            <div className="flex gap-6">
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {" "}
                <a href="https://www.facebook.com/facebook/">
                  {" "}
                  <Linkedin className="w-[18px] md:w-[28px]" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {" "}
                <a href="https://www.facebook.com/facebook/">
                  {" "}
                  <Twitter className="w-[18px] md:w-[28px]" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {" "}
                <a href="https://www.facebook.com/facebook/">
                  {" "}
                  <Instagram className="w-[18px] md:w-[28px]" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {" "}
                <a href="https://www.facebook.com/facebook/">
                  {" "}
                  <Facebook className="w-[18px] md:w-[28px]" />
                </a>
              </motion.div>
            </div>
            <Button className="mt-[20px] border-1 bg-[#BEA673] hover:bg-[#ad935c]  text-white cursor-pointer">
              Холбоо барих
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
