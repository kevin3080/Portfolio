import { Projects } from '../Interfaces';
import { CountryApp, GifApp, AdviceApp, ComingSoon, Landing, TodoApp } from './indexImages';

const projects: Projects[] = [
   {
      id: 1,
      image: `${ CountryApp }`,
      title: 'Search Country App',
      description: 'This application is built with NextJs and Tailwind. With this project I put into practice my knowledge of TypeScript and NextJs building an application that allows me to see all the countries that exist and information such as their inhabitants and border countries.',
      technology: ['NextJs', 'React', 'Typescript', 'Tailwind', 'Fetch'],
      UriDemo: 'https://countries-app-ten-omega.vercel.app/',
      UriRepo: 'https://github.com/kevin3080/Countries-app',
   },
   {
      id: 2,
      image: `${ GifApp }`,
      title: 'Gif App',
      description: 'I built a gif browser with React and CSS. With this project I learned a lot React, its components and creating custom hooks.',
      technology: ['React', 'Vite', 'CSS', 'Fetch'],
      UriDemo: 'https://giffappsearch.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/gif-search',
   },
   {
      id: 3,
      image: `${ TodoApp }`,
      title: 'Todo App',
      description: 'With this project I put in practice what I learned from a react course, I implemented redux toolkit to manage the global context of my application and also reinforced knowledge of SCSS and CSS.',
      technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
      UriDemo: 'https://todo-appfront.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/Todo-app',
   },
   {
      id: 4,
      image: `${ AdviceApp }`,
      title: 'Advice App',
      description: 'This application is built with React and SCSS. With this project I put into practice the apis calls with Fetch.',
      technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
      UriDemo: 'https://advice-r-app.netlify.app/',
      UriRepo: 'https://github.com/kevin3080/Advice-app',
   },
   {
      id: 5,
      image: `${ Landing }`,
      title: 'Landing Page',
      description: 'This landing page is built with HTML and SCSS with this mini project I put SCSS into practice.',
      technology: ['HTML', 'SCSS'],
      UriDemo: 'https://kevin3080.github.io/landing-page/',
      UriRepo: 'https://github.com/kevin3080/landing-page',
   },
   {
      id: 6,
      image: `${ ComingSoon }`,
      title: 'Api of Tips',
      description: 'In this application I will create an api that will contain more than 200 different tips in English and Spanish.',
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
