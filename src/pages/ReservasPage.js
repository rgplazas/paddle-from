import React, { useState, useEffect } from 'react';
import ReservaForm from '../components/ReservaForm';
import ReservasList from '../components/ReservasList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener el estilo de Bootstrap cargado
import api from '../api';

const ReservasPage = () => {
  const [activeTab, setActiveTab] = useState('form'); // Estado para controlar el tab activo
  const [reservas, setReservas] = useState([]); // Estado para las reservas

  // Función para actualizar las reservas
  const actualizarReservas = () => {
    api.get('/reservas/')
      .then(response => {
        const formattedReservas = response.data.map(reserva => ({
          id: reserva.id,
          title: `${reserva.contacto_nombre} (${reserva.duracion} hrs)\n${reserva.cancha.nombre}`,
          start: reserva.dia,
          end: new Date(new Date(reserva.dia).getTime() + reserva.duracion * 60 * 60 * 1000), // Calcular fin
        }));
        setReservas(formattedReservas);
        console.log('Reservas actualizadas:', formattedReservas); // Verifica las reservas
      })
      .catch(error => console.error('Error al obtener reservas:', error));
  };

  // Se actualiza la lista de reservas al cargar la página
  useEffect(() => {
    actualizarReservas();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Sistema de Reservas</h1>

      {/* Contenedor de los botones */}
      <div className="btn-group" role="group" aria-label="Tabs">
        <button
          className={`btn btn-primary ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          Lista de Reservas
        </button>
        <button
          className={`btn btn-primary ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Realizar Reserva
        </button>
      </div>

      {/* Contenido de las tabs */}
      <div className="tab-content mt-3">
        {/* Formulario de reserva */}
        <div
          className={`tab-pane fade ${activeTab === 'form' ? 'show active' : ''}`}
          id="form"
          role="tabpanel"
        >
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h4 className="card-title">Realiza una nueva reserva</h4>
              <ReservaForm actualizarReservas={actualizarReservas} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>

        {/* Lista de reservas */}
        <div
          className={`tab-pane fade ${activeTab === 'list' ? 'show active' : ''}`}
          id="list"
          role="tabpanel"
        >
          <div className="card shadow-lg">
            <div className="card-body">
              <h4 className="card-title">Lista de Reservas</h4>
              <ReservasList reservas={reservas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasPage;
