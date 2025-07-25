"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sectionThreeData } from "../constants/serviceItems";
import ServiceComponents from "./serviceComponents/ServiceComponents";
import { motion } from "framer-motion";
function Service({ params }: any) {
  const id = params?.id;
  return (
    <div>
      <div id={id}>
        <motion.div className="w-screen pt-[180px] pb-[100px] flex flex-wrap px-[20px] md:px-[60px] border-t-2 border-t-gray-400  xl:justify-center">
          {sectionThreeData.map((items) => (
            <motion.div
              key={items.id}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-1/2 lg:w-1/3 xl:w-[392px]  xl:h-[300px]  h-[180px] flex justify-center items-center relative group overflow-hidden  
          "
            >
              <Link
                className="block w-full h-full"
                href={`service/${items.id}`}
              >
                {" "}
                <Image
                  width={180}
                  height={180}
                  alt="image"
                  src={items.url}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-125 duration-1000 lg:w-[392px] lg:h-[300px] "
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Image
                    width={80}
                    height={80}
                    alt="logo"
                    src={items.logoUrl}
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Service;
