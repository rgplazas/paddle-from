import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const ReservasList = ({ reservas }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center text-primary mb-4">Calendario de Reservas</h2>
          <div className="card shadow-lg">
            <div className="card-body" style={{ height: 'calc(100vh - 250px)', position: 'relative' }}>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                buttonText={{
                  today: 'Hoy',
                  month: 'Mes',
                  week: 'Semana',
                  day: 'Día',
                }}
                events={reservas} // Usamos las reservas pasadas como prop
                locale="es"
                eventClick={(info) => alert(`Reserva: ${info.event.title}`)}
                height="100%"  // Esto asegura que el calendario se ajuste al contenedor
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReservasList;
