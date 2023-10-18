import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import './Styles/index.css';
import { LangageProvider } from './Context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangageProvider>
      <RouterProvider router={router} />
    </LangageProvider>
  </React.StrictMode>
);
