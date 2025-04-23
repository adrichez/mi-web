// Esperamos a que todo el contenido de la página se haya cargado
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el botón por su ID
    const boton = document.getElementById('cambiarColorBtn');
  
    // Añadimos un evento de clic al botón
    boton.addEventListener('click', function () {
      // Cambiamos el color de fondo de la página al hacer clic
      document.body.style.backgroundColor = 'lightgreen';
    });
  });
  