import { FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"


export const navLinks = ["Home", "Acerca de mi", "Portfolio", "Contacto"]

export const socialIcons = [
  <FaInstagram />
  
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Abraham Martinez Bazan"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "2381200005"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "abogado.abrahambazan@gmail.com"
  }
]



export const experiences = [
  {
    id: 1,
    year: "0000",
    position: "Cédula Licenciatura",
    company: "5402831"
  },
  {
    di: 2,
    year: "0000",
    position: "Cédula Maestría",
    company: "9679861"
  },
  {
    id: 3,
    year: "0000",
    position: "Cédula Doctorado",
    company: "11525444"
  }
]


export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Calle 2da J.Ma.Morelos y Pavón, No308,2do piso, Col. Centro, C.P. 75700, Tehuacan, Puebla"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "abogado.abrahambazan@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "2381200005"
  }
]
