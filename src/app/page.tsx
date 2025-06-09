"use client";
import { useState } from "react";
import HomePage from "./homepage/HomePage";
import Section2 from "./components/mainPages/section2/Info";
import Service from "./service/page";
import Section4 from "./components/mainPages/mission/Section4";
import Employee from "./components/mainPages/employees/page";
import Footer from "./components/mainPages/footer/page";
import Question from "./components/mainPages/questions/Question";
import CursorMaskWrapper from "./components/CursorWrapper";

export default function Home() {
  const [showMask, setShowMask] = useState(true);

  return (
    <>
      <CursorMaskWrapper showMask={showMask}>
        <HomePage setMaskEnabled={setShowMask} />
        <Section2 id="section2" />
        <Service id="services" />
        <Section4 id="section4" />
        <Employee id="employees" />
        <Question />
        <Footer id="footer" />
      </CursorMaskWrapper>
    </>
  );
}
