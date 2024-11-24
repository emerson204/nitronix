import Contenedor from "@/components/contenedor";
import SeccionContactanos from "./components/seccionContactanos";
import SeccionFormulario from "./components/seccionFormulario";
import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./components/mapa"), {
  ssr: false, // Deshabilitar el renderizado en el servidor
});

export default function ContactoPage() {
  return (
    <>
      <Contenedor>
        <div className="grid md:grid-cols-2 gap-10">
          <SeccionContactanos />
          <SeccionFormulario />
        </div>
      </Contenedor>
      <Mapa />
    </>
  );
}
