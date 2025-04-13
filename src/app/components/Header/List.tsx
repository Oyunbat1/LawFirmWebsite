import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ListProps } from "@/app/constants/type";
import Link from "next/link";
function List({ items }: ListProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <li
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" border-b-2 border-transparent hover:border-black "
      >
        {!hovered ? <p>{items.name}</p> : <p>{items.name}</p>}
        <AnimatePresence>
          {hovered && items.name !== "Бидний тухай" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[70px]  bg-white border shadow-lg rounded-lg w-[250px] p-4 z-50 flex flex-col"
            >
              {items.items.map((el) => (
                <div
                  key={el.id}
                  className="flex flex-col gap-1 border-b rounded-md"
                >
                  {" "}
                  <Link
                    className="hover:bg-slate-200 rounded-md pl-2"
                    href={`/components/navigation/${el.name.toLowerCase()}`}
                  >
                    {el.name}
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </div>
  );
}

export default List;
