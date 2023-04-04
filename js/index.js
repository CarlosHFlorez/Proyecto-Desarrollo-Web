`use strict`;

const galeriaCont = document.querySelector(`.Galeria-container`);
const arrowNext = document.querySelector(`.next`);
const arrowPrev = document.querySelector(`.prev`);
const galeriaImg = document.querySelectorAll(`.Galeria-img`);
const galeriaBtn = document.querySelectorAll(`.Galeria-btn`);

let contador = 0;

galeriaBtn[contador].classList.add(`isActive`);
console.log(contador);

arrowNext.addEventListener(`click`, () => {
  contador++;
  let operacion = contador * -(100 / 6);
  galeriaCont.style.transform = `translateX(${operacion}%)`;
  console.log(contador);
  if (contador >= 6) {
    contador = 0;
    galeriaCont.style.transform = `translateX(${operacion + 100}%)`;
    console.log(contador);
  }
  galeriaImg.forEach((eachImg, i) => {
    galeriaBtn[i].classList.remove(`isActive`);
  });
  galeriaBtn[contador].classList.add(`isActive`);
});

arrowPrev.addEventListener(`click`, () => {
  contador--;
  let operacion = contador * -(100 / 6);
  galeriaCont.style.transform = `translateX(${operacion}%)`;
  console.log(contador);
  if (contador <= -1) {
    contador = 5;
    galeriaCont.style.transform = `translateX(${operacion - 100}%)`;
    console.log(contador);
  }
  galeriaImg.forEach((eachImg, i) => {
    galeriaBtn[i].classList.remove(`isActive`);
  });
  galeriaBtn[contador].classList.add(`isActive`);
});

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
const fragmento = document.createDocumentFragment();
const firstImg = document.createElement(`img`);

firstImg.setAttribute(`src`, `assets/img/posada-portrait.jpg`);
firstImg.setAttribute(`alt`, `Posada2`);
firstImg.classList.add(`Galeria-img`);

fragmento.appendChild(firstImg);

let elementImg = document.getElementsByClassName(`Galeria-container`);
elementImg.appendChild(fragmento);
