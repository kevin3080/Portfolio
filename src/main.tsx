import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './Styles/index.css';
import { LangageProvider } from './Context/LanguageContext';
import { App } from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <LangageProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<App />} />
            </Routes>
         </BrowserRouter>
      </LangageProvider>
   </React.StrictMode>
);
