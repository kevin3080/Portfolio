import { createBrowserRouter } from 'react-router-dom';
import { App, ErrorPage } from './Routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //    {
    //       path: '/contact/:contactId',
    //       element: <Contact />,
    //    },
    // ],
  },
]);

export default router;
