"use client";
import { useState } from "react";
import HomePage from "@/app/homepage/HomePage";
import Section2 from "@/app/components/mainPages/section2/Info";
import Section4 from "@/app/components/mainPages/mission/Section4";
import Employee from "@/app/components/mainPages/employees/page";
import Footer from "@/app/components/mainPages/footer/page";
import Question from "@/app/components/mainPages/questions/Question";
import { motion, AnimatePresence } from "framer-motion";

const ServiceComponents = () => {
  const [showMask, setShowMask] = useState(true);

  return (
    <>
      <HomePage setMaskEnabled={setShowMask} />
      <Section2 />
      <Section4 />
      <Employee id="employees" />
      <Question />
      <Footer />
    </>
  );
};

export default ServiceComponents;
