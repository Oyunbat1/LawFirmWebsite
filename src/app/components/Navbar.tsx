"use client";
import React from "react";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <div className="bg-slate-400 sm:bg-amber-400 md:bg-red-400 lg:bg-blue-400 xl:bg-green-400 fixed top-0 left-0 right-0 h-[80px] flex justify-around items-center">
        <Image src="/logo.webp" width={50} height={50} alt="logo" />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild onClick={handleDialogToggle}>
            {isDialogOpen ? <X /> : <Menu />}
          </DialogTrigger>
          <DialogContent className="absolute top-[200px]">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription className="flex justify-center items-center h-full">
                <div className="flex flex-col gap-10 text-black">
                  <div>
                    <a href="#">Үйлчилгээ</a>
                  </div>
                  <div>
                    <a href="#">Бидний тухай</a>
                  </div>
                  <div>
                    <a href="#">Мэдээ</a>
                  </div>
                  <div>
                    <a href="#">Холбоо барих</a>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Navbar;
