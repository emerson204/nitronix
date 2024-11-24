interface HeadingProps {
  subtitulo: string;
  titulo: string;
}

export default function HeadingSecciones({ subtitulo, titulo }: HeadingProps) {
  return (
    <h2 className="text-white md:text-4xl sm:text-3xl text-2xl raleway-semibold max-w-[35rem] mb-5 lg:mb-7">
      <span className="text-[#d3a35c] block  text-base sm:text-lg raleway-regular mb-1">
        {subtitulo}
      </span>
      {titulo}
    </h2>
  );
}
