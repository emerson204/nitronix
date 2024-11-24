interface ContenedorProps {
  children: React.ReactNode;
  className?: string;
}

export default function Contenedor({ children, className }: ContenedorProps) {
  return (
    <section className={`md:py-20 sm:py-14 py-12 ${className} `}>
      <div className="max-w-[75rem] mx-auto px-5 md:px-7">{children}</div>
    </section>
  );
}
