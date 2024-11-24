import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface ServiciosProps {
  servicios: {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
  }[];
}

export default function CardsServicios({ servicios }: ServiciosProps) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5 relative mb-7">
      {servicios.map((servicio) => (
        <div
          key={servicio.id}
          className="relative group hover:after:content-[''] after:absolute after:inset-0 hover:after:bg-black/60 hover:after:transition-all hover:after:duration-200"
        >
          <img src={servicio.imagen} alt={servicio.imagen} />
          <h3 className="text-white group-hover:opacity-0 opacity-100 transition-opacity duration-500 absolute bottom-3 ml-3 raleway-semibold text-lg">
            {servicio.nombre}
          </h3>
          <div className="absolute top-[32%] flex flex-col items-center gap-3 w-full text-white group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300 raleway-semibold opacity-0 z-10">
            <p className="md:px-6 px-4 text-center md:text-lg">
              {servicio.descripcion}
            </p>
            <Link
              href="/contacto"
              className={`${buttonVariants({
                variant: "heading",
              })}`}
            >
              Cotizar
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
