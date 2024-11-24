interface ProyectosProps {
  id: number;
  categoria: string;
  slug: string;
  imagen: string;
  clase?: string;
}

interface CategoriasProps {
  id: number;
  display: string;
  slug: string;
}

export const proyectos: ProyectosProps[] = [
  {
    id: 1,
    categoria: "Mecanica",
    slug: "mecanica",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/mecanica_1_yzwubd.jpg",
    clase: "row-span-2 col-span-2",
  },
  {
    id: 2,
    categoria: "Pintura",
    slug: "pintura",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/pintura_2_ljcobw.jpg",
    clase: "col-span-2",
  },

  {
    id: 3,
    categoria: "Reparaciones",
    slug: "reparaciones",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423865/reparacion_2_llwcbd.jpg",
  },
  {
    id: 4,
    categoria: "Pintura",
    slug: "pintura",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423865/pintura_1_rt7fcy.jpg",
  },
  {
    id: 5,
    categoria: "Reparaciones",
    slug: "reparaciones",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/reparacion_1_zdf94i.jpg",
    clase: "col-span-2",
  },

  {
    id: 6,
    categoria: "Taller",
    slug: "taller",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/taller_2_lmizwm.jpg",
    clase: "col-span-2",
  },

  {
    id: 7,
    categoria: "Taller",
    slug: "taller",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/taller_1_n5hmqj.jpg",
  },
  {
    id: 8,
    categoria: "Taller",
    slug: "taller",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732431349/taller_jxwopf.jpg",
  },
  {
    id: 9,
    categoria: "Mecanica",
    slug: "mecanica",
    imagen:
      "https://res.cloudinary.com/dgqi1bsbv/image/upload/f_auto,q_auto/v1732423864/mecanica_2_slbgmt.jpg",
    clase: "col-span-2",
  },
];

export const categorias: CategoriasProps[] = [
  { id: 1, display: "Todos", slug: "todos" },
  { id: 2, display: "Mecanica", slug: "mecanica" },
  { id: 3, display: "Pintura", slug: "pintura" },
  { id: 4, display: "Reparaciones", slug: "reparaciones" },
  { id: 5, display: "Taller", slug: "taller" },
];
