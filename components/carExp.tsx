interface ExperienciaCarProps {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export default function CarExperiencia({
  titulo,
  descripcion,
  imagen,
}: ExperienciaCarProps) {
  return (
    <div className="flex items-center gap-5 ">
      <img src={imagen} alt="icono" width="70" height="70" />
      <div className="text-white">
        <h3 className="text-xl mb-1 raleway-semibold">{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
