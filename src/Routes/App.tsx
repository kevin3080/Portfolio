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
   }, 6000); // Cierra la modal después de 5 segundos

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
      
            <h2 className='text-2xl font-bold'>Bienvenido a mi sitio web</h2>
            <p>¡Gracias por visitar! Este sitio aun sigue en <span className='font-bold'>construccion...</span></p>
            <h3 className='text-xl font-bold'>Próximos Pasos:</h3>
            <ul className='list-disc pl-5'>
               <li>Mejorar la sección de proyectos agregando un modal para dar mas detalles de los proyectos.</li>
               <li>Trabajar en un diseño atractivo para mostrar las imagenes de mis proyectos.</li>
               <li>Agregar Proyectos realizados.</li>
               <li>Agregar tema ligth.</li>
               <li>completar las traducciones.</li>
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
