"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const QuestionData = [
  {
    id: 1,
    title:
      "Надад үнэхээр өмгөөлөгч хэрэгтэй юу, эсвэл би өөрийнхөө хэргийг шийдэж чадах уу?",
    answers: [
      {
        id: 1,
        text: "Өмгөөлөгч танд өндөр үнэтэй алдаанаас зайлсхийх, төөрөгдүүлсэн хууль эрх зүйн үйл явцыг удирдах, хэргийн бүх хугацаанд таны эрхийг бүрэн хамгаалахад тусална.",
      },
    ],
  },
  {
    id: 2,
    title: "Ямар нэгэн хэрэг хэр удаан шийдэгддэг вэ?",
    answers: [
      {
        id: 2,
        text: "Хугацаа нь таны хэргийн төрөл, нарийн төвөгтэй байдлаас хамаарна. Гэрээслэл, маргаангүй гэр бүл цуцлуулах гэх мэт энгийн асуудалд хэдэн долоо хоног шаардагдах бол шүүх хурал эсвэл хувийн гэмтлийн нэхэмжлэл нь хэдэн сар ба түүнээс дээш хугацаа шаардагдана.",
      },
      {
        id: 3,
        text: "Шүүхийн хуваарь, нотлох баримтыг хэр хурдан цуглуулах, хоёр талын тохиролцох хүсэл зэрэг хүчин зүйлүүд нь таны хэрэг хэр удаан үргэлжлэхэд нөлөөлдөг. Таны өмгөөлөгч нарийвчилсан мэдээллийг нягталж үзсэний дараа танд илүү үнэн зөв тооцоолол өгөх боломжтой.",
      },
    ],
  },
];

function Question() {
  const [visibleSections, setVisibleSections] = useState<
    Record<number, boolean>
  >({});
  const [toggleIcon, setToggleIcon] = useState<Record<number, boolean>>({});
  const toggleQuestion = (id: number) => {
    setVisibleSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setToggleIcon((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-auto w-screen bg-gray-200 flex flex-col items-center justify-center py-[40px] space-y-2 mt-[20px]">
      <h1 className="font-[700] text-[18px] md:text-[34px] xl:text-[52px] mb-10 ">
        Түгээмэл асуултууд
      </h1>
      {QuestionData.map((question) => (
        <motion.div
          key={question.id}
          className="w-[380px] md:w-[440px] lg:w-[660px] xl:w-[800px]"
        >
          <div
            onClick={() => toggleQuestion(question.id)}
            className="flex items-center justify-between bg-white py-[6px] md:h-[56px] px-[16px] rounded-md cursor-pointer"
          >
            <h1>{question.title}</h1>
            {toggleIcon[question.id] ? <Minus></Minus> : <Plus></Plus>}
          </div>
          <AnimatePresence initial={false}>
            {visibleSections[question.id] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-white mt-2 p-2 rounded-md space-y-1"
              >
                {question.answers.map((answer) => (
                  <div className="pl-2.5 py-3 pr-2.5" key={answer.id}>
                    {answer.text}
                    <hr className="text-gray-300" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default Question;
