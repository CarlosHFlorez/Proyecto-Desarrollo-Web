//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL

//Seleccionamos los objetos implicados
const headerBtn = document.querySelector(`.Header-btn`);
const headerResp = document.querySelector(`.Header-responsive`);

//Al hacer click en Header-btn hacemos toggle de la clase isActive para la etiqueta Header-responsive
headerBtn.addEventListener(`click`, () => {
  headerResp.classList.toggle(`isActive`);
});

//SCRIPT PARA EL LIGHTBOX EN PROYECTOS

//Seleccionamos los objetos implicados
const proyectosImg = document.querySelectorAll(`.Proyectos-img`);
const galeriaImg = document.querySelectorAll(`.Galeria-img`);
const lightboxImg = document.querySelector(`.Lightbox-img`);
const lightboxArticle = document.querySelectorAll(`.Lightbox-article`);
const lightbox = document.querySelector(`.Lightbox`);
const lightboxBtn = document.querySelector(`.Lightbox-btn`);
const titlesH2 = document.querySelectorAll(`.Title-h2`);
const lightboxH2 = document.querySelector(`.Lightbox-h2`);
const softwareSpan = document.querySelectorAll(`.Software-span`);
const lightboxSpanProgramas = document.querySelector(`.Lightbox-span-programas`);
const extractoP = document.querySelectorAll(`.Extracto-p`);
const lightboxP = document.querySelector(`.Lightbox-p`);

//Recorremos el array de .Proyectios-section, al hacer click en alguna de las etiquetas .Proyectos-section le añadimos a .Lightbox la clase isActive
proyectosImg.forEach((eachImg, i) => {
  proyectosImg[i].addEventListener(`click`, () => {
    lightbox.classList.add(`isActive`);
    let source = galeriaImg[i].getAttribute(`src`);
    lightboxImg.setAttribute(`src`, source);
    let titulo = titlesH2[i].textContent;
    lightboxH2.textContent = titulo;
    let programas = softwareSpan[i].textContent;
    lightboxSpanProgramas.textContent = programas;
    let texto = extractoP[i].textContent;
    lightboxP.textContent = texto;
  });
  //Al hacer click en la etiqueta .Lightbox-btn le quitamos la clase isActive a .Lightbox
  lightboxBtn.addEventListener(`click`, () => {
    lightbox.classList.remove(`isActive`);
    lightboxImg.classList.remove(`isActive`);
    lightboxP.classList.remove(`isActive`);
  });
});
