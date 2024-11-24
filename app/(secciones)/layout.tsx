import HeaderSecciones from "@/components/headerSecciones";

export default function SeccionesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderSecciones />
      <main>{children}</main>
    </div>
  );
}
