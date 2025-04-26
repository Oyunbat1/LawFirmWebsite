import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ServiceProps {
  id?: string;
}

const sectionThreeData = [
  {
    id: 1,
    url: "/service/img1.webp",
    logoUrl: "/service/jinluur.webp",
    navigation: "/navigation/first",
  },
  {
    id: 2,
    url: "/service/img2.webp",
    logoUrl: "/service/pen.webp",
    navigation: "/navigation/second",
  },
  {
    id: 3,
    url: "/service/img3.webp",
    logoUrl: "/service/alpha.webp",
    navigation: "/navigation/third",
  },
  {
    id: 4,
    url: "/service/img4.webp",
    logoUrl: "/service/book.webp",
    navigation: "/navigation/fourth",
  },
  {
    id: 5,
    url: "/service/img5.webp",
    logoUrl: "/service/bag.webp",
    navigation: "/navigation/fifth",
  },
  {
    id: 6,
    url: "/service/img6.webp",
    logoUrl: "/service/task.webp",
    navigation: "/navigation/sixth",
  },
];

function Service({ id }: ServiceProps) {
  return (
    <div id={id}>
      <div className="w-screen mt-[180px] pb-[100px] flex flex-wrap px-[20px] md:px-[60px] border-t-2 border-t-gray-400 pt-[60px]  xl:justify-center">
        {sectionThreeData.map((items) => (
          <div
            key={items.id}
            className="w-1/2 lg:w-1/3 xl:w-[392px]  xl:h-[300px]  h-[180px] flex justify-center items-center relative group overflow-hidden  
          "
          >
            <Link className="block w-full h-full" href={`${items.navigation}`}>
              {" "}
              <Image
                width={180}
                height={180}
                alt="image"
                src={items.url}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-125 duration-1000 lg:w-[392px] lg:h-[300px] "
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <Image width={80} height={80} alt="logo" src={items.logoUrl} />
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
