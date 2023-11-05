export const Education = () => {
   return (
      <section
         id="about"
         className="container mx-auto  w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%] mt-5"
      >
         <div className="flex items-center flex-col">
            <div>
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
