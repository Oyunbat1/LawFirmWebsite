"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const QuestionData = [
  {
    id: 1,
    title: "Who should use the app?",
    answers: [{ id: 1, text: "It was good enough" }],
  },
  {
    id: 2,
    title: "How do I get paid?",
    answers: [
      { id: 2, text: "It was good enough" },
      { id: 3, text: "Yeah, impressive" },
    ],
  },
];

function Question() {
  const [visibleSections, setVisibleSections] = useState<
    Record<number, boolean>
  >({});

  const toggleQuestion = (id: number) => {
    setVisibleSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-auto w-screen bg-gray-200 flex flex-col items-center justify-center py-[40px] space-y-2 mt-[20px]">
      {QuestionData.map((question) => (
        <div
          key={question.id}
          className="w-[380px] md:w-[440px] lg:w-[660px] xl:w-[800px]"
        >
          <div
            onClick={() => toggleQuestion(question.id)}
            className="flex items-center justify-between bg-white py-[6px] md:h-[56px] px-[16px] rounded-md cursor-pointer"
          >
            <h1>{question.title}</h1>
            <Plus />
          </div>
          {visibleSections[question.id] && (
            <div className="bg-white mt-2 p-2 rounded-md space-y-1">
              {question.answers.map((answer) => (
                <div key={answer.id}>{answer.text}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
