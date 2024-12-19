import React, { useState, useEffect } from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReservaForm = ({ actualizarReservas, setActiveTab}) => {
  const [form, setForm] = useState({
    dia: '',
    duracion: 0,
    contacto_nombre: '',
    contacto_telefono: '',
    cancha_id: 0,
  });

  const [canchas, setCanchas] = useState([]); // Estado para las canchas disponibles

  // Obtener las canchas al montar el componente
  useEffect(() => {
    api.get('/canchas/')
      .then((response) => {
        setCanchas(response.data); // Guardar las canchas en el estado
      })
      .catch((error) => {
        console.error("Error al obtener las canchas", error);
      });
  }, []); // Solo se ejecuta una vez al cargar el componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedForm = {
      ...form,
      dia: `${form.dia}:00`, // Formatear el campo 'dia' para incluir segundos
    };

    api.post('/reservas/', formattedForm)
      .then(() => {
        alert('Reserva creada con éxito');
        actualizarReservas(); // Actualizar las reservas después de crear una nueva
        setActiveTab('list'); // Cambiar a la pestaña de "Lista de Reservas" al crear la reserva
      })
      .catch((error) => {
        console.error(error);
        if (error.response?.data?.detail) {
          alert(`Error al crear reserva: ${error.response.data.detail}`);
        } else {
          alert('Error desconocido al crear reserva');
        }
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">Crear Reserva</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Cancha ID */}
                <div className="mb-3">
                  <label htmlFor="cancha_id" className="form-label">Seleccione la Cancha</label>
                  <select
                    id="cancha_id"
                    name="cancha_id"
                    value={form.cancha_id}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value={0}>Seleccione una cancha</option>
                    {canchas.map((cancha) => (
                      <option key={cancha.id} value={cancha.id}>
                        {cancha.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Día */}
                <div className="mb-3">
                  <label htmlFor="dia" className="form-label">Día y Hora</label>
                  <input
                    type="datetime-local"
                    id="dia"
                    name="dia"
                    value={form.dia}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Duración */}
                <div className="mb-3">
                  <label htmlFor="duracion" className="form-label">Duración (en horas)</label>
                  <input
                    type="number"
                    id="duracion"
                    name="duracion"
                    value={form.duracion}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Nombre del Contacto */}
                <div className="mb-3">
                  <label htmlFor="contacto_nombre" className="form-label">Nombre del Contacto</label>
                  <input
                    type="text"
                    id="contacto_nombre"
                    name="contacto_nombre"
                    value={form.contacto_nombre}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Teléfono del Contacto */}
                <div className="mb-3">
                  <label htmlFor="contacto_telefono" className="form-label">Teléfono del Contacto</label>
                  <input
                    type="text"
                    id="contacto_telefono"
                    name="contacto_telefono"
                    value={form.contacto_telefono}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Botón de Envío */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Crear Reserva
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaForm;
