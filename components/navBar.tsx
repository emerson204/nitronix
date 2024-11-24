import { navItems } from "@/data/navItems";
import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex flex-col items-start md:flex-row gap-10 md:gap-12 md:items-center pl-5 md:pl-0 pt-8 md:pt-0">
      {navItems.map((item) => (
        <li
          key={item.id}
          className="relative w-[35%] min-w-[6rem] md:w-auto md:min-w-0 text-left md:text-center"
        >
          <Link
            href={item.url}
            className="after:content-[''] after:absolute  md:after:w-0 md:after:h-[2px] after:block after:bg-[#c49550] after:w-full md:hover:after:w-full after:transition-all duration-200 py-2 after:h-[3px] -tracking-tight"
          >
            {item.titulo}
          </Link>
        </li>
      ))}
    </ul>
  );
}
