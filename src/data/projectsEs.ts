import { Projects } from '../Interfaces';
import { CountryApp, GifApp, AdviceApp, ComingSoon, Landing, TodoApp } from './indexImages';

const projects: Projects[] = [
   {
      id: 1,
      image: `${ CountryApp }`,
      title: 'Search Country App',
      description: 'Esta aplicación está construida con NextJs y Tailwind. Con este proyecto puse en práctica mis conocimientos de TypeScript y NextJs construyendo una aplicación que permite ver todos los países que existen e información como sus habitantes y países fronterizos.',
      technology: ['NextJs', 'React', 'Typescript', 'Tailwind', 'Fetch'],
      UriDemo: 'https://countries-app-ten-omega.vercel.app/',
      UriRepo: 'https://github.com/kevin3080/Countries-app',
   },
   {
      id: 2,
      image: `${ GifApp }`,
      title: 'Gif App',
      description: 'Construí un navegador de gifs con React y CSS. Con este proyecto aprendí mucho React, sus componentes y a crear hooks personalizados.',
      technology: ['React', 'Vite', 'CSS', 'Fetch'],
      UriDemo: 'https://giffappsearch.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/gif-search',
   },
   {
      id: 3,
      image: `${ TodoApp }`,
      title: 'Todo App',
      description: 'Con este proyecto puse en práctica lo aprendido en un curso de react, implementé redux toolkit para gestionar el contexto global de mi aplicación y además reforcé conocimientos de SCSS y CSS.',
      technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
      UriDemo: 'https://todo-appfront.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/Todo-app',
   },
   {
      id: 4,
      image: `${ AdviceApp }`,
      title: 'Advice App',
      description: 'Esta aplicación está construida con React y SCSS. Con este proyecto puse en práctica las llamadas apis con Fetch.',
      technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
      UriDemo: 'https://advice-r-app.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/Advice-app',
   },
   {
      id: 5,
      image: `${ Landing }`,
      title: 'Landing Page',
      description: 'Esta página de aterrizaje está construida con HTML y SCSS con este mini proyecto pongo en práctica SCSS.',
      technology: ['HTML', 'SCSS'],
      UriDemo: 'https://kevin3080.github.io/landing-page/',
      UriRepo: 'https://github.com/kevin3080/landing-page',
   },
   {
      id: 6,
      image: `${ ComingSoon }`,
      title: 'Api of Tips',
      description: 'En esta aplicación crearé una api que contendrá más de 200 consejos diferentes en inglés y español.',
      technology: ['PHP', 'Laravel'],
      UriDemo: '',
      UriRepo: '',
   },
   /* {
      id: 7,
      image: `${ ComingSoon }`,
      title: 'Url Shortener',
      description: 'This application will be created with php, laravel and react',
      technology: ['PHP', 'Laravel', 'React', 'Tailwind', 'Axios'],
      UriDemo: '',
      UriRepo: '',
   }, */
   
];

export default projects;
