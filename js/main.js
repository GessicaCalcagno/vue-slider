// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 0- creare dei thumb
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- Gestire lo stop di autoplay e l'inversione

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

// const images = [
//   {
//     image: "img/01.webp",
//     title: "Marvel's Spiderman Miles Morale",
//     text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
//   },
//   {
//     image: "img/02.webp",
//     title: "Ratchet & Clank: Rift Apart",
//     text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
//   },
//   {
//     image: "img/03.webp",
//     title: "Fortnite",
//     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   },
//   {
//     image: "img/04.webp",
//     title: "Stray",
//     text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
//   },
//   {
//     image: "img/05.webp",
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// //Contenitore delle img grandi
// const imgContainer = document.querySelector(".my-carousel-images");
// console.log(imgContainer);

// //MILESTON 2
// //Prendo il contenitore delle miniature
// let miniContainer = document.querySelector(".my-thumbnails");
// console.log(miniContainer);

// // MILESTON 1
// images.forEach((curElem) => {
//   console.log(curElem);

//   imgContainer.innerHTML += `
//   <div class="my-carousel-item" carousel-item="1">
//       <img class="img-fluid" src="${curElem.image}" alt="Marvel photo"/>
//       <div class="item-description px-3">
//           <h2>${curElem.title}</h2>
//           <p> ${curElem.text}</p>
//       </div>
//   </div>
//   `;
//   //MILESTON 2
//   miniContainer.innerHTML += `
//   <img class="img-fluid my-thumbnail" src="${curElem.image}" alt="Thumbnail of Marvel's"/>
//   `;
// });

// // Mi aggancio al div delle immagini grandi
// const slides = document.querySelectorAll(".my-carousel-item");
// console.log(slides);

// //MILESTON 2
// // Mi aggancio al div delle immagini piccole
// const thumbs = document.querySelectorAll(".my-thumbnail");
// console.log(thumbs); //Array di thumb

// //Indico che la prima immagine deve rimanere attiva prima che scorra
// let activeIndex = 0;

// //Attivo il primo elemento
// slides[activeIndex].classList.add("active");
// // MILESTON2
// thumbs[activeIndex].classList.add("active");

// //Al click sulla freccia avanti
// document.querySelector(".my-next-hook").addEventListener("click", showNext);

// // al posto di image.length avrei potuto mettere imgContainer.length essendo un array di elemento html
// function showNext() {
//   //   tolgo la classe active dall'elemento corrente
//   slides[activeIndex].classList.remove("active");
//   // MILESTON2
//   thumbs[activeIndex].classList.remove("active");

//   if (activeIndex < images.length - 1) {
//     // incremento l'indice
//     activeIndex++;
//   } else {
//     activeIndex = 0;
//   }

//   // aggiungo la classe active alla nuova img con il nuovo indice incrementato
//   slides[activeIndex].classList.add("active");
//   // MILESTON2
//   thumbs[activeIndex].classList.add("active");
// }

// //Al click sulla freccia indietro
// document.querySelector(".my-prev-hook").addEventListener("click", showBack);

// function showBack() {
//   //   tolgo la classe active dall'indice corrente
//   slides[activeIndex].classList.remove("active");
//   // MILESTON2
//   thumbs[activeIndex].classList.remove("active");

//   if (activeIndex > 0) {
//     // Decremento l'indice
//     activeIndex--;
//   } else {
//     activeIndex = images.length - 1;
//   }

//   // aggiungo la classe active alla nuova img con il nuovo indice
//   slides[activeIndex].classList.add("active");
//   // MILESTON2
//   thumbs[activeIndex].classList.add("active");
// }

// //_________________________________

// //BONUS 1
// // Aggiungi un gestore di eventi click a ciascuna miniatura
// thumbs.forEach((thumbnail, index) => {
//   thumbnail.addEventListener("click", () => {
//     // Rimuovi la classe "active" da tutte le miniature e le immagini grandi
//     thumbs.forEach(thumb => {
//       thumb.classList.remove("active");
//     });
//     slides.forEach(slide => {
//       slide.classList.remove("active");
//     });

//     // Aggiungi la classe "active" alla miniatura cliccata e all'immagine corrispondente nel carousel
//     thumbnail.classList.add("active");
//     slides[index].classList.add("active");

//     // Imposta l'indice attivo sul nuovo indice
//     activeIndex = index;
//   });
// });

// //___________________________________________________________
// //BONUS 2

// let autoplayInterval = null; // Variabile per controllare l'intervallo di autoplay
// let isAutoplayActive = false; // Flag per tenere traccia dello stato dell'autoplay

// // Seleziona il pulsante Start
// const startBtn = document.getElementById("my-stop-button");
// console.log(startBtn);
// // Aggiungi un listener di eventi al pulsante Start
// startBtn.addEventListener("click", function () {
//   toggleAutoplay();
// });

// // Funzione per avviare o fermare l'autoplay
// function toggleAutoplay() {
//   if (!isAutoplayActive) {
//     autoplayInterval = setInterval(showNext, 3000);
//     isAutoplayActive = true;
//   } else {
//     clearInterval(autoplayInterval);
//     isAutoplayActive = false;
//   }
// }
// //_______________INVERT____________

// const invertBtn = document.getElementById("my-order-button");
// console.log(invertBtn);

// // Aggiungi un listener di eventi al pulsante Start
// invertBtn.addEventListener("click", function () {
//   toggleAutoplayInvert();
// });

// function toggleAutoplayInvert() {
//   if (isAutoplayActive) {
//     clearInterval(autoplayInterval);
//     isAutoplayActive = false;
//   } else {
//     autoplayInterval = setInterval(showBack, 3000);
//     isAutoplayActive = true;
//   }
// }
// //_________________________________

const { createApp } = Vue;

createApp({
  data() {
    return {
      activeIndex: 0,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },

  methods: {
    showNext: function(){


    }

  }
}).mount("#app");
