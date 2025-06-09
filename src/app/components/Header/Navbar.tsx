"use client";
import React, { useState, useEffect } from "react";
import { X, Menu, Facebook, Instagram, Mail } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ListItems } from "@/app/constants/listItem";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const router = useRouter();
  const handleToMainPage = () => {
    router.push("/");
  };
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <motion.div
          initial={{
            y: -30,
          }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed  z-50 top-0 left-0 right-0 h-[80px] flex justify-between pl-8 pr-8 items-center transition-colors duration-500 backdrop-blur-md  ${
            scrolled ? "bg-gray-300/30" : "bg-slate-200/40"
          }`}
        >
          <Image
            src="/logo.webp"
            width={86}
            height={86}
            alt="logo"
            className="cursor-pointer"
          />
          <Sheet>
            <SheetTrigger>
              <Menu className="cursor-pointer text-black" />
            </SheetTrigger>
            <SheetContent className="flex justify-start items-center pt-[120px] bg-gray-100/30">
              {ListItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() =>
                    item.id !== undefined && setHoveredItemId(item.id)
                  }
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="relative"
                >
                  <Link
                    href={`/${item.navigation}`}
                    className={`inline-block transition-colors duration-300 
                     relative group`}
                  >
                    <div>
                      <p className="py-2 cursor-pointer text-black">
                        {item.name}
                      </p>
                    </div>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </motion.div>
      )}

      {!isMobile && (
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed left-0 right-0 flex z-50 justify-around items-center h-[70px] transition-colors duration-500 backdrop-blur-md ${
            scrolled ? "bg-gray-300/30" : "bg-slate-200/40"
          }`}
        >
          <Image
            src="/logo.webp"
            width={106}
            height={106}
            alt="logo"
            onClick={handleToMainPage}
            className="text-white"
          />
          <nav>
            <ul className="flex gap-4 lg:gap-8 xl:gap-12">
              {ListItems.map((items) => (
                <div key={items.id}>
                  <li>
                    <Link
                      href={`${items.navigation}`}
                      scroll={true}
                      className={`inline-block transition-colors duration-300 ${
                        scrolled ? "text-black" : "text-black"
                      } relative group`}
                    >
                      {" "}
                      {items.name}
                      <span
                        className={`absolute left-0 -bottom-0.5 w-0 h-0.5 ${
                          scrolled ? "bg-black" : "bg-black"
                        } transition-all duration-300 group-hover:w-full`}
                      ></span>
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </nav>
          <div
            className={`flex gap-2 lg:gap-8 transition-colors duration-300 ${
              scrolled ? "text-black" : "text-black"
            }`}
          >
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
              {" "}
              <a href="https://www.facebook.com/facebook/">
                {" "}
                <Facebook className="w-[18px]" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
              {" "}
              <a href="https://www.instagram.com/">
                {" "}
                <Instagram className="w-[18px]" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
              {" "}
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                {" "}
                <Mail className="w-[18px]" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
