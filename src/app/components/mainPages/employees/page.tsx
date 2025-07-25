"use client";
import React, { useState, useEffect, createContext } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Facebook, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "react-responsive";

const employeeData = [
  {
    id: 1,
    firstname: "Бүжинлхам",
    lastname: "Сүхболд",
    img_url: "/employees/bujin.webp",
  }
];

const ITEMS_PER_PAGE = 4;

function Employee({ params }: any) {
  const id = params?.id;
  const [currentPage, setCurrentPage] = useState(1);
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = Math.ceil(employeeData.length / ITEMS_PER_PAGE);
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = employeeData.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  console.log("Current Employees:", currentEmployees);
  useEffect(() => {

    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <>

      {isMobile && (
        <div id={id}>
          <motion.div
            className="bg-gray-100 h-auto w-screen px-[40px] flex flex-col items-center justify-center gap-8 pb-[120px] pt-[100px]"
          >
            <motion.div className="flex flex-col items-center justify-center gap-2">
              <h1 className="font-[700] text-[18px] md:text-[34px] xl:text-[42px]">
                Багийн гишүүд
              </h1>
            </motion.div>

            <div className={`${currentEmployees.length >= 2 ? "grid grid-cols-2" : ""} gap-2`}>
              {currentEmployees.map((el) => (
                <div key={el.id} className="flex flex-col gap-4 group w-[140px]">

                  <motion.div
                    className="flex flex-col items-center relative overflow-hidden"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <Link href={{
                      pathname: `/components/mainPages/employees/${el.id}`,
                      query: {
                        firstname: el.firstname,
                        lastname: el.lastname,
                        img_url: el.img_url
                      }
                    }}>
                      <motion.div
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.03 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Image
                          src={el.img_url}
                          width={200}
                          height={200}
                          alt={el.firstname}
                          className="cursor-pointer rounded-md w-[200px] md:w-[200px] lg:w-[220px] object-cover aspect-square"
                        />
                      </motion.div>
                    </Link>

                    <motion.h1
                      className="md:text-[18px] xl:text-[22px] font-[600] mt-4"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {el.lastname.slice(0, 1)}.{el.firstname}
                    </motion.h1>

                    <motion.div
                      className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2"
                      variants={{
                        rest: { opacity: 0, y: 20 },
                        hover: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-4">
                        <motion.a
                          href="#"
                          whileHover={{ y: -2 }}
                          className="text-white hover:text-[#BEA673] transition-colors"
                        >
                          <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ y: -2 }}
                          className="text-white hover:text-[#BEA673] transition-colors"
                        >
                          <Twitter size={20} />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ y: -2 }}
                          className="text-white hover:text-[#BEA673] transition-colors"
                        >
                          <Instagram size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={{
                      rest: { opacity: 0, height: 0 },
                      hover: { opacity: 1, height: "auto" }
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <Button
                      asChild
                      className="w-full border-1 bg-[#BEA673] hover:bg-[#ad935c] text-white cursor-pointer"
                    >
                      <a
                        href="mailto:oyunbat9958@gmail.com?subject=Холбоо барих"
                        rel="noopener noreferrer"
                      >
                        Холбоо барих
                      </a>
                    </Button>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "outline"}
                  onClick={() => paginate(number)}
                  className="w-10 h-10 p-0"
                >
                  {number}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div >
        </div >
      )
      }
      {
        !isMobile && (
          <div id={id}>
            <motion.div
              className="bg-gray-100 h-auto w-screen px-[40px] flex flex-col items-center justify-center gap-8 pb-[120px] pt-[100px]"
            >
              <motion.div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-[700] text-[18px] md:text-[34px] xl:text-[42px]">
                  Багийн гишүүд
                </h1>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-6">
                {currentEmployees.map((el) => (
                  <div key={el.id} className="flex flex-col gap-4 group w-[220px]">
                    {/* Your existing employee card code */}
                    <motion.div
                      className="flex flex-col items-center relative overflow-hidden"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                    >
                      <Link href={{
                        pathname: `/components/mainPages/employees/${el.id}`,
                        query: {
                          firstname: el.firstname,
                          lastname: el.lastname,
                          img_url: el.img_url
                        }
                      }}>
                        <motion.div
                          variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.03 }
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Image
                            src={el.img_url}
                            width={200}
                            height={200}
                            alt={el.firstname}
                            className="cursor-pointer rounded-md w-[200px] md:w-[200px] lg:w-[220px] object-cover aspect-square"
                          />
                        </motion.div>
                      </Link>

                      <motion.h1
                        className="md:text-[18px] xl:text-[22px] font-[600] mt-4"
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -10 }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {el.lastname.slice(0, 1)}.{el.firstname}
                      </motion.h1>

                      <motion.div
                        className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2"
                        variants={{
                          rest: { opacity: 0, y: 20 },
                          hover: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex gap-4">
                          <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="text-white hover:text-[#BEA673] transition-colors"
                          >
                            <Linkedin size={20} />
                          </motion.a>
                          <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="text-white hover:text-[#BEA673] transition-colors"
                          >
                            <Twitter size={20} />
                          </motion.a>
                          <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="text-white hover:text-[#BEA673] transition-colors"
                          >
                            <Instagram size={20} />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={{
                        rest: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: "auto" }
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <Button
                        asChild
                        className="w-full border-1 bg-[#BEA673] hover:bg-[#ad935c] text-white cursor-pointer"
                      >
                        <a
                          href="mailto:oyunbat9958@gmail.com?subject=Холбоо барих"
                          rel="noopener noreferrer"
                        >
                          Холбоо барих
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    onClick={() => paginate(number)}
                    className="w-10 h-10 p-0"
                  >
                    {number}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        )
      }

    </>

  );
}

export default Employee;