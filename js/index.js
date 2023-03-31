//AL HACER MOUSEOVER EN DEMO-IMG SE REPRODUCE DEMO-VIDEO Y LE AÑADIMOS LA CLASE ISACTIVE. AL HACER MOUSEOUT EN DEMO-IMG SE PAUSA EL VIDEO Y LE QUITAMOS LA CLASE ISACTIVE A DEMO-VIDEO
const demoVideo = document.querySelector(`.Demo-video`);
const demoImg = document.querySelector(`.Demo-img`);
const iframeVideo = document.querySelector(`.Hero-iframe`)
demoImg.addEventListener(`mouseover`, () => {
  demoVideo.play();
  demoVideo.classList.add(`isActive`);
});
demoImg.addEventListener(`mouseout`, () => {
  demoVideo.pause();
  demoVideo.classList.remove(`isActive`);
});
iframeVideo.autoplay()
