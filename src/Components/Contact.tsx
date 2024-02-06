import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Translation from '../translate/Translation';
import { useLanguage } from '../Context/LanguageContext';


interface HandleChange {
   target: { name: string; value: string };
}
export const Contact = () => {
   const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: '',
   });

   const handleChange = (e: HandleChange ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const {language} = useLanguage()
   const placeholderName = language === 'es' ? 'Ingresa tu nombre' : 'Name'
   const placeholderEmail = language === 'es' ? 'Ingresa tu correo' : 'Email'
   const placeholderMessage = language === 'es' ? 'Escribe tu mensaje' : 'Message'



   const sendEmail = (event: React.FormEvent) => {
      event.preventDefault();
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const apiKey = import.meta.env.VITE_API_KEY;

      if (!serviceId || !templateId || !apiKey) {
         console.error('One or more environment variables are missing.');
         return;
      }

      emailjs
         .sendForm(
            serviceId,
            templateId,
            event.target as HTMLFormElement,
            apiKey
         )
         .then(response => {
            console.log(response);
            toast.success('Message sent successfully! 🤩', {
               position: toast.POSITION.BOTTOM_RIGHT,
               autoClose: 1500,
            });
            setFormData({
               user_name: '',
               user_email: '',
               message: '',
            });
         })
         .catch(error => {
            console.log(error);
            toast.error('Error sending message. Please try again. 😨🥺', {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });

   };

   return (
      <section
         id="contact"
         className="h-[100%] bg-[#071739] mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center text-[#EBEBEB]"
      >
         <section className="mt-32 lg:mb-44">
            <h2 className="text-4xl font-bold">
               <Translation translationKey="contact"/><strong className="font-bold">.</strong>
            </h2>
            <p><Translation translationKey="contact.p"/></p>
            <div className="mt-3">
               <div className="flex gap-2 ">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-corp"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                     />
                  </svg>

                  <p>kevinpernia30@gmail.com</p>
               </div>
               <div className="flex gap-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-corp"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                     />
                  </svg>

                  <p>Medellín - Colombia</p>
               </div>
            </div>
            <div className="mt-3 flex gap-1">
               <button>
                  <a
                     href="https://github.com/kevin3080"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-7 h-7 text-corp"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                     >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                     </svg>
                  </a>
               </button>
               <button>
                  <a
                     href="https://www.linkedin.com/in/kevin-pernia-540052144/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                        className="w-7 h-7 text-corp"
                     >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                     </svg>
                  </a>
               </button>
            </div>
         </section>
         <section className="border bg-[#05112A] border-[#05112A] rounded-3xl w-[90%] lg:w-[30%] min-h-min lg:mt-32 mb-44">
            <form
               action=""
               onSubmit={sendEmail}
               className="p-10 flex flex-col gap-2"
            >
               <label htmlFor="user_name"><Translation translationKey="nameForm" /></label>
               <input
                  required
                  minLength={4}
                  type="text"
                  name="user_name"
                  onChange={handleChange}
                  value={formData.user_name}
                  placeholder={placeholderName}
                  className="p-2 rounded-md bg-[#071739] border border-[#0090FF] focus:border-blue-300 focus:outline-none "
               />
               <label htmlFor="user_email" className="mt-4">
                  <Translation translationKey="emailForm" />
               </label>
               <input
                  required
                  type="email"
                  name="user_email"
                  onChange={handleChange}
                  value={formData.user_email}
                  placeholder={placeholderEmail}
                  className="p-2 rounded-md bg-[#071739] border border-[#0090FF] focus:border-blue-300 focus:outline-none"
               />
               <label htmlFor="message" className="mt-4">
                  <Translation translationKey="messageForm" />
               </label>
               <textarea
                  required
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  id=""
                  placeholder={placeholderMessage}
                  className="p-2 rounded-md bg-[#071739] border border-[#0090FF] focus:border-blue-300 focus:outline-none resize-none h-[15rem]"
               ></textarea>
               <button className="btn-portfolio border border-corp bg-corp p-2 rounded-md mt-3 font-medium">
                  <Translation translationKey="btnSubmit" />
               </button>
            </form>
            <ToastContainer />
         </section>
      </section>
   );
};
