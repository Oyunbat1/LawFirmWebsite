import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
interface EmployeeProps {
  id?: string;
}
function Employee({ id }: EmployeeProps) {
  return (
    <div id={id}>
      <div
        className="bg-gray-200 h-auto w-screen px-[40px] flex flex-col items-center justify-center gap-8 pb-[120px]
    pt-[20px]"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-[700] text-[18px] md:text-[34px] xl:text-[52px]">
            Багийн гишүүд
          </h1>
          <p className="text-center text-[16px] font-[400] sm:w-[448px] md:text-[20px] lg:w-[558px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            amet at molestie mattis.
          </p>
        </div>
        <div className="w-[300px] h-[300px] bg-white rounded-md">Зураг</div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className=" md:text-[20px] xl:text-[28px] font-[600]">Нэр</h1>
          <p>Мэргэжил</p>
          <div className="flex gap-6">
            <Linkedin></Linkedin>
            <Twitter></Twitter>
            <Instagram></Instagram>
            <Facebook></Facebook>
          </div>
          <Button className="bg-white border-1 border-blue-600 text-blue-600 hover:bg-blue-200">
            Холбоо барих
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
