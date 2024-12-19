# Sistema de Reservas de Canchas de Paddle (Frontend con React)

Este proyecto es un frontend desarrollado en React para gestionar un sistema de reservas de canchas de paddle. El sistema permite visualizar las canchas disponibles, realizar reservas y gestionar las reservas existentes. Este frontend se conecta a un backend desarrollado en **FastAPI**.

## **Requisitos previos**

Antes de iniciar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

También asegúrate de que el backend de FastAPI esté ejecutándose en tu máquina o servidor.

## **Instalación**

Sigue estos pasos para configurar y ejecutar el proyecto:

### 1. Clona el repositorio
```bash
git clone <URL-del-repositorio>
cd reservas-paddle
```

### 2. Instala las dependencias
```bash
npm install
```
Esto instalará las bibliotecas necesarias, incluyendo **Axios**, **React Router DOM**, y (opcionalmente) **Bootstrap**.

### 3. Configura la URL base de Axios
En el archivo `src/api.js`, asegúrate de que la URL base apunte al backend de FastAPI:
```javascript
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Cambia esto si el backend está en otra dirección
});
```

### 4. Inicia la aplicación
```bash
npm start
```
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en `http://localhost:3000`.

## **Características del proyecto**

### 1. **Navbar**
Proporciona navegación entre las páginas principales: **Inicio**, **Canchas**, y **Reservas**.

### 2. **Lista de Canchas**
Obtiene y muestra las canchas disponibles desde el backend utilizando una solicitud GET con Axios.

### 3. **Formulario de Reservas**
Permite crear una nueva reserva enviando los datos necesarios al backend mediante una solicitud POST.

### 4. **Lista de Reservas**
Muestra todas las reservas existentes con información detallada.

## **Estructura del proyecto**
El proyecto sigue una estructura modular, organizando los componentes y páginas de manera que el código sea reutilizable y fácil de mantener:

```
reservas-paddle/
  ├── src/
  │   ├── components/
  │   │   ├── Navbar.js         # Barra de navegación
  │   │   ├── CanchasList.js    # Lista de canchas disponibles
  │   │   ├── ReservaForm.js    # Formulario para crear reservas
  │   │   ├── ReservasList.js   # Lista de reservas existentes
  │   └── pages/
  │       ├── HomePage.js       # Página de inicio
  │       ├── CanchasPage.js    # Página para visualizar canchas
  │       ├── ReservasPage.js   # Página para gestionar reservas
  │   ├── App.js                # Configuración principal de rutas
  │   ├── api.js                # Configuración de Axios
```

## **Cómo funciona el sistema**

### **1. Navbar**
- Proporciona un sistema de navegación entre las diferentes secciones.
- Mejora la experiencia del usuario al permitir el acceso rápido a las funcionalidades principales.

### **2. Lista de Canchas**
- Realiza una solicitud `GET` a `/canchas/` del backend para obtener las canchas disponibles.
- Muestra las canchas en una lista con información relevante como nombre y tipo (techada o no).

### **3. Formulario de Reservas**
- Permite al usuario ingresar:
  - ID de la cancha.
  - Fecha y hora de la reserva.
  - Duración en horas.
  - Nombre y teléfono de contacto.
- Envía una solicitud `POST` al endpoint `/reservas/` para crear la reserva.
- Valida los datos ingresados antes del envío para evitar errores comunes.

### **4. Lista de Reservas**
- Realiza una solicitud `GET` al endpoint `/reservas/`.
- Muestra las reservas existentes con información como nombre del contacto, fecha, y duración.

## **Buenas prácticas implementadas**

### **1. Modularidad**
El proyecto está dividido en componentes y páginas para mejorar la mantenibilidad y legibilidad del código.

### **2. Configuración de Axios**
Se centralizó la configuración de Axios en `src/api.js` para facilitar cambios en la URL base y evitar repetición de código.

### **3. Enfoque en la experiencia del usuario (UX)**
- Se utiliza una barra de navegación intuitiva.
- Los formularios incluyen validaciones básicas para evitar errores de usuario.

### **4. Mejores prácticas de React**
- Uso de **Hooks** (`useState` y `useEffect`) para gestionar el estado y efectos secundarios.
- Uso de **React Router DOM** para manejar la navegación.
- Evita el uso excesivo de componentes de clase.

## **Personalización y mejora**
- **Estilo:** Se puede personalizar la apariencia utilizando frameworks como Tailwind CSS o Material-UI.
- **Autenticación:** Se puede integrar un sistema de autenticación para gestionar usuarios y accesos.
- **Validaciones:** Utilizar librerías como Formik o Yup para validaciones avanzadas de formularios.

## **Problemas comunes y soluciones**

1. **Error de CORS al conectarse al backend:**
   - Asegúrate de que el backend permite solicitudes desde el origen del frontend. Puedes configurar CORS en FastAPI.

2. **El servidor no se inicia:**
   - Asegúrate de que Node.js y npm están correctamente instalados.
   - Verifica que las dependencias se instalaron correctamente con `npm install`.

3. **Datos no se muestran correctamente:**
   - Verifica la configuración de la URL base en `src/api.js`.
   - Asegúrate de que el backend está corriendo y accesible.

## **Licencia**
Este proyecto está bajo la [MIT License](LICENSE).

---

¡Gracias por usar el Sistema de Reservas de Canchas de Paddle! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contribuir al proyecto.
