import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { logosCars } from "@/data/logosCars";
import Image from "next/image";

export default function CarouselBrands() {
  return (
    <div className="lg:mt-16 md:mt-14 mt-12">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1100,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {logosCars.map((logo) => (
            <CarouselItem
              key={logo.id}
              className="md:basis-1/4 basis-4/4 lg:basis-1/6"
            >
              <Image
                src={logo.imagen}
                width={100}
                height={100}
                alt="imagen de carousel"
                className="object-contain aspect-[3/2] w-[5rem] md:w-[6rem] lg:w-[7rem]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
