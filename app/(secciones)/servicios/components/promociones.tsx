import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";
import React from "react";
import CardsPromociones from "./cardsPromociones";

export default function Promociones() {
  return (
    <Contenedor className="bg-[#14191c]">
      <HeadingSecciones
        subtitulo="Ofertas que no puedes dejar pasar"
        titulo="Aprovecha nuestras promociones exclusivas"
      />
      <CardsPromociones />
    </Contenedor>
  );
}
