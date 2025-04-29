import HomePage from "@/app/components/mainPages/homePage/HomePage";
import Section2 from "./components/mainPages/section2/Info";
import Service from "./service/page";
import Section4 from "./components/mainPages/section4/Section4";
import Mission from "./components/mainPages/mission/Mission";
import Employee from "./components/mainPages/employees/Employee";
import Footer from "./components/mainPages/footer/Footer";
import Question from "./components/mainPages/questions/Question";
export default function Home() {
  return (
    <>
      <HomePage />
      <Section2 />
      <Service id="service" />
      <Section4 />
      <Mission />
      <Employee id="employees" />
      <Question />
      <Footer />
    </>
  );
}
