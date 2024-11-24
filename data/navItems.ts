interface navItem {
  id: number;
  titulo: string;
  url: string;
}

export const navItems: navItem[] = [
  {
    id: 1,
    titulo: "Inicio",
    url: "/",
  },
  {
    id: 2,
    titulo: "Servicios",
    url: "/servicios",
  },
  {
    id: 3,
    titulo: "Galeria",
    url: "/galeria",
  },
  {
    id: 4,
    titulo: "Contacto",
    url: "/contacto",
  },
];
