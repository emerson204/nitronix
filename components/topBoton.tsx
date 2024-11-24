"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpFromDot } from "lucide-react";

export default function TopBoton() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - -200) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={`fixed lg:bottom-12 bottom-5 lg:right-16 right-5 text-white transition-all duration-300 ${
        isScroll ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-10"
      }`}
      variant={"heading"}
      onClick={isScroll ? scrollTop : undefined} // Solo activa onClick cuando sea visible
    >
      <ArrowUpFromDot strokeWidth={3} />
    </Button>
  );
}
