"use client";

import { useEffect, useState } from "react";
import ContenidoNavHeader from "./contenidoNavHeader";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`${
          scroll
            ? "backdrop-blur-lg bg-[#0b1313]/80 fixed w-full z-50"
            : "fixed w-full z-50"
        } `}
      >
        <ContenidoNavHeader />
      </div>

      <div className="bg-[url('https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732127926/car-hero_naplbs.jpg')] degradado  h-[28rem] sm:h-[34rem] bg-cover md:bg-center ">
        <div className="max-w-[78rem] mx-auto flex  h-[100%]  px-5">
          <div className="text-white md:pb-28 sm:pb-24 pb-20 raleway-semibold md:pt-0 mt-auto">
            <h1 className="md:text-6xl sm:text-5xl text-4xl sm:max-w-[35rem]  md:max-w-[50rem]">
              <span className="block text-sm sm:text-base mb-2 text-[#d3a35c] uppercase -tracking-tighter">
                Bienvenido a la excelencia
              </span>
              Tu vehículo, en las manos de{" "}
              <span className="underline underline-offset-4 text-[#d3a35c] md:underline-offset-8 ">
                expertos
              </span>{" "}
              que lo reviven
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
