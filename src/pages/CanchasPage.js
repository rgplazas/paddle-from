import React, { useState, useEffect } from 'react';
import CanchasList from '../components/CanchasList';
import CanchaForm from '../components/CanchaForm';
import api from '../api'; // Asegúrate de que api esté configurado correctamente
import 'bootstrap/dist/css/bootstrap.min.css';

const CanchasPage = () => {
  const [activeTab, setActiveTab] = useState('form'); // Estado para controlar el tab activo
  const [canchas, setCanchas] = useState([]); // Estado para la lista de canchas

  // Cargar las canchas al montar el componente
  useEffect(() => {
    // Obtener las canchas al montar el componente
    api.get('/canchas/')
      .then((response) => {
        setCanchas(response.data); // Actualiza el estado con la lista de canchas
      })
      .catch((error) => {
        console.error("Error al obtener las canchas", error);
      });
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Función para agregar una cancha a la lista local
  const addCancha = (cancha) => {
    setCanchas((prevCanchas) => [...prevCanchas, cancha]); // Actualiza el estado de canchas
    setActiveTab('list'); // Cambiar a la pestaña de "Lista de Canchas"
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Gestión de Canchas</h1>

      {/* Contenedor de los botones */}
      <div className="btn-group" role="group" aria-label="Tabs">
        <button
          className={`btn btn-primary ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          Lista de Canchas
        </button>
        <button
          className={`btn btn-primary ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Crear Cancha
        </button>
      </div>

      {/* Contenido de las tabs */}
      <div className="tab-content mt-3">
        {/* Formulario para crear cancha */}
        <div
          className={`tab-pane fade ${activeTab === 'form' ? 'show active' : ''}`}
          id="form"
          role="tabpanel"
        >
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h4 className="card-title">Crear una nueva cancha</h4>
              <CanchaForm addCancha={addCancha} /> {/* Pasar la función addCancha */}
            </div>
          </div>
        </div>

        {/* Lista de canchas */}
        <div
          className={`tab-pane fade ${activeTab === 'list' ? 'show active' : ''}`}
          id="list"
          role="tabpanel"
        >
          <div className="card shadow-lg">
            <div className="card-body">
              <h4 className="card-title">Lista de Canchas</h4>
              <CanchasList canchas={canchas} /> {/* Pasar las canchas al componente */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanchasPage;
