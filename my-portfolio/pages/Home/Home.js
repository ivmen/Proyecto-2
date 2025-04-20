import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Iván Méndez</h1>
    <p>Soy un chico de 26 años de Madrid que actualmente reside en Donostia, 
    aunque llevo muchos años trabajando en hostelería y como vendedor de hardware y software informático
    también soy estudiante de redes y sistemas y desarrollo de aplicaciones Web como alumno de Prometeo en The Power.
    Me encanta la programación  y tengo varios cientos de horas en diversos lenguajes como JavaSript, Java, C y Python, siempre dispuesto para
    aprender más y avanzar en el sector.
    En esta página web pretendo dejar constancia de mis avances con el módulo y de diversas aplicaciones o páginas que vaya creando
    .</p>
    <a href="mailto:ivan.mendez.pacheco@gmail.com">Salúdame por aquí  →</a>
    </section>`;
};