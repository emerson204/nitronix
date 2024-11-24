import React from "react";
import Contenedor from "./contenedor";
import Logo from "./logo";
import Link from "next/link";
import FooterInfo from "./footerInfo";
import { iconosFooter } from "@/data/iconosFooter";
import { navItems } from "@/data/navItems";

export default function Footer() {
  return (
    <Contenedor className="bg-[#14191c] text-white">
      <div className="flex flex-wrap justify-between gap-y-10 lg:gap-y-0 ">
        <div>
          <Logo ruta="logoni" />
          <div className="flex text-2xl items-center gap-5 mt-6">
            {iconosFooter.map((icono) => (
              <Link href="#" key={icono.id}>
                {icono.icono}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl raleway-semibold mb-5">Enlaces rápidos</h3>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.titulo}</Link>
              </li>
            ))}
          </ul>
        </div>
        <FooterInfo
          titulo="Recursos"
          recursoUno="Términos y condiciones."
          recursoDos="Política de privacidad."
          recursoTres="Preguntas frecuentes (FAQ)."
          recursoCuatro="Ayuda y soporte."
        />
        <FooterInfo
          titulo="Información de contacto"
          recursoUno="Dirección: Las 7 Rolas 123, San Miguel, Peru."
          recursoDos="Teléfono: +51 948-458-258."
          recursoTres="Correo electrónico: nitronix@ejemplo.com"
        />
      </div>
    </Contenedor>
  );
}
