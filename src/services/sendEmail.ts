import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

/* interface sendEmailProps {
    setFormData: React.Dispatch<React.SetStateAction<{
        user_name: string;
        user_email: string;
        message: string;
    }>>;
} */
export const sendEmail = () => {
    const sendEmail = (event: React.FormEvent) => {
        event.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const apiKey = import.meta.env.VITE_API_KEY;
    
        if (!serviceId || !templateId || !apiKey) {
           console.error('One or more environment variables are missing.');
           return;
        }
        /*  setLoading(true); // Activar el indicador de carga
         */
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
/*               setFormData({
                 user_name: '',
                 user_email: '',
                 message: '',
              }); */
           })
           .catch(error => {
              console.log(error);
              toast.error('Error sending message. Please try again. 😨🥺', {
                 position: toast.POSITION.BOTTOM_RIGHT,
              });
           });
        /*       .finally(() => {
              setLoading(false); // Desactivar el indicador de carga después de la promesa
           }); */
     };
  return { sendEmail };
}
