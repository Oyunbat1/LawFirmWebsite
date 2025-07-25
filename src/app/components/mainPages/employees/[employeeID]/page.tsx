"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "../../footer/page";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { PhoneIcon, CheckCircleIcon, MailOpen } from "lucide-react";
import { sep } from "path";

const employeeIntroduction = [
  {
    id: 1,
    content_1: [
      {
        id: 1,
        first_sec_title: "Мэргэжил эзэмшсэн байдал",
        first_sec: [
          {
            id: 1,
            title_1:
              "Мартин-Лутер-Их сургууль Халле / Виттенберг Суралцсан чиглэл: Хууль, эрх зүй",
            description1: [
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
            title_2:
              "Мартин-Лутер-Их сургуулийн Халле / Виттенберг коллеж",
            description_2: [
              {
                id: 1,
                desc: "Их сургуульд суралцах чадвартай болохыг тодорхойлсон гэрчилгээ   "
              },
            ]
          },
          {
            id: 3,
            title_3: "Буриадын их сургууль / Улаанбаатар хот ",
            description_3: [
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
          description_1: [
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
          description_2: [
            {
              id: 1,
              desc: "Дотоод Аудитор"
            },
          ]
        }, {
          id: 3,
          third:
            "Kосмополитан ХМХ ",
          description_3: [
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
          description_4: [
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
          description_5: [
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

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const id = Number(employeeID);
  const selectedEmployeeID = employeeIntroduction.find((item) => item.id === id);

  // Common profile section component
  const ProfileSection = () => (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={employee.img_url ?? "/default-image.png"}
          alt={`${employee.firstname} ${employee.lastname}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {employee.lastname?.slice(0, 1)}.{employee.firstname}
            </h1>
            <p className="text-gray-500 mt-1">Хуульч</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Албан тушаал
            </h2>
            <p className="text-gray-600">Хуульч</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Холбогдох
            </h2>
            <div className="space-y-1 text-gray-600">
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-gray-400" />
                Утас: 99053310
              </p>
              <p className="flex items-center gap-2">
                <MailOpen className="h-4 w-4 text-gray-400" />
                И-мэйл: bujinlkham-s@hss.de
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Мэргэшсэн салбар
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              Иргэний хэрэг
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              Захиргааны хэрэг
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              Оюуны өмч
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              Хөдлөх болон үл хөдлөх эд хөрөнгө
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              Уул уурхай байгалын нөөц эрчим хүч
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Common introduction section component
  const IntroductionSection = () => (
    <div className="w-full h-auto border-l-2 border-l-slate-400 pl-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Танилцуулга</h1>
      <div className="space-y-6">
        {selectedEmployeeID?.content_1.map((section) => (
          <div key={section.id} className="space-y-4">
            <h2 className="text-lg font-medium text-gray-800">{section.first_sec_title}</h2>
            <div className="space-y-4 pl-2">
              {section.first_sec.map((item) => (
                <div key={item.id} className="space-y-2">
                  {item.title_1 && (
                    <h3 className="text-base font-medium text-gray-700">{item.title_1}</h3>
                  )}
                  {item.description1 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description1.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.title_2 && (
                    <h3 className="text-base font-medium text-gray-700">{item.title_2}</h3>
                  )}
                  {item.description_2 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_2.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.title_3 && (
                    <h3 className="text-base font-medium text-gray-700">{item.title_3}</h3>
                  )}
                  {item.description_3 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_3.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-6 mt-4">
        {selectedEmployeeID?.content_2.map((section) =>
          <div key={section.id} className="space-y-4">
            <h2 className="text-lg font-medium text-gray-800">{section.first_sec_title}</h2>
            <div className="space-y-4 pl-2">
              {section.first_sec.map((item) => (
                <div key={item.id} className="space-y-2">
                  {item.first && (
                    <h3 className="text-base font-medium text-gray-700">{item.first}</h3>
                  )}
                  {item.description_1 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_1.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.second && (
                    <h3 className="text-base font-medium text-gray-700">{item.second}</h3>
                  )}
                  {item.description_2 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_2.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.third && (
                    <h3 className="text-base font-medium text-gray-700">{item.third}</h3>
                  )}
                  {item.description_3 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_3.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.fourth && (
                    <h3 className="text-base font-medium text-gray-700">{item.fourth}</h3>
                  )}
                  {item.description_4 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_4.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.fifth && (
                    <h3 className="text-base font-medium text-gray-700">{item.fifth}</h3>
                  )}
                  {item.description_5 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description_5.map((desc) => (
                        <li key={desc.id} className="text-gray-600">
                          {desc.desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              ))}
            </div>
          </div>)}

      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="bg-slate-100 w-full max-w-4xl h-auto flex flex-col items-start justify-center p-6 md:p-10 mt-[60px] gap-6 rounded-lg">
              <ProfileSection />
              <IntroductionSection />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="bg-slate-100 w-full max-w-6xl h-auto flex items-stretch p-10 mt-[60px] gap-8 rounded-lg">
              <div className="w-1/3 flex flex-col gap-6">
                <ProfileSection />
              </div>
              <div className="w-2/3">
                <IntroductionSection />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default page;