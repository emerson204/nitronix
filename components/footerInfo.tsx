interface FooterInfoProps {
  titulo: string;
  recursoUno: string;
  recursoDos: string;
  recursoTres: string;
  recursoCuatro?: string;
}

export default function FooterInfo({
  titulo,
  recursoUno,
  recursoDos,
  recursoTres,
  recursoCuatro,
}: FooterInfoProps) {
  return (
    <div>
      <h3 className="text-xl raleway-semibold mb-5">{titulo}</h3>
      <div className="flex flex-col gap-2">
        <p>{recursoUno}</p>
        <p>{recursoDos}</p>
        <p>{recursoTres}</p>
        <p>{recursoCuatro}</p>
      </div>
    </div>
  );
}
