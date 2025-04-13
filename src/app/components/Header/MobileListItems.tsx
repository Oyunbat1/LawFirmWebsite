import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ListProps } from "@/app/constants/type";
function MobileListItem({ items }: ListProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-4 relative"
    >
      <motion.div className="p-2">
        <div className=" gap-1  flex items-center  cursor-pointer">
          {items.name}{" "}
          {items.name !== "Бидний тухай" && (
            <ChevronDown className="w-[14px]" />
          )}
        </div>
        <AnimatePresence>
          {hovered && items.name !== "Бидний тухай" && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {items.items.map((el) => (
                <div key={el.id} className="flex flex-col border-b">
                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    href="#"
                    className=" pl-2 my-2"
                  >
                    {el.name}
                  </motion.a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
export default MobileListItem;
