import { Star } from "lucide-react";

interface TestimoniosData {
  id: number;
  nombre: string;
  comentario: string;
  ranking: number;
  imagen: string;
  icono: React.ReactNode;
}

export const testimoniosData: TestimoniosData[] = [
  {
    id: 1,
    nombre: "Carlos Rodríguez",
    comentario:
      "Excelente servicio, mi auto quedó como nuevo, ¡totalmente recomendado! El trato fue excepcional y el trabajo rápido y eficiente.",
    ranking: 5,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-2_yyb1yc.jpg",
    icono: <Star fill="yellow" />,
  },
  {
    id: 2,
    nombre: "Lucía Martínez",
    comentario:
      "Muy profesionales, el trabajo fue rápido y de calidad. ¡Estoy muy feliz con el resultado! Además, el personal fue muy amable y atento en todo momento.",
    ranking: 4.5,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-1_rfbw8i.jpg",
    icono: <Star fill="yellow" />,
  },
  {
    id: 3,
    nombre: "Fernando Pérez",
    comentario:
      "Me sorprendió lo bien que quedó mi coche, ¡definitivamente volveré! El acabado fue impecable y se notó el esfuerzo y dedicación en cada detalle.",
    ranking: 4,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-3_xvx8wy.jpg",
    icono: <Star fill="yellow" />,
  },
  {
    id: 4,
    nombre: "Ana González",
    comentario:
      "Increíble trabajo, muy detallado y profesional, mi coche funciona como nuevo. Estoy muy satisfecha con los resultados",
    ranking: 5,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-5_x2zdhv.jpg",
    icono: <Star fill="yellow" />,
  },
  {
    id: 5,
    nombre: "Pedro Jiménez",
    comentario:
      "Servicio impecable, quedé muy contento con la atención y la rapidez. La calidad del trabajo es excelente y el equipo muy profesional.",
    ranking: 4.5,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-4_yfajdd.jpg",
    icono: <Star fill="yellow" />,
  },
  {
    id: 6,
    nombre: "Rogert Armani",
    comentario:
      "Totalmente recomendados, son expertos y se nota el cuidado en cada detalle. El servicio fue rápido y el resultado fue mucho mejor de lo que esperaba.",
    ranking: 5,
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732238346/profile-3_xvx8wy.jpg",
    icono: <Star fill="yellow" />,
  },
];
