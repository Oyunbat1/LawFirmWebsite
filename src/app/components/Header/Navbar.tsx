"use client";
import React, { useState, useEffect } from "react";
import { X, Menu, Facebook, Instagram, Mail } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import List from "./List";
import { ListItems } from "@/app/constants/listItem";
import MobileListItem from "./MobileListItems";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {isMobile && (
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            backgroundColor: "rgba(255,255,255,0)",
          }}
          animate={{ opacity: 1, y: 0, backgroundColor: "rgba(255,255,255,1)" }}
          transition={{ duration: 0.4 }}
          className="fixed  top-0 left-0 right-0 h-[80px] flex justify-between pl-8 pr-8 items-center"
        >
          <Image
            src="/logo.webp"
            width={56}
            height={56}
            alt="logo"
            className="cursor-pointer"
          />

          <div
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            onClick={toggleMenu}
            className="relative"
          >
            {isMenuOpen ? (
              <X className="w-[60px] h-[40px]" />
            ) : (
              <Menu className="w-[60px] h-[40px]" />
            )}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-15 right-4 bg-white border shadow-lg rounded-lg w-[250px] h-auto p-4 z-50"
                >
                  <div className="flex flex-col gap-4 text-black">
                    {ListItems.map((items) => (
                      <MobileListItem
                        key={items.id}
                        items={items}
                        isMenuOpen={isMenuOpen}
                        setMenuIsOpen={setIsMenuOpen}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {!isMobile && (
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            backgroundColor: "rgba(255,255,255,0)",
          }}
          animate={{ opacity: 1, y: 0, backgroundColor: "rgba(255,255,255,1)" }}
          transition={{ duration: 0.4 }}
          className="  fixed  left-0 right-0 flex justify-around items-center h-[70px]"
        >
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
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
