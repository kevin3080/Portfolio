import { useState } from 'react';
import { ListProjects } from '../Interfaces';
import Translation from '../translate/Translation';

interface ProjectCardProps {
   project: ListProjects;
   theme: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
   const { title, description, technology, image, UriDemo, UriRepo } = project;
   const [showFullDescription, setShowFullDescription] = useState(false)
   const [showFullTechnology, setShowFullTechnology] = useState(false);

   const truncatedDescription = description.length > 170 ? `${description.slice(0, 170)}...` : description;
   const truncatedTechnology = technology.join(', ').length > 45 ? technology.join(', ').slice(0, 44) + '...' : technology.join(', ');

   const handlerClickRepo = () => {
      if (UriRepo !== '') {
         window.open(UriRepo, '_blank');
         return;
      }
      return;
   };
   const handlerClickDemo = () => {
      if (UriDemo !== '') {
         window.open(UriDemo, '_blank');
         return;
      }
      return;
   };

   const handleToggleDescription = () => {
      setShowFullDescription(!showFullDescription);
   };

   


   return (
      <div className="p-1 m-4 max-w-sm">
         <div className="w-[300px] h-[236px] overflow-hidden rounded-t-2xl">

            {/* <img src={image} alt={title} className="w-full h-full object-cover" /> */}
            <img src={image} alt={title} className="w-full h-full" />
         </div>
         <div className={`min-h-min w-[300px] text-white bg-[#071739] rounded-b-2xl p-6 pb-8`}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4">
               {showFullDescription ? description : truncatedDescription}
               {description.length > 170 && !showFullDescription && (
                  <span 
                     className="text-blue-500 cursor-pointer" 
                     onClick={handleToggleDescription}
                  >
                     {' '}(<Translation translationKey="Projects.descViewMore"/>)
                  </span>
               )}
               {showFullDescription && (
                  <span 
                     className="text-blue-500 cursor-pointer" 
                     onClick={handleToggleDescription}
                  >
                     {' '}(<Translation translationKey="Projects.descViewLess"/>)
                  </span>
               )}
            </p>
            <div className="mb-4">
               <h3 className="font-semibold mb-1"><Translation translationKey="Projects.techUse" /></h3>
               <ul className="flex flex-wrap">
               {showFullTechnology ? (
                     technology.map((tech, index) => (
                        <li className="pr-2 text-gray-400" key={index}>
                           {`- ${tech}`}
                        </li>
                     ))
                  ) : (
                     <li className="pr-2 text-gray-400">
                        {truncatedTechnology}
                        {technology.join(', ').length > 45 && (
                           <span 
                              className="text-blue-500 cursor-pointer" 
                              onClick={() => setShowFullTechnology(true)}
                           >
                              {' '}(ver más)
                           </span>
                        )}
                     </li>
                  )}
               </ul>
            </div>
            <div className="flex gap-2">
               <button 
                  className="btn-resume text-corp border-corp border rounded-xl flex justify-center items-center gap-1 pr-4 pl-4 pt-[0.3rem] pb-[0.3rem] text-sm font-light"
                  onClick={handlerClickRepo}
               >
                  <p>Code</p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     className="w-6 h-6"
                     viewBox="0 0 30 30"
                     fill="currentColor"
                  >
                     <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
               </button>
               <button 
                  className="btn-portfolio  text-white  bg-corp border-corp border rounded-xl flex justify-center items-center gap-2 pr-4 pl-4 pt-[0.3rem] pb-[0.3rem] text-sm  font-light"
                  onClick={handlerClickDemo}
               >
                  <p>Demo</p>
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
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
