import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CanchasList = ({ canchas }) => {
  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">Canchas Disponibles</h2>
      {canchas.length === 0 ? (
        <div className="text-center text-muted">
          <p>Cargando canchas disponibles...</p>
        </div>
      ) : (
        <div className="row">
          {canchas.map(cancha => (
            <div key={cancha.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    {cancha.nombre}
                  </h5>
                  <p className="card-text">
                    <strong>Estado:</strong> {cancha.techada ? "Techada" : "No techada"}
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CanchasList;
