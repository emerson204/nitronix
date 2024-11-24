"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import NavBar from "./navBar";
import Logo from "./logo";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  // Verifica si es móvil , osea aca esta verificando si es menor a 768 osea si es mobile
  const isMobile = () => window.innerWidth < 768;

  // Para cerrar automaticamente el sheet en pantallas grandes , primero creamos una funcion
  // El Sheet se cierre automáticamente al cambiar de tamaño. Esto ya lo tienes resuelto con tu handleResize.
  const handleResize = useCallback(() => {
    // Si no es mobile osea si no es menor a 768 y el open es True
    if (!isMobile() && open) {
      setOpen(false);
    }
  }, [open]);

  // Luego usamos useEffect
  useEffect(() => {
    // Aca hacemos un evento a window que escuche el resize y llame a la funcion
    window.addEventListener("resize", handleResize);

    // Y esta es una funcion de limpieza y se ejecuta cuando useEffect se ejecuta nuevamente porque cambió alguna dependencia en este caso la dependencia es "open", porque cambia de true a false si esque esta abierto
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // "Ejecuta este useEffect solo si cambia el valor de open."

  // Esto es para que el Sheet no abra si la pantalla es grande. Esto se controla en onOpenChange validando el tamaño de la pantalla.
  const handleOpenChange = (state: boolean) => {
    // Ya haciendo este handleOpenChange , por ejm si tu vas a responsively y abres el sheet en una iphone 12 , no se abra en la mackboock pro
    // Solo permite abrir en móviles osea como el onOpenChange del sheet siempre vota un valor true o false , ese valor se almacena en state , entones si el usuario abre el sheet(menu) seria true , entonces esta condicional verifica , si es mobile si abrelo , pero si no es mobile , dejalo false , entonces eso haria que solo se habra en mobile y no en el mackboock pro
    if (isMobile()) {
      setOpen(state);
    }
  };
  return (
    <nav>
      {/* El componente Sheet utiliza la propiedad onOpenChange para manejar el cambio de estado (abierto o cerrado). 
    Cuando se llama a la función que le pasaste a onOpenChange (en este caso handleOpenChange), 
    le pasa un valor booleano (true o false), y ese valor booleano se almacena en el parametro state del handleOpenChange y segun ese valor , le pasamos al estado setOpen el valor de state  */}

      <Sheet open={open} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <FiMenu size={30} className="md:hidden cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="left" className="w-[70%] ">
          <SheetHeader>
            <SheetTitle>
              <Logo ruta="logomobil" />
            </SheetTitle>
            <SheetDescription asChild>
              <NavBar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
