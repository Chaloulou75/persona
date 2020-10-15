<template>
    <div class="min-h-screen overflow-y-hidden bg-background-primary" :class="theme">
      <Navigation />
      <div class="relative">

      <!-- photos de colores -->
      <template v-if="foto === 'Azul' ">
        <div class="flex items-center justify-between p-32 space-between bg-background-primary" >
          <div class="relative w-1/2 h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl" >
            <img class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/azul/una.jpg" alt="azul" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
            <div class="relative flex items-center justify-center h-full">
              <h1 class="text-3xl tracking-wider text-teal-100"></h1>
            </div>
          </div>
          <div class="relative w-1/2 h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/azul/dos.jpg" alt="azul2" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
            <div class="relative flex items-center justify-center h-full">
              <h1 class="text-3xl tracking-wider text-teal-100"></h1>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="foto === 'Amarillo'">
        <div class="flex items-center justify-between p-32 space-between bg-background-primary" >
          <div class="relative w-1/2 h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl" >
            <img class="absolute inset-0 object-cover w-full h-full " src="~assets/img/portadas/amarillo/una.jpg" alt="amarillouna" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
            <div class="relative flex items-center justify-center h-full">
              <h1 class="text-3xl tracking-wider text-teal-100 "></h1>
            </div>
          </div>
          <div class="relative w-1/2 h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/amarillo/dos.jpg" alt="amarillodos" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
            <div class="relative flex items-center justify-center h-full">
              <h1 class="text-3xl tracking-wider text-teal-100"></h1>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="foto === 'Rojo' ">
        <div class="flex items-center justify-center p-32 bg-background-primary" >
          <div class="relative w-1/2 h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl" >
            <img class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/rojo/una.jpg" alt="rojo" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
            <div class="relative flex items-center justify-center h-full">
              <h1 class="text-3xl tracking-wider text-teal-100"></h1>
            </div>
          </div>
        </div>
      </template>

        <button class="absolute top-0 right-0 px-2 py-3 mr-6 text-copy-primary focus:outline-none" @click="toggle">Start Me</button>

        <div class="absolute inset-y-0 right-0 mt-16 mr-12">
          <div class="fixed space-y-4">
            <div class="w-6 h-6 transition duration-300 transform bg-blue-500 border border-gray-500 rounded shadow-lg hover:scale-110 hover:-rotate-45 "
            @click="foto = 'Azul'"
            @mouseover="foto = 'Azul'"
            >
            </div>

            <div class="w-6 h-6 transition duration-300 transform border border-gray-500 rounded shadow-lg bg-yellowjuli hover:scale-110 hover:-rotate-45"
            @click="foto = 'Amarillo'"
            @mouseover="foto = 'Amarillo'"
            >
            </div>

            <div class="w-6 h-6 transition duration-300 transform border border-gray-500 rounded shadow-lg bg-redjuli hover:scale-110 hover:-rotate-45"
            @click="foto = 'Rojo'"
            @mouseover="foto = 'Rojo'"
            >
            </div>
          </div>
        </div>

        <!-- las letras -->
        <div>
          <div v-bind:class="{ 'anim_letter-p' : show}" class="letter-p letterBig text-copy-primary">
             <nuxt-link to="/proyectos">P</nuxt-link>
          </div>
          <div v-bind:class="{ 'anim_letter-e' : show}" class="transform rotate-90 letter-e letterBig text-copy-primary">
            E
          </div>
          <div v-bind:class="{ 'anim_letter-r' : show}" class="letter-r letterBig text-copy-primary">
            <nuxt-link to="/sobremi/#resume">R</nuxt-link>
          </div>
          <div v-bind:class="{ 'anim_letter-s' : show}" class="transform rotate-90 letter-s letterBig text-copy-primary">
            <nuxt-link to="/sobremi">S</nuxt-link>
          </div>
          <div @mouseover="toggleThemeBlue" v-bind:class="{ 'anim_letter-o' : show}" class="letter-o letterBig text-copy-primary">
            O
          </div>
          <div v-bind:class="{ 'anim_letter-n' : show}" class="letter-n letterBig text-copy-primary">
            N
          </div>
          <div @mouseover="toggleThemeRed" v-bind:class="{ 'anim_letter-a' : show}" class="letter-a letterBig text-copy-primary">
            A
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      theme : 'theme-inicio',
      foto: '',
    }
  },
  methods:{
    toggle : function () {
      this.show = !this.show
      this.theme = this.theme === 'theme-inicio' ? 'theme-blue' : 'theme-inicio'
    },
    toggleThemeBlue : function () {
      this.theme = this.theme === 'theme-blue' ? 'theme-inicio' : 'theme-blue'
    },
    toggleThemeRed : function () {
      this.theme = this.theme === 'theme-reddy' ? 'theme-yellowy' : 'theme-reddy'
    },
    toggleThemeYellow : function () {
      this.theme = this.theme === 'theme-yellowy' ? 'theme-blue' : 'theme-yellowy'
    }
  }
};
</script>

<style scoped>

.letter-p {
  top: 255px;
  left: 150px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: -5%;
    left: 45%;
    transform-origin: left;
  }
}

.anim_letter-p {
  animation: letterP 6.4s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterP {
  0% {
    transform:  translate()  rotate(0deg);
  }
  40%, 60% {
    transform:  translate(-380%, 100%) rotate(360deg) ;
  }
  100% {
    transform:  translate(200%, 15%) rotate(0deg);
  }
}

.letter-e {
  top: 300px;
  left: 150px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 0%;
    left: 34%;
    transform-origin: left;
  }
}

.anim_letter-e {
  animation: letterE 5.6s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterE {
  0% {
    transform:  translate()  rotate(90deg);
  }
  40%, 60% {
    transform:  translate(10%, 75%) rotate(-90deg);
  }
  100% {
    transform:  translate(305%, -50%)  rotate(90deg);
  }
}

.letter-r {
  top: 190px;
  left: 270px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 25%;
    left: 17%;
    transform-origin: left;
  }
}

.anim_letter-r {
  animation: letterR 6.1s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterR {
  0% {
    transform:  translate()  rotate(0deg);
  }
  40%, 60%  {
    transform:  translate(300%, -37%) rotate(360deg);
  }
  100% {
    transform:  translate(55%, 22%) rotate(0deg);
  }
}

.letter-s {
  top: 125px;
  left: 110px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 35%;
    left: 34%;
    transform-origin: left;
  }
}

.anim_letter-s {
  animation: letterS 5.3s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterS {
  0% {
    transform:  translate()  rotate(90deg);
  }
  40%, 60% {
    transform:  translate(350%, 2%)  rotate(-90deg) ;
  }
  100% {
    transform:  translate(110%, -25%) rotate(90deg);
  }
}

.letter-o {
  top: 45px;
  left: 90px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 63%;
    left: 45%;
    transform-origin: left;
  }
}
.anim_letter-o {
  animation: letterO 6s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterO {
  0% {
    transform:  translate()  rotate(0deg);
  }
  40%, 60%  {
    transform:  translate(180%, -115%) rotate(720deg);
  }
  100% {
    transform:  translate(-90%, -10%)  rotate(0deg);
  }
}

.letter-n {
  top: 65px;
  left: 190px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 5%;
    left: 65%;
    transform-origin: left;
  }
}
.anim_letter-n {
  animation: letterN 5.9s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterN {
  0% {
    transform:  translate()  rotate(0deg);
  }
  40%, 60%  {
    transform:  translate(-125%, -38%)  rotate(360deg) ;
  }
  100% {
    transform:  translate(-150%, 60%)  rotate(0deg);
  }
}

.letter-a {
  top: 10px;
  left: 310px;
  transform-origin: left;

  @media (min-width: 767px) {
    top: 41%;
    left: 65%;
    transform-origin: left;
  }
}
.anim_letter-a {
  animation: letterA 6.2s 0.5s forwards 1 ease-in-out normal running;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterA {
  0% {
    transform:  translate()  rotate(0deg);
  }
  40%, 60%  {
    transform:  translate(-300%, 15%) rotate(-360deg);
  }
  100% {
    transform:  translate(170%, -9%) rotate(0deg);
  }
}

@media (max-width: 767px) {
  @keyframes letterP {
    0% {
      transform:  translate()  rotate(0deg);
      opacity: 1;
    }
    40%, 60% {
      transform:  translate(-30px, 10px)  rotate(360deg) ;
    }
    100% {
      transform:  translate(15px, 10px)  rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes letterE {
    0% {
      transform:  translate()  rotate(90deg);
    }
    40%, 60%  {
      transform:  translate(-120px, 81px)  rotate(0deg);
    }
    100% {
      transform:  translate(128px,-98px)  rotate(90deg);
    }
  }

  @keyframes letterR {
    0% {
      transform:  translate()  rotate(0deg);
    }
    40%, 60%  {
      transform:  translate(120px,-81px)  rotate(360deg) ;
    }
    100% {
      transform:  translate(90px,50px)  rotate(0deg);
    }
  }
  @keyframes letterS {
    0% {
      transform:  translate()  rotate(90deg);
    }
    40%, 60%  {
      transform:  translate(180px,-81px)  rotate(360deg) ;
    }
    100% {
      transform:  translate(115px,-70px)  rotate(90deg);
    }
  }

  @keyframes letterO {
    0% {
      transform:  translate()  rotate(0deg);
    }
    40%, 60%  {
      transform:  translate(-32px, -101px)  rotate(360deg);
    }
    100% {
      transform:  translate(-40px, 70px)  rotate(0deg);
    }
  }

  @keyframes letterN {
    0% {
      transform:  translate()  rotate(0deg);
    }
    40%, 60% {
      transform:  translate(120px,-81px)  rotate(120deg) ;
    }
    100% {
      transform:  translate(80px, -60px)  rotate(0deg);
    }
  }

  @keyframes letterA {
    0% {
      transform:  translate()  rotate(0deg);
    }
    40%, 60%  {
      transform:  translate(120px,-81px) rotate(359deg);
    }
    100% {
      transform:  translate(55px, 90px) rotate(0deg);
    }
  }
}
</style>
