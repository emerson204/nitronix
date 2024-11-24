import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MdContactMail } from "react-icons/md";

export default function BtnConecta() {
  return (
    <div className="flex gap-7 items-center">
      <Link
        href="/contacto"
        className={`${buttonVariants({
          variant: "heading",
        })}  raleway-semibold flex items-center text-white`}
      >
        <MdContactMail />
        Contáctanos
      </Link>
    </div>
  );
}
