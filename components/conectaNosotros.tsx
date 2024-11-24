import React from "react";
import Contenedor from "./contenedor";
import HeadingSecciones from "./headingSecciones";
import ImagesConecta from "./imagesConecta";
import BtnConecta from "./btnConecta";

export default function ConectaNosotros() {
  return (
    <Contenedor className="bg-[#14191c]">
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-2 gap-10 lg:gap-x-14">
        <div
          className="grid row-start-2 lg:row-auto sm:grid-cols-2 gap-4 "
          data-aos="zoom-in-up"
        >
          <ImagesConecta
            imagen="https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732231488/asiento_zwhdc1.jpg"
            descripcion="Asiento de auto"
          />
          <ImagesConecta
            imagen="https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732231488/carred_edhz1e.jpg"
            descripcion="Carro rojo "
          />
        </div>
        <div data-aos="zoom-in-up">
          <HeadingSecciones
            subtitulo="Conecta con tu pasión"
            titulo="Tu auto, más que un vehículo: un estilo de vida"
          />
          <p className="text-white mb-8">
            Entendemos que tu auto no es solo transporte; es parte de tu estilo
            de vida y tu pasión. Por eso, cuenta con nosotros para realzar su
            valor, cuidarlo al máximo y mantenerlo siempre en su mejor versión.
            <strong> Contacta con nosotros presionando acá abajo.</strong>
          </p>
          <BtnConecta />
        </div>
      </div>
    </Contenedor>
  );
}
