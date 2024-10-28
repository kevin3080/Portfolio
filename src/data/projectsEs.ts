import { ArrProjects, ListProjects } from '../Interfaces';
import {
  CountryApp,
  GifApp,
  AdviceApp,
  Landing,
  TodoApp,
  CrudSequelize,
  AgencyLanding,
  PruebaVue,
  TestDango,
  HangmanGame,
} from './indexImages';

const arrProjects: ArrProjects[] = [
  {
    image: `${HangmanGame}`,
    title: 'Juego del Ahorcado',
    description:
      'en este proyecto hice un juego del ahorcado con vuejs. Desarrolle un teclado virtual que permite interactuar con el juego, tiene un sistema de puntuación basado en la vida y las palabras correctas. También tiene una colección de palabras categorizadas por nombres, países, colores y objetos.',
    technology: ['Vue', 'Typescript', 'CSS', 'Pina'],
    UriDemo: 'https://hangman-kev.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Hangman-Game',
  },
  {
    image: `${TestDango}`,
    title: 'Prueba técnica React, E-Commerce',
    description:
      'Este proyecto fue una prueba tecnica que tuve para una empresa, me pidieron contruir una Pagina que simulara un e-commerce, que pudiera agregar nuevos productos a la lista, editar productos y agregar productos a un carrito de compras.',
    technology: ['React', 'Typescript', 'CSS'],
    UriDemo: 'https://testdangodigital.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/dangoDigitalTest',
  },
  {
    image: `${PruebaVue}`,
    title: 'Prueba tecnica Vue',
    description:
      'Este proyecto lo construí a petición de una prueba técnica de Vue. Básicamente me pidieron que renderizara una lista de usuarios que llegaban de una api, con el fin de mostrar su información, y poder interactuar con la data.',
    technology: ['Vue', 'Typescript', 'CSS'],
    UriDemo: 'https://vue-technical-test.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Prueba-Tecnica-VueJs',
  },
  {
    image: `${AgencyLanding}`,
    title: 'Search Country App',
    description:
      'Esta aplicación la construí con React, TypeScript, y CSS. con este proyecto puse en practica mis conocimientos de grid, flex, y responsividad.',
    technology: ['React', 'Typescript', 'CSS'],
    UriDemo: 'https://agency-landingkev.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/agency_landing',
  },
  {
    image: `${CountryApp}`,
    title: 'Search Country App',
    description:
      'Esta aplicación está construida con NextJs y Tailwind. Con este proyecto puse en práctica mis conocimientos de TypeScript y NextJs construyendo una aplicación que permite ver todos los países que existen e información como sus habitantes y países fronterizos.',
    technology: ['NextJs', 'React', 'Typescript', 'Tailwind', 'Fetch'],
    UriDemo: 'https://countries-app-ten-omega.vercel.app/',
    UriRepo: 'https://github.com/kevin3080/Countries-app',
  },
  {
    image: `${GifApp}`,
    title: 'Gif App',
    description:
      'Construí un navegador de gifs con React y CSS. Con este proyecto aprendí mucho React, sus componentes y a crear hooks personalizados.',
    technology: ['React', 'Vite', 'CSS', 'Fetch'],
    UriDemo: 'https://giffappsearch.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/gif-search',
  },
  {
    image: `${CrudSequelize}`,
    title: 'CRUD with Node and Express',
    description:
      'En esta aplicación realicé un crud completo con node y express. Fue una buena oportunidad para aprender Sequelize y PostgreSQL, hice el deploy del back en render.',
    technology: [
      'Node',
      'Express',
      'Javascript',
      'Sequelize',
      'PostgreSQL',
      'React',
      'Vite',
      'Bootstrap',
      'Axios',
    ],
    UriDemo: 'https://main--crud-react-node-express.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/crud_mysql_sequelize_Node',
  },
  {
    image: `${TodoApp}`,
    title: 'Todo App',
    description:
      'Con este proyecto puse en práctica lo aprendido en un curso de react, implementé redux toolkit para gestionar el contexto global de mi aplicación y además reforcé conocimientos de SCSS y CSS.',
    technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
    UriDemo: 'https://todo-appfront.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Todo-app',
  },
  {
    image: `${AdviceApp}`,
    title: 'Advice App',
    description:
      'Esta aplicación está construida con React y SCSS. Con este proyecto puse en práctica las llamadas apis con Fetch.',
    technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
    UriDemo: 'https://advice-r-app.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Advice-app',
  },
  {
    image: `${Landing}`,
    title: 'Landing Page',
    description:
      'Esta página de aterrizaje está construida con HTML y SCSS con este mini proyecto pongo en práctica SCSS.',
    technology: ['HTML', 'SCSS'],
    UriDemo: 'https://kevin3080.github.io/landing-page/',
    UriRepo: 'https://github.com/kevin3080/landing-page',
  },
  // {
  //    image: `${ ComingSoon }`,
  //    title: 'Api of Tips',
  //    description: 'En esta aplicación crearé una api que contendrá más de 200 consejos diferentes en inglés y español.',
  //    technology: ['PHP', 'Laravel'],
  //    UriDemo: '',
  //    UriRepo: '',
  // },
  /* {
      image: `${ ComingSoon }`,
      title: 'Url Shortener',
      description: 'This application will be created with php, laravel and react',
      technology: ['PHP', 'Laravel', 'React', 'Tailwind', 'Axios'],
      UriDemo: '',
      UriRepo: '',
   }, */
];

export const projectsEs: ListProjects[] = arrProjects.map((project, index) => ({
  ...project,
  id: index + 1,
}));
