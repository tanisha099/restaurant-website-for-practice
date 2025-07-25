import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecipeProvider } from './context/RecipeContext.jsx'; // ✅ named import

createRoot(document.getElementById('root')).render(
  <RecipeProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeProvider>
);
