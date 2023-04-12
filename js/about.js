//Al cargar la página About le quitamos la clase hidden a los ul

const textEffect = document.querySelector(`.Texto-ul.isActive`);

textEffect.addEventListener(`mouseover`, () => {
  textEffect.classList.remove(`isActive`);
});
textEffect.addEventListener(`mouseout`, () => {
  textEffect.classList.add(`isActive`);
});
