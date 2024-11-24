import BtnConecta from "@/components/btnConecta";
import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";
import Image from "next/image";
import React from "react";

export default function Elegirnos() {
  return (
    <Contenedor>
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
        <div data-aos="fade-down">
          <HeadingSecciones
            subtitulo="Tu mejor elección, garantizada"
            titulo="¿Por qué elegirnos?"
          />
          <p className="text-white mb-6">
            Contamos con personal especializado y amplia experiencia en el
            rubro, nuestro objetivo es brindar un buen servicio e información
            que ayudará a nuestros clientes a conservar sus vehículos en buenas
            condiciones en el largo plazo.
          </p>
          <BtnConecta />
        </div>
        <div data-aos="flip-left">
          <Image
            src="https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732310729/elegirnos_a9j9jj.jpg"
            alt="imagenes de persona reparando un auto rojo"
            width="500"
            height="500"
            className="object-cover rounded-tr-[5rem]  md:rounded-tr-none  rounded-bl-[5rem] md:rounded-bl-none md:rounded-tl-[5rem] md:rounded-br-[5rem] w-full lg:w-auto"
          />
        </div>
      </div>
    </Contenedor>
  );
}
