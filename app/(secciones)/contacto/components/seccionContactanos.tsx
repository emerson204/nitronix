import HeadingSecciones from "@/components/headingSecciones";
import { MapPin, PhoneCall, Send } from "lucide-react";
import InfoContacto from "./infoContacto";

export default function SeccionContactanos() {
  return (
    <div>
      <HeadingSecciones
        subtitulo="Estamos aquí para ayudarte"
        titulo="Contáctanos"
      />
      <p className="text-white mb-5">
        Si tienes alguna pregunta o necesitas más información sobre nuestros
        servicios, no dudes en comunicarte con nosotros. Nuestro equipo estará
        encantado de atenderte y brindarte la asistencia que necesites.
        ¡Esperamos saber de ti pronto!
      </p>
      <div className="flex flex-wrap gap-6 text-white">
        <InfoContacto
          icono={PhoneCall}
          texto="Llámanos"
          info="+51 948-458-258."
        />
        <InfoContacto
          icono={MapPin}
          texto="Ubicación"
          info="Las 7 Rolas 123, San Miguel, Peru."
        />
        <InfoContacto
          icono={Send}
          texto="Escríbenos"
          info="nitronix@ejemplo.com"
        />
      </div>
    </div>
  );
}
