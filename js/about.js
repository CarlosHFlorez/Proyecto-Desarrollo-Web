`use strict`;

//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL

//Seleccionamos los objetos implicados
const headerBtn = document.querySelector(`.Header-btn`);
const headerResp = document.querySelector(`.Header-responsive`);

//Al hacer click en Header-btn hacemos toggle de la clase isActive para la etiqueta Header-responsive
headerBtn.addEventListener(`click`, () => {
  headerResp.classList.toggle(`isActive`);
});

//Al cargar la página About le quitamos la clase hidden a los ul

const textEffect = document.querySelector(`.Texto-ul`);

textEffect.addEventListener(`click`, () => {
  textEffect.classList.toggle(`isHidden`);
});
