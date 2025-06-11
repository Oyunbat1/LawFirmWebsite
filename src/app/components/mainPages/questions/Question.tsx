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
  {
    id: 3,
    title: "Хэрэгтэй холбоотой бүх баримт бичигтэй байх шаардлагатай юу?",
    answers: [
      {
        id: 4,
        text: "Бүх холбогдох баримт бичгийг бэлдэх нь хамгийн тохиромжтой боловч хэрэв танд зарим баримт бичиг дутуу байгаа бол бид түүнийг цуглуулах эсвэл өөр арга замаар нотлох баримт бүрдүүлэхэд тань туслах болно.",
      },
    ],
  },
  {
    id: 4,
    title: "Өмгөөлөгчийн үйлчилгээний төлбөр хэд вэ?",
    answers: [
      {
        id: 5,
        text: "Үйлчилгээний төлбөр нь хэргийн төрөл, нарийн төвөгтэй байдал, шаардагдах цаг хугацаанаас хамаарна. Бид эхний үнэгүй зөвлөгөөний үеэр төлбөрийн талаар тодорхой тайлбарлах болно.",
      },
    ],
  },
];

function Question() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Spring animation config
  const animationConfig = {
    type: "spring",
    damping: 25,
    stiffness: 200,
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Түгээмэл асуултууд
        </h1>

        <div className="space-y-4">
          {QuestionData.map((question) => (
            <motion.div
              key={question.id}
              layout="position"
              transition={animationConfig}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <motion.div
                layout="position"
                onClick={() => toggleQuestion(question.id)}
                className={`flex items-center justify-between p-6 cursor-pointer transition-colors ${
                  expandedId === question.id ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <motion.h2
                  layout="position"
                  className="text-[16px] sm:text-[16px] lg:text-[18px] font-semibold text-gray-800"
                >
                  {question.title}
                </motion.h2>
                <motion.div
                  layout="position"
                  animate={{ rotate: expandedId === question.id ? 180 : 0 }}
                  transition={animationConfig}
                  className="text-gray-600"
                >
                  {expandedId === question.id ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedId === question.id && (
                  <motion.div
                    layout="position"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3 },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3 },
                      },
                    }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 space-y-4">
                      {question.answers.map((answer) => (
                        <motion.div
                          key={answer.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="pt-4 border-t border-gray-100"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {answer.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Question;
