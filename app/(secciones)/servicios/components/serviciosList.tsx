import CardsServicios from "@/components/cardsServicios";
import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";
import { serviciosItems } from "@/data/serviciosItems";
import React from "react";

export default function ServiciosList() {
  return (
    <Contenedor className="bg-[#14191c]">
      <HeadingSecciones
        subtitulo="Conoce nuestros servicios"
        titulo="Qué ofrecemos"
      />
      <CardsServicios servicios={serviciosItems} />
    </Contenedor>
  );
}
