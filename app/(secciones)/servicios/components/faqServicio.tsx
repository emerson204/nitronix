import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";
import React from "react";
import PreguntasServicio from "./preguntasServicio";

export default function FaqServicio() {
  return (
    <Contenedor>
      <HeadingSecciones
        subtitulo="Resuelve tus dudas"
        titulo="Las preguntas más frecuentes sobre nuestros servicios"
      />
      <PreguntasServicio />
    </Contenedor>
  );
}
