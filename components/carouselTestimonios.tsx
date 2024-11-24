"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimoniosData } from "@/data/testimoniosData";
import { Separator } from "./ui/separator";

export default function CarouselTestimonios() {
  return (
    <div className="mt-10 xl:max-w-5xl xl:mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimoniosData.map((testimonio) => (
            <CarouselItem
              key={testimonio.id}
              className="md:basis-1/2 lg:basis-1/3 text-white md:px-8 pr-3  flex flex-col "
            >
              <div className="flex items-center gap-5">
                <img
                  src={testimonio.imagen}
                  alt="perfil1"
                  width="50"
                  height="50"
                  className="rounded-full"
                />
                <h3 className="text-xl">{testimonio.nombre}</h3>
              </div>
              <Separator className="my-4 md:my-3 bg-gray-600 " />
              <p className="mb-3 ">{testimonio.comentario}</p>

              <div className="flex items-center gap-2 mt-auto">
                {testimonio.icono}
                <p className="text-lg raleway-semibold">{testimonio.ranking}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="xl:flex hidden" />
        <CarouselNext className="xl:flex hidden" />
      </Carousel>
    </div>
  );
}
