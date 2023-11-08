import { useLanguage } from '../Context/LanguageContext';
import autor from '../assets/imagen-mia.jpeg';
import Translation from '../translate/Translation';
import Typewriter from 'typewriter-effect';
import es from '../translate/es.json';
import en from '../translate/en.json';

export const Inicio = () => {
   const { language } = useLanguage();

   return (
      <section
         id="hero"
         className="container mb-10 mx-auto flex justify-center h-screen items-center w-[90%] md:w-[80%] flex-col-reverse sm:w-[90%] lg:flex-row lg:w-[80%] gap-x-2"
      >
         <section className="w-[55%] mt-8 lg:mt-0 flex flex-col items-center lg:items-start  ">
            <div className=" sm:w-auto text-center lg:text-left">
               <p className="text-2xl lg:text-3xl whitespace-nowrap">
                  <Translation translationKey="inicio.hi" />
               </p>
               {language === 'en' ? (
                  <h1 className="text-4xl lg:text-5xl text-corp whitespace-break-spaces h-[2.3em] lg:h-[auto]">
                     <Typewriter
                        options={{
                           strings: [
                              en['inicio.prof'],
                              en['inicio.prof1'],
                              en['inicio.prof2'],
                           ],
                           autoStart: true,
                           loop: true,
                           delay: 32,
                           deleteSpeed: 32,
                        }}
                     />
                  </h1>
               ) : (
                  <h1 className="text-4xl lg:text-5xl text-corp whitespace-break-spaces h-[2.3em] lg:h-[auto]">
                     <Typewriter
                        options={{
                           strings: [
                              es['inicio.prof'],
                              es['inicio.prof1'],
                              es['inicio.prof2'],
                           ],
                           autoStart: true,
                           loop: true,
                           delay: 32,
                           deleteSpeed: 32,
                        }}
                     />
                  </h1>
               )}

               <p className="text-2xl lg:text-3xl whitespace-break-spaces">
                  <Translation translationKey="inicio.p" />
               </p>
            </div>

            <div className="flex mt-8">
               <button className="btn-resume w-30 flex items-center text-corp border border-corp border-solid rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1">
                  <p className="">
                     <Translation translationKey="inicio.resume" />
                  </p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                     />
                  </svg>
               </button>
               <button className="btn-portfolio w-30 flex items-center ml-4 bg-corp border border-corp rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1 ">
                  <p className="">
                     <Translation translationKey="inicio.portfolio" />
                  </p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                     />
                  </svg>
               </button>
            </div>
         </section>
         <div className="w-60 h-60 md:w-80 md:h-80 lg:w-95 lg:h-95 rounded-3xl overflow-hidden mt-[3rem] lg:mt-0">
            <img src={autor} alt="" className="object-cover h-full w-full" />
         </div>
      </section>
   );
};
