import React from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de importar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h1 className="display-4 text-primary mb-4">
              Bienvenido al sistema de reservas
            </h1>
            <p className="lead text-secondary">
              Administra tus reservas de manera fácil y rápida. Comienza seleccionando una opción en el menú.
            </p>
            <Link className="btn btn-primary btn-lg mt-3" to="/reservas">
              Explorar Reservas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
