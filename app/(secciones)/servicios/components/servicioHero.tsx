import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";

export default function ServicioHero() {
  return (
    <Contenedor>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="md:py-14 py-12 text-white bg-[#1D262B] px-6 rounded-br-[7rem]">
          <HeadingSecciones
            subtitulo="Tu vehículo merece lo mejor."
            titulo="Servicios  para superar tus expectativas."
          />
          <p>
            Descubre la gama de servicios que ofrecemos para cuidar, reparar y
            mejorar tu vehículo con el máximo nivel de calidad y
            profesionalismo.
          </p>
        </div>
        <div className="bg-[url('https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732309881/servicio-hero_op2vqw.jpg')]  bg-center bg-cover h-[17rem] lg:h-auto rounded-tr-[7rem]"></div>
        <div className="bg-[url('https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732309881/servicio3-hero_dxzf5z.jpg')] hidden lg:flex   bg-center bg-cover rounded-tl-[7rem] "></div>
      </div>
    </Contenedor>
  );
}
