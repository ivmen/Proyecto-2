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
    aunque llevo muchos años trabajando en hosteleria y como vendedor de hardware y software informático
    tambien soy estudiante de redes y sistemas y desarrollo de aplicaciones Web como alumno de Prometeo en The Power.
    Me encanta la programación  y tengo varios cientos de horas en diversos lenguajes como JavaSript, Java, C y Python, siempre dispusto para
    aprender mas y avanzar en el sector.
    En esta pagina web pretendo dejar constancia de mis avances con el modulo y de diversas aplicaciones o paginas que vaya creando
    .</p>
    <a href="mailto:ivan.mendez.pacheco@gmail.com">Saludame por aqui→</a>
    </section>`;
};