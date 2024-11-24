import Contenedor from "./contenedor";
import HeadingSecciones from "./headingSecciones";
import CarExperiencia from "./carExp";
import Estadisticas from "./estadisticas";
import { Separator } from "./ui/separator";

export default function DetallesExperiencia() {
  return (
    <Contenedor>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <div data-aos="zoom-in-up">
          <HeadingSecciones
            subtitulo="
          Nuestra experiencia lo dice todo"
            titulo="
          Restaurando el brillo por dentro y por fuera"
          />
          <p className="text-white mb-10">
            Con más de 40 proyectos exitosos, un equipo de 5 expertos y 29
            clientes satisfechos, garantizamos un servicio de detallado completo
            que deja tu vehículo en su mejor estado. Confía en nosotros para
            devolverle el brillo y la frescura que tu auto merece.
          </p>
          <div className="grid md:grid-cols-2 lg:gap-14 md:gap-12 gap-8 mb-6 lg:mb-0">
            <CarExperiencia
              titulo="Expertos en Acción"
              descripcion="Años de experiencia, llevamos tu auto al siguiente nivel."
              imagen="https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732165615/llave-inglesa_pl3loq.png"
            />
            <CarExperiencia
              titulo="Resultados Garantizados"
              descripcion=" Transformamos tu auto con un servicio que supera expectativas."
              imagen="https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732165615/resolucion-de-problemas_shjgwg.png"
            />
          </div>
        </div>

        <div
          className="text-white flex lg:flex-col justify-between lg:w-[13rem] lg:ml-auto"
          data-aos="zoom-in-up"
        >
          <Estadisticas cantidad="5" subtitulo="Profesionales" />
          <Separator
            className="bg-gray-600 lg:hidden flex"
            orientation="vertical"
          />
          <Estadisticas cantidad="29" subtitulo="Clientes Felices" />
          <Separator
            className="bg-gray-600 lg:hidden flex"
            orientation="vertical"
          />
          <Estadisticas cantidad="42" subtitulo="Proyectos" />
        </div>
      </div>
    </Contenedor>
  );
}
