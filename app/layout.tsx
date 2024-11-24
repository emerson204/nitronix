import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Footer from "@/components/footer";
import TopBoton from "@/components/topBoton";

const ralewayRegular = localFont({
  src: "./fonts/Raleway-Regular.ttf",
  variable: "--font-raleway-regular",
  weight: "400",
  display: "swap",
});
const ralewaySemiBold = localFont({
  src: "./fonts/Raleway-SemiBold.ttf",
  variable: "--font-raleway-semibold",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitronix",
  description: "Pagina de Nitronix que es un taller de autos",
  icons: {
    icon: ["/favicon.ico?v=4"], // Favicon para la pestaña del navegador.
    apple: ["/apple-touch-icon.png?=4"], // Ícono para dispositivos Apple (iPhones, iPads).
    shortcut: ["/shortcuts/shortcut.png"], // Ícono para dispositivos Apple (iPhones, iPads).
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewayRegular.variable} ${ralewaySemiBold.variable} antialiased over`}
      >
        {children}
        <TopBoton />
        <Footer />
      </body>
    </html>
  );
}
