"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Share2, Facebook, Instagram, Twitter } from "lucide-react";

function Sticky() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed z-50 bottom-20 right-10 md:right-14 xl:right-24">
      <div>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="ml-2.5"
            >
              <div className="flex flex-col gap-1 mb-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-slate-500/80 mb-2"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </motion.div>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-slate-500/80 mb-2"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </motion.div>
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-slate-500/80 mb-2"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center items-center rounded-full w-[60px] h-[60px] bg-slate-500/80 "
        >
          {isVisible ? (
            <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] bg-slate-500/80 ">
              <Share2 className="w-6 h-6 text-white" />
            </div>
          ) : (
            <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] bg-slate-500/80 ">
              <Share2 className="w-6 h-6 text-white" />
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
}

export default Sticky;
