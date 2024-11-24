"use client";

import Contenedor from "@/components/contenedor";
import HeadingSecciones from "@/components/headingSecciones";
import { Button } from "@/components/ui/button";
import { categorias, proyectos } from "@/data/dataGaleria";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function GaleriaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const filtrarProyectos = (categoriaSlug: string) => {
    setCategoriaSeleccionada(categoriaSlug);
  };

  const proyectosFiltrados =
    categoriaSeleccionada === "todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.slug === categoriaSeleccionada);

  return (
    <Contenedor>
      <HeadingSecciones
        subtitulo="Explora nuestra galería"
        titulo="Proyectos que reflejan nuestra experiencia y dedicación"
      />

      <div className="md:pt-14 pt-6 pb-20 h-auto">
        <div className="flex gap-5 justify-center flex-wrap mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria.id}
              onClick={() => filtrarProyectos(categoria.slug)}
              variant="outline"
            >
              {categoria.display}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 md:grid-rows-3 gap-5 ">
          {proyectosFiltrados.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              className={`box ${proyecto.clase}`}
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout
            >
              <img
                src={proyecto.imagen}
                height="500"
                width="500"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Contenedor>
  );
}
