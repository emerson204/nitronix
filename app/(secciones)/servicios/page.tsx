"use client";
import React from "react";
import ServicioHero from "./components/servicioHero";
import ServiciosList from "./components/serviciosList";
import Elegirnos from "./components/elegirnos";
import Promociones from "./components/promociones";
import FaqServicio from "./components/faqServicio";
import Aos from "aos";
import { useEffect } from "react";

export default function ServiciosPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <ServicioHero />
      <ServiciosList />
      <Elegirnos />
      <Promociones />
      <FaqServicio />
    </>
  );
}
