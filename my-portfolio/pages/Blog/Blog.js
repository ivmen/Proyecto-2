import "./Blog.css";
import { cleanPage } from "../../utils/cleanPage";


export const Blog = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="blog">
    <h1>Blog personal de las prácticas</h1>
    <p>En este apartado comentare un poco en que consisten las diferentes prácticas que he realizado</p>
    <h2>Aequitectura de la información</h2>
    <p>Esta página web de información sobre el grupo de heavy metal Scorpions, la práctica consistía en realizar un página web unicamente con Html 
    para empezar a practicar los conceptos básicos de diferentes tipos de tags y rellenar corectamente los metadatos de la página web.</p>
    <h2>Landing Page</h2>
    <p>En este caso la página web esta dedicada a crear un landing page como práctica para empezar a usar css , concretamente el uso de Flex intentando
    representar en este caso una landing page real que sea responsives para móviles y ordenadores.</p>
    <h2>Proyecto 1</h2>
    <p>Esta página web ya consta de elementos de Html y Css con la finalidad de crear la réplica de una página web 
    (en este caso la pág0ina de inicio de la web de Media Markt) en la que poner en práctica todo lo aprendido en ambos lenguajes usando Flex, Grid
    y diversas herramienta y haciendo que sea responsive tanto para tablets como para móviles.</p>
    <h2>Practica DOM</h2>
    <p>Esta página web esta dedicada a poner en práctica los conocimiento de DOM adquiridos en el curso, unificando Html, Css y JavaScript para crear una 
    página web (nuevamente en este caso replicando Media Markt) donde tener la típica página de compra de productos con su filtro de busqueda y una serie de datos 
    de cada producto implementando la página al completo desde JavaScript manteniendo que sea responsive para diferente dispositivos.</p>
    <h2>My Portfolio</h2>
    <p>Esta página web esta dedicada a crear una página web a traves de Vite para crear un porfolio para exponer todos los proyectos que se van realizando durante el curso.</p>
    <h2>Game Of Photos</h2>
    <p>Esta página web esta dedicada a crear una página web que conecta con una API pública de información de personajes de la serie Juego de tronos donde a traves de un selector 
    en el que están registrados todos los personajes de la API selecionas un personaje y puedes ver su foto.</p>
    <h2>PokePhoto</h2>
    <p>Esta página web esta dedicada a crear una página web que conecta con una API pública de información de Pokemón donde se cargan todos los pokemons de la primera generación, 
    en este caso de la ID 1 al 151 y de forma aleatoria cada vez que entras o se recarga la págia se muestra en pantalla uno aleatorio de la seleción.</p>
    <h2>Pokesplash</h2>
    <p>Esta página web esta dedicada a crear una página web a traves de Vite donde se recrea Unsplash una API donde la gente sube sus fotografías que ya cuenta con una serie de
    funciones, en este caso la recreación realiza una busqueda y muestra unas imagenes aleatorias, presenta una barra de busqueda donde realizar consultas para cargar fotos
    asociadas a esa busqueda, tiene una opcion para cambiar el número de fotografias que se muestran en pantalla, la orientación de estas y unos botones para cambiar la página 
    que carga para moverse por las diferentes fotos, ademas en caso de no encontrar ningún resultado con la busqueda se comunica y se muestran otras opciones posibles para mostrar.</p>
    </section>`
    ;
};