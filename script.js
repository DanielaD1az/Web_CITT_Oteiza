//Función de título de la página activo-inactivo
function setActivePageTitle() {
  document.title = "CITT Duoc UC Alameda";
}

// Función para establecer el título de página inactivo
function setInactivePageTitle() {
  document.title = "¡Hey, vuelve acá!";
}

// Verificar la visibilidad de la página al cargar
if (document.visibilityState === 'hidden') {
  setInactivePageTitle();
} else {
  setActivePageTitle();
}

// Escuchar los cambios de estado de visibilidad
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    setInactivePageTitle();
  } else {
    setActivePageTitle();
  }
});
// Botón Subir
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0){
      $('.subir').fadeIn(); // Muestra el botón cuando se desplace hacia abajo
    } else {
      $('.subir').fadeOut(); // Oculta el botón cuando se encuentre en la parte superior
    }
  });
  $('.subir').click(function(){
    $('body,html').animate({ scrollTop: 0 }, 1000); // Sube hasta arriba de la página de forma animada
  });
});

//Formulario de Contacto
const formulario = document.getElementById('miFormulario');

// Función para validar el correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para mostrar mensaje de error
function mostrarError(elemento, mensaje) {
  elemento.classList.add('error'); // Agrega la clase "error" al elemento
  const error = document.createElement('p');
  error.textContent = mensaje;
  elemento.parentElement.appendChild(error); // Agrega el mensaje de error debajo del elemento
}

// Función para quitar mensaje de error
function quitarError(elemento) {
  elemento.classList.remove('error'); // Elimina la clase "error" del elemento
  const error = elemento.parentElement.querySelector('p');
  if (error) {
    error.remove(); // Elimina el mensaje de error
  }
}

// Evento submit del formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value;

  // Validaciones
  let valido = true; // Variable para controlar si el formulario está valido

  // Validar nombre (opcional, puedes agregarlo si lo deseas)
  // if (nombre.trim() === '') {
  //   mostrarError(document.getElementById('name'), 'El nombre es obligatorio');
  //   valido = false;
  // }

  // Validar email
  if (!validarEmail(email)) {
    mostrarError(document.getElementById('email'), 'El correo electrónico no es válido');
    valido = false;
  } else {
    quitarError(document.getElementById('email'));
  }

  // Validar asunto (opcional, puedes agregarlo si lo deseas)
  // if (asunto.trim() === '') {
  //   mostrarError(document.getElementById('subject'), 'El asunto es obligatorio');
  //   valido = false;
  // }

  // Validar mensaje
  if (mensaje.trim() === '') {
    mostrarError(document.getElementById('message'), 'El mensaje es obligatorio');
    valido = false;
  } else {
    quitarError(document.getElementById('message'));
  }

  // Si el formulario está valido, se envía
  if (valido) {
    formulario.submit();
  }
});