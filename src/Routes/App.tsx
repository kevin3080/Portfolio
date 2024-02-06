import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Education } from '../Components/Education';
import { Inicio } from '../Components/Inicio';
import { Navbar } from '../Components/Navbar';
import { Projects } from '../Components/Projects';
import { Footer } from '../Components/Footer';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const App = () => {

   const [isModalOpen, setModalOpen] = useState(true);


    // Cierra la modal después de un tiempo o en respuesta a alguna acción
  useEffect(() => {
   const timeout = setTimeout(() => {
     setModalOpen(false);
   }, 8000); // Cierra la modal después de 5 segundos

   return () => clearTimeout(timeout);
 }, []);

   return (
      <>
      <div className='flex justify-center'>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Mensaje de Bienvenida"
        style={{
         overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
         },
         content: {
           borderRadius: '40px',
           border: 0,
           minHeight: '50%',
           margin: 'auto',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           background: '#071739',
           justifyContent: 'center',
           width: '70%',
      
         },
       }}
      >
      
            <h2 className='text-2xl font-bold'>Welcome to my website</h2>
            <p>Thanks for visiting! This site is still under <span className='font-bold'>construccion...</span></p>
            <h3 className='text-xl font-bold mt-5'>Next Steps:</h3>
            <ul className='list-disc pl-5 pt-5'>
               <li>Improve the projects section by adding a modal to give more details of the projects.</li>
               <li>Work on an attractive design to show the images of my projects.</li>
               <li>Add completed projects.</li>
               <li>Add light theme.</li>
            </ul>
            <div className='flex justify-center mt-5'>
               <button className='btn-portfolio flex items-center ml-4 bg-corp border border-corp rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1' onClick={() => setModalOpen(false)}>Cerrar</button>
            </div>

      </Modal>
      </div>
         <Navbar />
         <Inicio />
         <About />
         <Education />
         <Projects />
         <Contact />
         <Footer />
      </>
   );
};

export default App;
