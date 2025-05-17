"use client";
import { useState } from "react";
import HomePage from "./homepage/HomePage";
import Section2 from "./components/mainPages/section2/Info";
import Service from "./service/Service";
import Section4 from "./components/mainPages/section4/Section4";
import Mission from "./components/mainPages/mission/Mission";
import Employee from "./components/mainPages/employees/Employee";
import Footer from "./components/mainPages/footer/Footer";
import Question from "./components/mainPages/questions/Question";
import CursorMaskWrapper from "./components/CursorWrapper";

export default function Home() {
  const [showMask, setShowMask] = useState(true);

  return (
    <CursorMaskWrapper showMask={showMask}>
      <HomePage setMaskEnabled={setShowMask} />
      <Section2 />
      <Service id="service" />
      <Section4 />
      <Mission />
      <Employee id="employees" />
      <Question />
      <Footer />
    </CursorMaskWrapper>
  );
}
