/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

// Datos de las tarjetas
// Datos de las tarjetas
const data = [
  { image: '/assets/images/person1.webp', name: 'Jordi Valle', title: 'IA y Machine Learning Specialist' },
  { image: 'assets/images/person2.webp', name: 'María López', title: 'Desarrolladora Front-End' },
  { image: 'assets/images/person3.webp', name: 'Carlos Pérez', title: 'Ingeniero de Software' },
  { image: 'assets/images/person4.webp', name: 'Ana García', title: 'Analista de Datos' },
  { image: 'assets/images/person5.webp', name: 'Luis Hernández', title: 'Gestor de Proyectos' },
  { image: 'assets/images/person6.webp', name: 'Sofía Martínez', title: 'Diseñadora UI/UX' },
];

// Contenedor donde se renderizarán las tarjetas
const container = document.getElementById('cards-container');

// Cargar el HTML de la tarjeta
fetch('./card.html')
  .then(response => response.text())
  .then(template => {
    // Generar las tarjetas dinámicamente
    data.forEach(person => {
      // Reemplazar los marcadores de posición en el template
      let cardHTML = template
        .replace('{{image}}', person.image)
        .replace('{{name}}', person.name)
        .replace('{{title}}', person.title);

      // Añadir la tarjeta generada al contenedor
      container.innerHTML += cardHTML;
    });
  })
  .catch(error => {
    console.error('Error cargando la tarjeta:', error);
  });
