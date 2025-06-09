"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { filteredItems } from "@/app/constants/filterItems";
import { useParams } from "next/navigation";
import Footer from "@/app/components/mainPages/footer/page";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const { serviceID } = useParams();
  const id = Number(serviceID);
  const selectedItem = filteredItems.find((item) => item.id === id);
  const [selectedId, setSelectedId] = useState<number | null>(id);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedId]);

  return (
    <div className="min-h-screen w-screen flex flex-col pb-[140px]">
      <div className="w-screen pt-[100px] flex flex-col gap-6 lg:flex-row lg:gap-8 lg:justify-center px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-lg rounded-xl lg:sticky lg:top-[120px] h-fit p-6 lg:w-[320px]"
        >
          <h1 className="text-2xl font-bold pb-4 border-b border-gray-200 text-gray-800">
            Эрх зүйн төрлүүд
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 mt-4">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(item.id)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Link
                  href={`/service/${item.id}`}
                  className={`block w-full h-full transition-all duration-300 rounded-lg p-3 text-center text-sm font-medium
                    ${
                      selectedId === item.id
                        ? "bg-black text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"
                    }
                    ${
                      isHovered === item.id && selectedId !== item.id
                        ? "ring-2 ring-gray-400"
                        : ""
                    }
                  `}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedItem?.title && (
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-6 lg:p-8 pb-[40px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <motion.h1
                    className="text-3xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {selectedItem.title}
                  </motion.h1>
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedItem.paragraph}
                  </motion.p>
                </div>

                {selectedItem.content?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <h2 className="text-xl font-semibold text-black">
                      {item.title}
                    </h2>
                    <ul className="space-y-2">
                      {item.first_rules?.map((list) => (
                        <motion.li
                          key={list.id}
                          className="flex items-start gap-2 text-gray-700"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-black mt-1">•</span>
                          <span>{list.rule1}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {"second_rules" in item &&
                      Array.isArray(item.second_rules) && (
                        <ul className="space-y-2 mt-2">
                          {item.second_rules.map((list, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-gray-700"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-black mt-1">•</span>
                              <span>{list.rule1}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
