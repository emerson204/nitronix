"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { AlignJustify } from "lucide-react";
import NavBar from "./navBar";
import Logo from "./logo";
import { useState } from "react";

export default function ContenidoNavHeader() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-between text-white items-center py-4 max-w-[78rem] mx-auto px-5">
      <Logo ruta="logoni" />

      <NavBar open={open} handleClose={handleClose} />

      <Link
        href="/contacto"
        className={`${buttonVariants({
          variant: "heading",
        })} md:flex hidden`}
      >
        Cotizar Ahora
      </Link>

      <div className="md:hidden">
        <AlignJustify
          className={`md:hidden ${open ? "hidden" : "block"} `}
          onClick={handleMenu}
          size={30}
        />
      </div>
    </div>
  );
}
