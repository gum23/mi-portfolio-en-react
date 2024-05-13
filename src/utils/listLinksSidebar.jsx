import { MdCoPresent } from "react-icons/md";
import { GiSkills } from 'react-icons/gi';
import { GrProjects, GrContact } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";


export const links = [
    {
        id: 1,
        label: "Presentacion",
        icon: <MdCoPresent />,
        to: "/"
    },
    {
        id: 2,
        label: "Skills",
        icon: <GiSkills /> ,
        to: "/skills"
    },
    {
        id: 3,
        label: "Proyectos",
        icon: <GrProjects /> ,
        to: "/proyectos"
    },
    {
        id: 4,
        label: "Certificaciones",
        icon: <TbCertificate /> ,
        to: "/certificaciones"
    },
    {
        id: 5,
        label: "Contacto",
        icon: <GrContact /> ,
        to: "/contacto"
    }
]