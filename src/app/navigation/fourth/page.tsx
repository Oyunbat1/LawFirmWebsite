import React from "react";
import Service from "@/app/components/mainPages/service/Service";
function page() {
  return (
    <div>
      {" "}
      <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
        {" "}
        <p>Fourth page of service</p>
      </div>
      <Service />;
    </div>
  );
}

export default page;
