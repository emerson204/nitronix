import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface IconosProps {
  id: number;
  icono: React.ReactNode;
}

export const iconosFooter: IconosProps[] = [
  {
    id: 1,
    icono: <FaFacebook />,
  },
  {
    id: 2,
    icono: <FaInstagram />,
  },
  {
    id: 3,
    icono: <FaTwitter />,
  },
  {
    id: 4,
    icono: <FaWhatsapp />,
  },
];
