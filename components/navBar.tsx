import { navItems } from "@/data/navItems";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./logo";

interface ClickProps {
  open: boolean;
  handleClose: () => void;
}

export default function NavBar({ open, handleClose }: ClickProps) {
  return (
    <div
      className={`fixed md:relative bg-black/50 md:bg-transparent inset-0 transition-opacity duration-300 ease-in-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none md:pointer-events-auto"
      } md:opacity-100`}
    >
      <nav className="flex flex-col md:flex-row gap-7 pl-10 md:pl-0 pt-14 md:pt-0 left-0 absolute h-screen md:h-auto md:static top-0 w-[70%]  md:w-auto bottom-0 bg-white md:bg-transparent md:items-center">
        <X
          className="md:hidden flex flex-end w-[150%] text-black "
          onClick={handleClose}
        />
        <div className="md:hidden">
          <Logo ruta="logomobil" />
        </div>
        {navItems.map((item) => (
          <Link
            href={item.url}
            onClick={() => {
              handleClose();
            }}
            className="relative after:content-[''] after:absolute  md:after:w-0 md:after:h-[0.125rem] after:block after:bg-[#c49550] after:w-[70%] md:hover:after:w-full after:transition-all duration-200 py-2 after:h-[0.1875rem] -tracking-tight text-black md:text-white"
          >
            {item.titulo}
          </Link>
        ))}
      </nav>
    </div>
  );
}
