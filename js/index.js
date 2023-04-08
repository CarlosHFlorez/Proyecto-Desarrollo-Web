`use strict`;

//SCRIPT PARA LA GALERÍA DE IMÁGENES DE INDEX.HMTL

//Seleccionamos los objetos implicados
const galeriaCont = document.querySelector(`.Galeria-container-img`);
const arrowNext = document.querySelector(`.next`);
const arrowPrev = document.querySelector(`.prev`);
const galeriaImg = document.querySelectorAll(`.Galeria-img`);
const galeriaBtn = document.querySelectorAll(`.Galeria-btn`);

//Establecemos el contador a 0
let contador = 0;

//Le damos la clase isActive a galeriaBtn en función del número actual del contador
galeriaBtn[contador].classList.add(`isActive`);

//Al hacer click en arrowNext el contador se incrementa en 1, guardamos la operación en la variable, movemos a galaeriaCont en el eje X según el resultado de operacion, aplicamos una transición y si contador es igual o mayor que 6 entonces se restablecen su valor y la posición enel eje X de galeriaCont
arrowNext.addEventListener(`click`, () => {
  contador++;
  let operacion = contador * -(100 / 6);
  galeriaCont.style.transform = `translateX(${operacion}%)`;
  galeriaCont.style.transition = `all 0.5s ease`;
  if (contador >= 6) {
    contador = 0;
    galeriaCont.style.transform = `translateX(${operacion + 100}%)`;
  }

  //Recorremos el array galeriaImg y quitamos la clase isActive a todas las etiquetas galeriaBtn para después, añadir esa clase según la posición del contador
  galeriaImg.forEach((eachImg, i) => {
    galeriaBtn[i].classList.remove(`isActive`);
  });
  galeriaBtn[contador].classList.add(`isActive`);
});

//Al hacer click en arrowPrev el contador disminuye en 1, guardamos la operación en la variable, movemos a galaeriaCont en el eje X según el resultado de operacion, aplicamos una transición y si contador es igual o menor que -1 entonces se restablecen su valor y la posición enel eje X de galeriaCont
arrowPrev.addEventListener(`click`, () => {
  contador--;
  let operacion = contador * -(100 / 6);
  galeriaCont.style.transform = `translateX(${operacion}%)`;
  galeriaCont.style.transition = `all 0.5s ease`;

  if (contador <= -1) {
    contador = 5;
    galeriaCont.style.transform = `translateX(${operacion - 100}%)`;
  }
  //Recorremos el array galeriaImg y quitamos la clase isActive a todas las etiquetas galeriaBtn para después, añadir esa clase según la posición del contador
  galeriaImg.forEach((eachImg, i) => {
    galeriaBtn[i].classList.remove(`isActive`);
  });
  galeriaBtn[contador].classList.add(`isActive`);
});

//Recorremos el array galeriaBtn y si hacemos click la posición del índice se iguala al contador, hacemos la misma operación que hicimos anterioremente y la guardamos en la variable,recorremos nuevamente el array para qutiarle la clase isActive a todas las etiquetas galeriaBtn y se la damos a la del índice actual para finalmente mover en el eje X a galeriaCont el porcentaje del valor de la variavble operación.

galeriaBtn.forEach((eachBtn, i) => {
  galeriaBtn[i].addEventListener(`click`, () => {
    contador = i;
    let operacion = contador * -(100 / 6);
    galeriaBtn.forEach((eachBtn, i) => {
      galeriaBtn[i].classList.remove(`isActive`);
    });
    galeriaBtn[i].classList.add(`isActive`);
    galeriaCont.style.transform = `translateX(${operacion}%)`;
  });
});

//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL

//Seleccionamos los objetos implicados
const headerBtn = document.querySelector(`.Header-btn`);
const headerResp = document.querySelector(`.Header-responsive`);

//Al hacer click en Header-btn hacemos toggle de la clase isActive para la etiqueta Header-responsive
headerBtn.addEventListener(`click`, () => {
  headerResp.classList.toggle(`isActive`);
});
