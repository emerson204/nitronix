import { serviciosItems } from "@/data/serviciosItems";
import CardsServicios from "./cardsServicios";
import Link from "next/link";
import HeadingSecciones from "./headingSecciones";
import Contenedor from "./contenedor";

export default function Servicios() {
  const imagenesFeatured = serviciosItems.slice(0, 6);
  return (
    <Contenedor>
      <HeadingSecciones
        subtitulo="Descubre lo mejor"
        titulo="Servicios diseñados para cuidar y mejorar tu vehículo"
      />

      <CardsServicios servicios={imagenesFeatured} />

      <Link
        href="/servicios"
        className=" text-white border border-[#d3a35c] text-center block mx-auto w-fit md:px-6 md:py-3 px-5 py-2 hover:bg-[#d3a35c] transition duration-300 raleway-semibold"
      >
        Ver más servicios
      </Link>
    </Contenedor>
  );
}
