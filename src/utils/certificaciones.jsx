import react from '../assets/certificaciones/frontEnd/react-coderhouse.png';
import mobileFirst from '../assets/certificaciones/frontEnd/diploma-mobile-first.jpg';
import frontEndDevelop from '../assets/certificaciones/frontEnd/diploma-frontend-developer.jpg';
import javascriptBasico from '../assets/certificaciones/frontEnd/diploma-basico-javascript.jpg';
import cssGrid from '../assets/certificaciones/frontEnd/diploma-css-grid.jpg';
import htmlPractico from '../assets/certificaciones/frontEnd/diploma-html-practico.jpg';
import htmlYCss from '../assets/certificaciones/frontEnd/diploma-html-css.jpg';

import { FaLink } from "react-icons/fa";

export const certificacionesList = [
    {
        id: 1,
        description: "Trayecto de aprendizaje práctico, con la realización de un ecommerce como entrega final",
        link: "https://www.coderhouse.com/ar/certificados/657df19e9ce70dd37c08e1ab?lang=es",
        image: react,
        icon: <FaLink />
    },
    {
        id: 2,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/2030-mobile-first/diploma/detalle/",
        image: mobileFirst,
        icon: <FaLink />,
    },
    {
        id: 3,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/2467-frontend-developer/diploma/detalle/",
        image: frontEndDevelop,
        icon: <FaLink />,
    },
    {
        id: 4,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/1814-basico-javascript/diploma/detalle/",
        image: javascriptBasico,
        icon: <FaLink />,
    },
    {
        id: 5,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/2474-css-grid/diploma/detalle/",
        image: cssGrid,
        icon: <FaLink />,
    },
    {
        id: 6,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/1758-html-practico/diploma/detalle/",
        image: htmlPractico,
        icon: <FaLink />,
    },
    {
        id: 7,
        description: "",
        link: "https://platzi.com/p/eduardo23krk/curso/2008-html-css/diploma/detalle/",
        image: htmlYCss,
        icon: <FaLink />,
    }
];