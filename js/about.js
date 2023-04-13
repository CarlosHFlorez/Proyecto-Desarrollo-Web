//Al cargar la página About le quitamos la clase hidden a los ul

const textEffect = document.querySelector(`.Texto-ul`);

textEffect.addEventListener(`click`, () => {
  textEffect.classList.toggle(`isHidden`);
});
