"use client";
import Testimonios from "@/components/testimonios";
import ConectaNosotros from "@/components/conectaNosotros";
import DetallesExperiencia from "@/components/detallesExpeciencia";
import Header from "@/components/header";
import Marcas from "@/components/marcas";
import Servicios from "@/components/servicios";
import HeroFinish from "@/components/heroFinish";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Servicios />
      <Marcas />
      <DetallesExperiencia />
      <ConectaNosotros />
      <Testimonios />
      <HeroFinish />
    </>
  );
}
