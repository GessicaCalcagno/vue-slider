//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 0- creare dei thumb
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- Gestire lo stop di autoplay e l'inversione

//______________________VUE__________________

const { createApp } = Vue;

createApp({
  data() {
    return {
      activeIndex: 0,
      autoPlayInterval: null,
      autoPlayActive: true,
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

  //Created lo puoi usare una sola volta e Parte all'avvio della pagina
  created() {
    if (this.autoPlayActive) {
      this.autoPlayInterval = setInterval(this.showNext, 3000);
    }
  },

  methods: {
    showNext: function () {
      console.log("next");
      if (this.activeIndex == this.images.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },

    showPrev: function () {
      console.log("Prev");
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.images.length - 1;
      }
    },

    showThumb: function (index) {
      this.activeIndex = index;
    },

    stopStarAutoplay: function () {
      if (this.autoPlayActive) {
        clearInterval(this.autoPlayInterval);
      } else {
        this.autoPlayInterval = setInterval(this.showNext, 3000);
      }
      //Se è attivo imposta al click che non è attivo o viceversa
      return (this.autoPlayActive = !this.autoPlayActive);
    },

    invert: function () {
      if (this.autoPlayActive) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = setInterval(this.showPrev, 3000);
        this.autoPlayActive = false;
      } else {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = setInterval(this.showNext, 3000);
        this.autoPlayActive = true;
      }
    },
  },
}).mount("#app");
