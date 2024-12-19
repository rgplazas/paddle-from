import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal App
import './index.css'; // Importa los estilos globales (opcional)

// Crea un root para renderizar la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente principal <App />
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
