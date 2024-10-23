import { ArrProjects, ListProjects } from '../Interfaces';
import {
  CountryApp,
  GifApp,
  AdviceApp,
  Landing,
  TodoApp,
  CrudSequelize,
  AgencyLanding,
  TestDango,
  PruebaVue,
} from './indexImages';

const arrProjects: ArrProjects[] = [
  {
    image: `${TestDango}`,
    title: 'React Technical Test, E-Commerce',
    description:
      'This project was a technical test I had for a company, they asked me to build a site that simulated an e-commerce, that could add new products to the list, edit products and add products to a shopping cart.',
    technology: ['React', 'Typescript', 'CSS'],
    UriDemo: 'https://testdangodigital.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/dangoDigitalTest',
  },
  {
    image: `${PruebaVue}`,
    title: 'Vue technical test',
    description:
      'I built this project at the request of a Vue technical test. Basically I was asked to render a list of users coming from an api, in order to show their information, and be able to interact with the data.',
    technology: ['Vue', 'Typescript', 'CSS'],
    UriDemo: 'https://vue-technical-test.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Prueba-Tecnica-VueJs',
  },
  {
    image: `${AgencyLanding}`,
    title: 'Search Country App',
    description:
      'I built this application with React, TypeScript, and CSS. With this project I put into practice my knowledge of grid, flex, and responsive.',
    technology: ['React', 'Typescript', 'CSS'],
    UriDemo: 'https://agency-landingkev.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/agency_landing',
  },
  {
    image: `${CountryApp}`,
    title: 'Search Country App',
    description:
      'This application is built with NextJs and Tailwind. With this project I put into practice my knowledge of TypeScript and NextJs building an application that allows me to see all the countries that exist and information such as their inhabitants and border countries.',
    technology: ['NextJs', 'React', 'Typescript', 'Tailwind', 'Fetch'],
    UriDemo: 'https://countries-app-ten-omega.vercel.app/',
    UriRepo: 'https://github.com/kevin3080/Countries-app',
  },
  {
    image: `${GifApp}`,
    title: 'Gif App',
    description:
      'I built a gif browser with React and CSS. With this project I learned a lot React, its components and creating custom hooks.',
    technology: ['React', 'Vite', 'CSS', 'Fetch'],
    UriDemo: 'https://giffappsearch.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/gif-search',
  },
  {
    image: `${CrudSequelize}`,
    title: 'CRUD with Node and Express',
    description:
      'In this application I made a complete crud with node and express, was a good opportunity to learn Sequelize and PostgreSQL, I did the back deploy in render. ',
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
      'With this project I put in practice what I learned from a react course, I implemented redux toolkit to manage the global context of my application and also reinforced knowledge of SCSS and CSS.',
    technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
    UriDemo: 'https://todo-appfront.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Todo-app',
  },
  {
    image: `${AdviceApp}`,
    title: 'Advice App',
    description:
      'This application is built with React and SCSS. With this project I put into practice the apis calls with Fetch.',
    technology: ['React', 'Vite', 'SCSS', 'CSS', 'Fetch'],
    UriDemo: 'https://advice-r-app.netlify.app/',
    UriRepo: 'https://github.com/kevin3080/Advice-app',
  },
  {
    image: `${Landing}`,
    title: 'Landing Page',
    description:
      'This landing page is built with HTML and SCSS with this mini project I put SCSS into practice.',
    technology: ['HTML', 'SCSS'],
    UriDemo: 'https://kevin3080.github.io/landing-page/',
    UriRepo: 'https://github.com/kevin3080/landing-page',
  },
  // {
  //    id: 7,
  //    image: `${ ComingSoon }`,
  //    title: 'Api of Tips',
  //    description: 'In this application I will create an api that will contain more than 200 different tips in English and Spanish.',
  //    technology: ['PHP', 'Laravel'],
  //    UriDemo: '',
  //    UriRepo: '',
  // },
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

export const projectsEn: ListProjects[] = arrProjects.map((project, index) => ({
  ...project,
  id: index + 1,
}));
