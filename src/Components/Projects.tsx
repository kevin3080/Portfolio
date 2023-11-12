import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';
import { useState } from 'react';
import { BurguerButtonTwo } from './BurguerButtonTwo';

export const Projects: React.FC = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState('Todos'); // Nuevo estado para almacenar la categoría seleccionada

   const handlerClick = () => {
      setMenuOpen(!menuOpen);
   };

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
      setMenuOpen(false); // Cerrar el menú cuando se selecciona una categoría
   };
   const categories = ['Todos', 'Web', 'Movil', 'Backend'];
   const filteredProjects = projectsData.filter(project => {
      if (selectedCategory === 'Todos') {
         return true; // Mostrar todos los proyectos si la categoría es "Todos"
      } else if (selectedCategory === 'Web') {
         // Filtrar proyectos relacionados con tecnologías web
         return project.technology.some(
            tech =>
               tech === 'React' ||
               tech === 'Angular' ||
               tech === 'Vite' ||
               tech === 'Next.js' // Agrega otras tecnologías web según sea necesario
         );
      } else if (selectedCategory === 'Movil') {
         // Filtrar proyectos relacionados con tecnologías móviles
         return project.technology.some(
            tech =>
               tech === 'React Native' ||
               tech === 'Flutter' ||
               tech === 'Kotlin' // Agrega otras tecnologías móviles según sea necesario
         );
      } else if (selectedCategory === 'Backend') {
         // Filtrar proyectos relacionados con tecnologías móviles
         return project.technology.some(
            tech =>
               tech === 'Java' ||
               tech === 'Spring Boot' ||
               tech === '.net' ||
               tech === 'C#' ||
               tech === 'Express' ||
               tech === 'NestJS'
         );
      }
      return false; // Por defecto, no mostrar nada si no hay coincidencia con las categorías anteriores
   });
   return (
      <section id="projects" className="mt-5 ">
         <section>
            <h2 className="text-center text-4xl font-bold">
               Projects<strong className="font-bold">.</strong>
            </h2>
            <p className="text-center mt-7 text-xl">
               Anything you can <span className="text-corp">imagine</span>, you
               can <span className="text-corp">program.</span>
            </p>
         </section>

         <div
            className={`btn-portfolio ${
               menuOpen ? 'active' : ''
            } border lg:hidden overflow-hidden flex justify-center rounded-md  mt-4 container mx-auto  w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%]`}
         >
            <button
               id="btnProjects"
               onClick={handlerClick}
               className={` flex items-center justify-between w-full`}
            >
               <div className="invisible pl-14"></div>
               {selectedCategory}
               <BurguerButtonTwo
                  menuOpen={menuOpen}
                  handlerClick={handlerClick}
               />
            </button>
         </div>
         {menuOpen && (
            <section className="container mx-auto w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%] flex flex-col justify-center">
               {categories
                  .filter(category => category !== selectedCategory) // Filtra la categoría seleccionada
                  .map((category, index) => (
                     <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`btn-portfolio pt-1 pb-1  bg-corp hover:bg-transparent ${
                           index === 0 ? 'lg:ml-0' : 'lg:ml-20'
                        } border border-corp`}
                     >
                        {category}
                     </button>
                  ))}
            </section>
         )}

         <section className="hidden lg:flex justify-center flex-col gap-5 lg:gap-0  w-[100%] md:w-[100%]  md:flex-row mt-11">
            {categories
               .filter(category => category)
               .map((category, index) => (
                  <button
                     key={index}
                     onClick={() => handleCategoryClick(category)}
                     className={`btn-portfolio pt-1 pb-1 pl-9 pr-9 rounded-md bg-corp hover:bg-transparent ${
                        index === 0 ? 'lg:ml-0' : 'lg:ml-20'
                     } border border-corp `}
                  >
                     {category}
                  </button>
               ))}
         </section>
         <section className="flex flex-wrap justify-center mt-9 container mx-auto w-[10%] md:w-[80%] sm:w-[90%] lg:w-[80%]">
            {filteredProjects.map(project => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </section>
      </section>
   );
};
