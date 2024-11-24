import CarouselTestimonios from "./carouselTestimonios";
import Contenedor from "./contenedor";
import HeadingSecciones from "./headingSecciones";

export default function Testimonios() {
  return (
    <Contenedor>
      <HeadingSecciones
        subtitulo="Lo que dicen nuestros clientes"
        titulo="Comentarios reales de quienes confiaron en nosotros"
      />
      <CarouselTestimonios />
    </Contenedor>
  );
}
