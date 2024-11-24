import Image from "next/image";
import React from "react";

interface ImagesConectaProps {
  imagen: string;
  descripcion: string;
}

export default function ImagesConecta({
  imagen,
  descripcion,
}: ImagesConectaProps) {
  return (
    <Image
      src={imagen}
      alt={descripcion}
      width="250"
      height="250"
      className="object-cover h-full lg:aspect-[3/4] sm:aspect-[3/2] aspect-[3/1] w-full lg:w-auto rounded-lg overflow-hidden"
    />
  );
}
