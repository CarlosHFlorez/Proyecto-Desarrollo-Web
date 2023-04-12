//Al cargar la página About le quitamos la clase hidden a los ul

const textEffect = document.querySelector(`.Texto-ul.shown.hidden`);

textEffect.addEventListener(`mouseover`, () => {
  textEffect.classList.remove(`hidden`);
});
textEffect.addEventListener(`mouseout`, () => {
  textEffect.classList.add(`hidden`);
});
