import courses from '../data/courses';
import { BurguerButtonTwo } from './BurguerButtonTwo';
import { useState } from 'react';

export const Education = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const handlerClick = () => {
      setMenuOpen(!menuOpen);
   };
   return (
      <section
         id="about"
         className="container mx-auto  w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%] mt-5"
      >
         <div className="flex items-center flex-col ">
            <div
               className={`btn-portfolio ${
                  menuOpen ? 'active' : ''
               } border lg:hidden overflow-hidden flex justify-center rounded-md  mt-4 w-full`}
            >
               <button
                  id="btnProjects"
                  onClick={handlerClick}
                  className={` flex items-center justify-between  w-full pl-4`}
               >
                  <h3 className="text-2xl">Education:</h3>
                  <BurguerButtonTwo
                     menuOpen={menuOpen}
                     handlerClick={handlerClick}
                  />
               </button>
            </div>
            {menuOpen && (
               <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-1 lg:hidden">
                  {courses.map((course, index) => (
                     <section key={index} className="m-3">
                        <h3>{course.title}</h3>
                        <ul>
                           <li className="text-sm italic font-light">
                              {course.provider}
                           </li>
                           <li className="text-sm italic font-light">
                              {course.date}
                           </li>
                        </ul>
                     </section>
                  ))}
               </section>
            )}
            <div className="hidden lg:block">
               <h3 className="text-2xl ">Education:</h3>
               <section className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 gap-1 ">
                  <section className="m-3">
                     <h3 className="">
                        React: De cero a experto ( Hooks y MERN )
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           2022 - Present
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        React Native: Aplicaciones nativas para iOS y Android
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           2022 - Present
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        Next.js: El framework de React para producción
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           2022 - Present
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        Nest Desarrollo backend escalable con Node
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           2022 - Present
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        Java University - Zero to Expert - More Complete +106
                        hrs.
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           2022 - Present
                        </li>
                     </ul>
                  </section>
               </section>
            </div>
         </div>
      </section>
   );
};
