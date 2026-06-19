Academia React
Descripción

Academia React es una aplicación web desarrollada con React y Vite 
que permite visualizar cursos disponibles e inscribirse a ellos de manera sencilla. 
La aplicación utiliza React Router para la navegación y Zustand para la gestión global del estado.

Tecnologías utilizadas
React
Vite
React Router DOM
Zustand
JavaScript
CSS
Instalación
Clonar el repositorio:
git clone https://github.com/matiasalbanogonzalez-cell/academiareact.git
Ingresar al proyecto:
cd academiareact
Instalar las dependencias:
npm install
Ejecutar la aplicación:
npm run dev
Abrir el navegador en:
http://localhost:5173
Estructura del proyecto
src/
├── components/
│   ├── NavBar.jsx
│   └── CursoCard.jsx
├── pages/
│   ├── Inicio.jsx
│   ├── Cursos.jsx
│   └── MisInscripciones.jsx
├── store/
│   └── useInscripcionesStore.js
├── App.jsx
└── main.jsx
Funcionalidades
Visualización de cursos.
Filtrado por nombre y categoría.
Inscripción y eliminación de cursos.
Resumen de inscripciones.
Cálculo automático del total a pagar.
Navegación mediante React Router.
Gestión global del estado con Zustand.
Autor

Matías Albano González
