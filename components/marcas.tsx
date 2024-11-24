"use client";
import React from "react";
import Contenedor from "./contenedor";
import HeadingSecciones from "./headingSecciones";
import { logosCars } from "@/data/logosCars";
import CarouselBrands from "./carouselBrands";

export default function Marcas() {
  return (
    <section className="bg-[#14191c] md:py-12 py-10">
      <div className="max-w-[75rem] mx-auto px-5">
        <HeadingSecciones
          subtitulo="Las mejores marcas a tu alcance"
          titulo="Somos un Taller Multimarca"
        />

        <CarouselBrands />
      </div>
    </section>
  );
}
