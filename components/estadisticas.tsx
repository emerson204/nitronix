import { Separator } from "./ui/separator";

interface EstadisticasProps {
  cantidad: string;
  subtitulo: string;
}

export default function Estadisticas({
  cantidad,
  subtitulo,
}: EstadisticasProps) {
  return (
    <>
      <div className="text-center lg:text-left md:mx-auto lg:mx-0">
        <p className="sm:text-4xl text-3xl raleway-semibold mb-2">{cantidad}</p>
        <p>{subtitulo}</p>
      </div>
      <Separator className="bg-gray-600 hidden lg:flex" />
    </>
  );
}
