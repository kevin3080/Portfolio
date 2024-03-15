import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/index.css';
import { LanguageProvider } from './Context/LanguageContext';
import { App } from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <LanguageProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<App />} />
            </Routes>
         </BrowserRouter>
      </LanguageProvider>
   </React.StrictMode>
);
