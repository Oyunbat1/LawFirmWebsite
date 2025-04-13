"use client";
import React, { useState, useEffect } from "react";
import { X, Menu, Facebook, Instagram, Mail } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import List from "./List";
import { ListItems } from "@/app/constants/listItem";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div className="sm:bg-amber-400 md:bg-red-400 lg:bg-blue-400 xl:bg-green-400">
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 h-[80px] flex justify-between pl-4 pr-4 items-center">
          <Image
            src="/logo.webp"
            width={50}
            height={50}
            alt="logo"
            className="cursor-pointer"
          />

          <div
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            className="relative"
          >
            {isMenuOpen ? <X /> : <Menu />}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg w-[250px] p-4 z-50"
                >
                  <div className="flex flex-col gap-4 text-black">
                    <a href="#" className="hover:bg-slate-100 p-2 rounded">
                      Үйлчилгээ
                    </a>
                    <a href="#" className="hover:bg-slate-100 p-2 rounded">
                      Бидний тухай
                    </a>
                    <a href="#" className="hover:bg-slate-100 p-2 rounded">
                      Мэдээ
                    </a>
                    <a href="#" className="hover:bg-slate-100 p-2 rounded">
                      Холбоо барих
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="flex justify-around items-center h-[70px]">
          <Image src="/logo.webp" width={50} height={50} alt="logo" />
          <nav>
            <ul className="flex gap-4 lg:gap-8 xl:gap-12">
              {ListItems.map((items) => (
                <div key={items.id}>
                  <List
                    items={items}
                    isMenuOpen={isMenuOpen}
                    setMenuIsOpen={setIsMenuOpen}
                  ></List>
                </div>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 lg:gap-8 ">
            <Facebook className="w-[18px]" />
            <Instagram className="w-[18px]" />
            <Mail className="w-[18px]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
