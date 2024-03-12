import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';
import { useState } from 'react';
import { BurgerButtonTwo } from './BurgerButtonTwo';
import { useLanguage } from '../Context/LanguageContext';
import Translation from '../translate/Translation';

export const Projects: React.FC = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   let categories: string[] = [];
   const { language } = useLanguage();
   language === 'es' ?  categories = ['Todos', 'Web', 'Movil', 'Backend'] :  categories = ['All', 'Web', 'Mobile', 'Backend'];
   const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Nuevo estado para almacenar la categoría seleccionada
   
   const handlerClick = () => {
      setMenuOpen(!menuOpen);
   };

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
      setMenuOpen(false); // Cerrar el menú cuando se selecciona una categoría
   };

   const filteredProjects = projectsData.filter(project => {
      if (selectedCategory === 'Todos' || selectedCategory === 'All') {
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
      } else if (selectedCategory === 'Movil' || selectedCategory === 'Mobile') {
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
               <Translation translationKey="Projects"/><strong className="font-bold">.</strong>
            </h2>
            <p className="text-center mt-7 text-xl">
               <Translation translationKey="Projects.p" /> <Translation style='text-corp' translationKey="Projects.pspan" /><Translation translationKey="Projects.pnext" /> <Translation style='text-corp' translationKey="Projects.pspan2" />
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
               <BurgerButtonTwo
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
