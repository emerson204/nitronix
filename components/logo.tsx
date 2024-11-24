import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  ruta: string;
}

export default function Logo({ ruta }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <Image src={`/${ruta}.svg`} width={40} height={40} alt="logo nitronix" />
      <p className="text-2xl raleway-semibold pt-1">tronix</p>
    </Link>
  );
}
