import { Separator } from "@/components/ui/separator";
import { dataCarDosLi, dataCarUnoLi } from "@/data/dataLiPromociones";

export default function CardsPromociones() {
  return (
    <div className="text-white grid md:grid-cols-4 lg:grid-cols-3 lg:gap-14 md:gap-12 gap-8  ">
      <div
        className="border border-gray-600 py-8 px-7 h-fit md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-2"
        data-aos="zoom-in"
      >
        <h3 className="text-3xl raleway-semibold mb-5 bg-[#0B1313] py-5 pl-10 -ml-12">
          Oferta
        </h3>
        <p className="raleway-semibold text-gray-400">
          <span className="text-4xl text-[#d3a35c]">10 %</span> Descuento
        </p>
        <Separator className="my-8 bg-gray-600" />
        <h4 className="raleway-semibold text-sm mb-5">
          MANTENIMIENTO PREVENTIVO
        </h4>
        <ul className="flex flex-col gap-2">
          {dataCarUnoLi.map((uno) => (
            <li key={uno.id} className="flex gap-2 items-center">
              <span className="text-lg text-[#d3a35c]">{uno.span}</span>
              {uno.nombre}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="border border-gray-600 py-8 px-7 pb-12 md:col-start-3 md:col-end-5 lg:col-start-2 lg:col-end-3"
        data-aos="zoom-in"
      >
        <h3 className="text-4xl raleway-semibold mb-5 bg-[#d3a35c] py-5 pl-10 -ml-12">
          Pack
        </h3>
        <p className="text-4xl raleway-semibold mb-7">S/.120</p>
        <p className="text-gray-400">Hasta el 15 de enero</p>
        <Separator className="my-8 bg-gray-600" />
        <h4 className="raleway-semibold text-sm mb-7 text-justify pr-16">
          ESCANEO + ALINEAMIENTO DIRECCIÓN + PRUEBA DE BATERÍA
        </h4>
        <ul className="flex flex-col gap-6">
          {dataCarDosLi.map((dos) => (
            <li key={dos.id} className="flex gap-2 items-center">
              <span className="text-lg text-[#d3a35c]">{dos.span}</span>
              {dos.nombre}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="border border-gray-600 py-8 px-7 h-fit mx-auto md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-4"
        data-aos="zoom-in"
      >
        <h3 className="text-3xl raleway-semibold mb-5 bg-[#0B1313] py-5 pl-10 -ml-12">
          Pintura
        </h3>
        <p className="text-4xl raleway-semibold text-[#d3a35c]">
          S/.180 <span className="text-base text-gray-400">/ Por paño</span>
        </p>

        <Separator className="my-8 bg-gray-600" />
        <h4 className="raleway-semibold text-sm mb-7 text-gray-400">GRATIS</h4>
        <p className="raleway-semibold mb-7">Pulido de faros</p>
        <p className="text-justify">
          *Este precio aplica solo a primeros usuarios. / La sección de paño a
          reparar no debe presentar daños internos. / No incluye desmontaje de
          piezas.
        </p>
      </div>
    </div>
  );
}
