interface InfoContactoProps {
  icono: React.ElementType;
  texto: string;
  info: string;
}

export default function InfoContacto({
  icono: Icono,
  texto,
  info,
}: InfoContactoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#b58846]  p-2 sm:p-3 rounded-full flex ">
        <Icono />
      </div>
      <div>
        <h3 className="text-lg raleway-semibold">{texto}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
}
