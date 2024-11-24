"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import NavBar from "./navBar";
import NavMobile from "./navMobile";
import Logo from "./logo";

export default function ContenidoNavHeader() {
  return (
    <div className="flex justify-between text-white items-center py-4 max-w-[78rem] mx-auto px-5">
      <Logo ruta="logoni" />

      <nav className="md:flex hidden">
        <NavBar />
      </nav>

      <Link
        href="/contacto"
        className={`${buttonVariants({
          variant: "heading",
        })} md:flex hidden`}
      >
        Cotizar Ahora
      </Link>

      <div className="md:hidden">
        <NavMobile />
      </div>
    </div>
  );
}
