import courses from '../data/courses';
import Translation from '../translate/Translation';
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
               <h3 className="text-2xl "><Translation translationKey="about.education" /></h3>
               <section className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 gap-1 ">
                  <section className="m-3">
                     <h3 className="">
                        <Translation translationKey="education.courseReact" />
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           <Translation style='font-light' translationKey="education.courseReact.date" />
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        <Translation translationKey="education.courseReactNative" />
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic ">
                           <Translation style='font-light' translationKey="education.courseReactNative.date" />
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        <Translation translationKey="education.courseNext" />
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic">
                           <Translation style='font-light' translationKey="education.courseNext.date" />
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        <Translation translationKey="education.courseNest" />
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic">
                           <Translation style='font-light' translationKey="education.courseNest.date" />
                        </li>
                     </ul>
                  </section>
                  <section className="m-2">
                     <h3 className="">
                        <Translation translationKey="education.courseJava"/>
                     </h3>
                     <ul>
                        <li className="text-sm italic font-light">Udemy</li>
                        <li className="text-sm italic font-light">
                           <Translation style='font-light' translationKey="education.courseJava.date" />
                        </li>
                     </ul>
                  </section>
               </section>
            </div>
         </div>
      </section>
   );
};
