import React, { useState } from 'react';
import api from '../api';

const CanchaForm = ({ addCancha }) => {
  const [form, setForm] = useState({
    nombre: '',
    techada: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === 'techada' ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/canchas/', form)
      .then((response) => {
        // Llamar a la función addCancha para actualizar la lista de canchas
        addCancha(response.data); 
        alert('Cancha agregada con éxito');
      })
      .catch((error) => {
        console.error('Error al agregar la cancha', error);
        alert('Error al agregar la cancha');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="techada" className="form-check-label">
          ¿Es Techada?
        </label>
        <input
          type="checkbox"
          id="techada"
          name="techada"
          checked={form.techada}
          onChange={handleChange}
          className="form-check-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Crear Cancha
      </button>
    </form>
  );
};

export default CanchaForm;
