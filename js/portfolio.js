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

//Recorremos el array de .Proyectos-img, al hacer click en alguna de las etiquetas .Proyectos-img le añadimos a .Lightbox la clase isActive, guardamos en source el atributo src de Galeria-img, guardamos en alternative el atributo alt de Galeria-img, guardamos el texto de las etiquetas .Titles-h2, .Software-span y .Extracto-p corespondientes al índice del array para finalmente darles los textos a .Lightbox-h2, .Lightbox-span-programas y .Lightbox-p respectivamente
proyectosImg.forEach((eachImg, i) => {
  proyectosImg[i].addEventListener(`click`, () => {
    lightbox.classList.add(`isActive`);
    let source = galeriaImg[i].getAttribute(`src`);
    lightboxImg.setAttribute(`src`, source);
    let alternative = galeriaImg[i].getAttribute(`alt`);
    lightboxImg.setAttribute(`alt`, alternative);
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
  });
  //Al presionar la tecla Esc le quitamos la clase isActive a .Lightbox
  document.addEventListener(`keydown`, (esc) => {
    if (esc.key === `Escape`) {
      lightbox.classList.remove(`isActive`);
    }
  });
});
