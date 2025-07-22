"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "../../footer/page";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { desc } from "framer-motion/client";
const employeeIntroduction = [
  {
    id: 1,
    title:
      "Танилцуулга: Б.Ужинлхам",
    content_1: [
      {
        id: 1,
        first_sec_title: "Мэргэжил эзэмшсэн байдал",
        first_sec: [
          {
            id: 1,
            first:
              "Мартин-Лутер-Их сургууль Халле / Виттенберг Суралцсан чиглэл: Хууль, эрх зүй",
            description: [
              {
                id: 1,
                desc: "боловсролын зэрэг: Герман Улсаас баталгаажсан диплом хуульч (улсын шалгалт) "
              },
              {
                id: 2,
                desc: "Мэргэшсэн салбар: Хөдөлмөрийн эрх зүй, Нийгмийн эрх зүй мөн Хэрэглэгчийг хамгаалах эрх зүй  "
              },
              {
                id: 3,
                desc: "Төгсөх шалгалтын ажил: Концерт болон Спортын арга хэмжээнд оролцож байгаа зочдын эрх мөн зохион байгуулагчийн гэрээний дагуу болон гэм хорын эрх зүйн дагуу хүлээх үүрэг ба гэрээнд заасан стандарт нөхцөл"
              }
            ]
          },
          {
            id: 2,
            second:
              "Мартин-Лутер-Их сургуулийн Халле / Виттенберг коллеж",
            description: [
              {
                id: 1,
                desc: "Их сургуульд суралцах чадвартай болохыг тодорхойлсон гэрчилгээ   "
              },
            ]
          },
          {
            id: 3,
            third: "Буриадын их сургууль / Улаанбаатар хот ",
            description: [
              {
                id: 1,
                desc: "Суралцсан чиглэл: Хууль, эрх зүй "
              },
            ]
          }
        ],
      },
    ],
    content_2: [
      {
        id: 1,
        first_sec_title: "Ажил хөдөлмөрийн туршлага",
        first_sec: [{
          id: 1,
          first:
            "Хууль зүйн үндэсний хүрээлэн",
          description: [
            {
              id: 1,
              desc: "Эрдэм шинжилгээний ажилтан, бодлогын судлаач "
            },
          ]
        },
        {
          id: 2,
          second:
            "АПУ ХК",
          description: [
            {
              id: 1,
              desc: "Дотоод Аудитор"
            },
          ]
        }, {
          id: 3,
          third:
            "Kосмополитан ХМХ ",
          description: [
            {
              id: 1,
              desc: "Захиргааны менежер"
            },
          ]
        }
          , {
          id: 4,
          fourth:
            "Герман- Монголын Бизнес Эхалэгчдийн Холбоо",
          description: [
            {
              id: 1,
              desc: "Уул, уурхайн төсөл хариуцсан менежер  "
            },
          ]
        }
          , {
          id: 5,
          fifth:
            "Ханнс Зайделийн Сан",
          description: [
            {
              id: 1,
              desc: "Хуулийн төсөл хариуцсан менежер"
            },
          ]
        }]
      }
    ]
  },
];

function page() {
  const { employeeID } = useParams();
  const params = useParams();
  const searchParams = useSearchParams();
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  const employee = {
    id: params.id,
    firstname: searchParams.get('firstname'),
    lastname: searchParams.get('lastname'),
    img_url: searchParams.get('img_url')
  };
  console.log(employee);
  useEffect(() => {

    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  const id = Number(employeeID);
  const selectedEmployeeID = employeeIntroduction.find(
    (item) => item.id === id
  );
  return (
    <>{isMobile && (
      <div>
        <div className="h-screen flex  items-center justify-center ">
          <div className="bg-slate-100 w-[1200px] h-auto flex flex-col items-start justify-center p-10 mt-[60px] gap-4">
            <div className="flex flex-col gap-2">
              <Image src={employee.img_url ?? "/default-image.png"} alt="image" width={100} height={100} className="w-[500px] h-[140px]"></Image>
              <div className="w-full h-auto bg-slate-400  flex flex-col items-start justify-between p-[20px] text-white">
                <div className="flex flex-col gap-6">
                  <div>    <h1 className="text-[24px]">{employee.lastname?.slice(0, 1)}.{employee.firstname}</h1>
                    <hr className="w-[300px]  mt-[4px]" /></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-bold text-black">Албан тушаал:</p>
                    <p className="text-[16px]">Хуульч</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-bold text-black">Холбогдох:</p>
                    <p className="text-[16px]">Утас: 99053310</p>
                    <p className="text-[16px]">И-мэйл: bujinlkham-s@hss.de</p>
                  </div>
                </div>

              </div>
              <div className="w-full h-auto bg-slate-400  flex flex-col items-start  p-[20px] text-white">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] font-bold text-black">Мэргэшсэн салбар:</p>
                    <div className="flex flex-col gap-2 pl-2"> <p className="text-[16px]">Иргэний хэрэг</p>
                      <p className="text-[16px]">Захиргааны хэрэг</p>
                      <p className="text-[16px]">Оюуны өмч</p>
                      <p className="text-[16px]">Хөдлөх болон үл хөдлөх эд хөрөнгө</p>
                      <p className="text-[16px]">Уул уурхай байгалын нөөц эрчим хүч</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-200 w-full h-auto border-l border-l-slate-400 pl-2">s</div>
          </div>

        </div>
        <Footer />
      </div>
    )}
      {!isMobile && (
        <div>
          <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-100 w-[1200px] h-[500px] flex items-center justify-center p-10 mt-[60px] relative">
              <Image src={employee.img_url ?? "/default-image.png"} alt="image" width={100} height={100} className="w-[500px] h-[400px]"></Image>
              <div className="h-full w-[300px] bg-slate-200 absolute left-0 flex flex-col items-center justify-between">
                <div className="flex flex-col"><h1>{employee.lastname?.slice(0, 1)}.{employee.firstname}</h1>
                  <hr />
                  <p>Албан тушаал:</p>

                </div>
                <div>a</div>
              </div>
              <div className="h-full w-[300px] bg-slate-200 absolute right-0">a</div>
            </div>
            {/* <div>
          <h1> {selectedEmployeeID?.title}</h1>
          <div>
            {selectedEmployeeID?.content.map((el) =>
              el.first_sec.map((item) => (
                <div key={el.id}>
                  <p className="text-red-400">{item.first}</p>
                </div>
              ))
            )}
          </div>
        </div> */}
          </div>
          <Footer />
        </div>
      )}</>

  );
}

export default page;
