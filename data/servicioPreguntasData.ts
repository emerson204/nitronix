interface ServicioPreguntasProps {
  id: number;
  pregunta: string;
  respuesta: string;
  item: string;
}

export const servicioPreguntas: ServicioPreguntasProps[] = [
  {
    id: 1,
    pregunta: "¿Cuánto tiempo toma realizar un mantenimiento preventivo?",
    respuesta:
      "El tiempo varía dependiendo del estado del vehículo, pero generalmente tomamos entre 2 y 4 horas para garantizar un servicio completo y de calidad.",
    item: "item-1",
  },
  {
    id: 2,
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos pagos en efectivo, tarjetas de crédito y débito, así como transferencias bancarias",
    item: "item-2",
  },

  {
    id: 3,
    pregunta: "¿Qué incluye el mantenimiento preventivo?",
    respuesta:
      "El mantenimiento preventivo incluye cambio de aceite, revisión de filtros, diagnóstico de motor, revisión de frenos y más, según las necesidades del vehículo.",
    item: "item-3",
  },
  {
    id: 4,
    pregunta: "¿Cuentan con garantía en los servicios realizados?",
    respuesta:
      "Sí, ofrecemos garantía en todos nuestros servicios para asegurar la satisfacción y confianza de nuestros clientes.",
    item: "item-4",
  },
  {
    id: 5,
    pregunta: "¿Es necesario dejar el auto todo el día?",
    respuesta:
      "No siempre es necesario, pero depende del tipo de servicio requerido y la complejidad del trabajo.",
    item: "item-5",
  },
];
