"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sectionThreeData } from "@/app/constants/serviceItems";
import { filteredItems } from "@/app/constants/filterItems";
import Employee from "@/app/components/mainPages/employees/Employee";
import { useParams } from "next/navigation";
import Footer from "@/app/components/mainPages/footer/Footer";
import CursorMaskWrapper from "@/app/components/CursorWrapper";
export default function Page() {
  const { serviceID } = useParams();
  const id = Number(serviceID);
  const selectedItem = filteredItems.find((item) => item.id === id);
  const [selectedId, setSelectedId] = useState<number | null>(id);
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <div className=" w-screen pt-[100px] flex flex-col gap-2 lg:flex-row lg:gap-0 lg:justify-center ">
        <div className="mx-auto bg-gray-200 top-[100px] w-[360px] md:w-[610px] lg:w-[320px] lg:h-fit  pb-2 h-fit p-4  rounded-md text-center">
          <h1 className="text-[22px] border-b-2 py-2 mx-3">Эрх зүйн төрлүүд</h1>
          <div className="grid grid-cols-3 lg:grid-cols-1">
            {" "}
            {filteredItems.map((items) => (
              <div
                key={items.id}
                className={`border h-auto w-auto px-2 py-0.5 lg:py-2.5 border-black rounded-md text-[12px] m-2 hover:bg-black  transition-all duration-1000 flex items-center justify-center text-center ${
                  selectedId === items.id
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <Link
                  className={`block w-full h-fit justify-center items-center text-[12px]${
                    selectedId === items.id ? " text-white" : "text-black"
                  } hover:text-white`}
                  href={`/service/${items.id}`}
                >
                  {items.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {selectedItem?.title && (
          <div
            key={selectedItem.id}
            className="mx-auto bg-gray-200 w-[360px] md:w-[610px] lg:w-[700px] xl:w-[880px] h-auto pb-8 rounded-md   flex flex-col items-center gap-2 pt-[20px]"
          >
            <div className="flex flex-col justify-center items-center gap-2 mb-6">
              {" "}
              <h1 className="text-3xl font-bold w-[300px] md:w-[540px] lg:w-[600px] xl:w-[700px]">
                {selectedItem.title}
              </h1>
              <p className="w-[320px] md:w-[540px] lg:w-[600px] xl:w-[700px]">
                {selectedItem.paragraph}
              </p>{" "}
            </div>
            {selectedItem.content?.map((item) => (
              <div
                key={item.id}
                className="w-[300px] md:w-[540px] lg:w-[600px] xl:w-[700px] mb-2"
              >
                <h1 className="text-xl font-bold">{item.title}</h1>
                <ul className="list-disc list-inside text-black mt-4">
                  {item.first_rules?.map((list) => (
                    <li key={list.id}>{list.rule1}</li>
                  ))}
                </ul>
              </div>
            ))}
            {selectedItem.content?.map((item) =>
              "second_rules" in item && Array.isArray(item.second_rules) ? (
                <div
                  key={item.id}
                  className="w-[320px] md:w-[540px] lg:w-[600px] xl:w-[700px]"
                >
                  <ul className=" list-disc list-inside text-black">
                    {item.second_rules.map((list, index) => (
                      <li key={index}>{list.rule1}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
