import "./Blog.css";
import { cleanPage } from "../../utils/cleanPage";


export const Blog = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="blog">
    <h1>Blog personal de las prácticas</h1>
    <p>En este apartado comentare un poco en que consisten las diferentes prácticas que he realizado</p>
    <h2>Aequitectura de la informacion</h2>
    <p>Esta pagina web de informacion sobre el grupo de heavy metal Scorpions, la practica consistia en realizar un pagina web unicamente con Html 
    para empezar a practicar los conceptos basicos de diferentes tipos de tags y rellenar corectamente los metadtos de la pagina web.</p>
    <h2>Landing Page</h2>
    <p>En este caso la pagina web esta dedicada a crear un landing page como practica para empezar a usar css , concretamente el uso de Flex intentando
    representar en este caso una landing page real que sea responsives para moviles y ordenadores.</p>
    <h2>Proyecto 1</h2>
    <p>Esta página web ya consta de elementos de Html y Css con la finalidad de crear la replica de una pagina web 
    (en este caso la pagina de inicio de la web de media markt) en la que poner en practica todo lo aprendido en ambos lenguajes usando Flex, Grid
    y diversas herramienta y haciendo que sea responsive tanto para tablets como para moviles.</p>
    <h2>Practica DOM</h2>
    <p>Esta pagina web esta dedicada a poner en practica los conocimiento de DOM adqueridos en el curso, unificando Html, Css y JavaScript para crear una 
    pagina web (nuevamente en este caso replicando Media Markt) donde tener la tipica pagina de compra de productos con su filtro de busqueda y una serie de datos 
    de cada producto implementando la pagina al completo desde JavaScript manteniendo que sea responsive para diferente dispositivos.</p>
    </section>`;
};