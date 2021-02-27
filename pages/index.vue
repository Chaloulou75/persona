<template>
    <div class="min-h-screen overflow-y-hidden transition duration-1000 bg-background-primary" :class="theme">
      <Navigation />
      <div class="relative w-full min-h-full">

        <!-- photos de colores -->
        <template v-if="foto === 'Azul' ">
          <div class="flex flex-col items-center justify-between p-10 space-y-4 lg:p-32 lg:space-y-0 lg:flex-row" >
            <div class="relative w-full h-64 max-w-lg overflow-hidden rounded-lg lg:w-1/2" >
              <img loading="lazy" class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/compress/azul/una.jpg" alt="azul" />
              <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </div>
            <div class="relative w-full h-64 max-w-lg overflow-hidden rounded-lg lg:w-1/2">
              <img loading="lazy" class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/compress/azul/dos.jpg" alt="azul2" />
              <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </div>
          </div>
        </template>

        <template v-else-if="foto === 'Amarillo'">
          <div class="flex flex-col items-center justify-between p-10 space-y-4 lg:p-32 lg:space-y-0 lg:flex-row" >

            <div class="relative w-full h-64 max-w-lg overflow-hidden rounded-lg lg:w-1/2" >
              <img loading="lazy" class="absolute inset-0 object-cover w-full h-full " src="~assets/img/portadas/compress/amarillo/una.jpg" alt="amarillouna" />
              <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </div>

            <div class="relative w-full h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl lg:w-1/2">
              <img loading="lazy" class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/compress/amarillo/dos.jpg" alt="amarillodos" />
              <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </div>
          </div>
        </template>

        <template v-else-if="foto === 'Rojo' ">
          <div class="flex items-center justify-center p-10 lg:p-32">
            <div class="relative w-full max-w-lg overflow-hidden rounded-lg shadow-2xl h-128 lg:h-64 lg:w-1/2">
              <img loading="lazy" class="absolute inset-0 object-cover w-full h-full" src="~assets/img/portadas/compress/rojo/una.jpg" alt="rojo" />
              <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex items-center justify-center p-10 space-y-4 lg:p-32">
            <div class="relative w-full max-w-lg overflow-hidden rounded-lg h-128 lg:h-64 lg:w-1/2">
            </div>
          </div>
        </template>

        <!-- los 3 botones -->
        <div class="absolute inset-y-0 right-0 mt-2 mr-16 lg:-mt-12 lg:mr-32">
          <div class="fixed space-y-4">
            <div class="w-5 h-5 transition duration-200 transform border shadow-lg bg-bluejuli border-bluejuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeBlue"
            >
            </div>

            <div class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeYellow"
            >
            </div>

            <div class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeRed"
            >
            </div>

            <div class="text-copy-primary focus:outline-none cursor-mano" @click="toggle">
              <!-- py-3 mt-6 -ml-6 text-xs lg:text-base -->
              <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
        </div>

        <!-- las letras -->
        <transition name="letters" appear v-on:appear="lettersAnimStart" >
          <div class="font-ubuntu">
            <nuxt-link to="/portfolio">
            <div v-bind:class="{ 'anim_letter-p' : show, 'animate-appearLettersStart' : appearLetters}"
            class="absolute font-semibold leading-none text-white text-shadow-lg letter-p text-7xl lg:text-11xl">
                P
            </div>
            </nuxt-link>

            <div @click="foto = 'Amarillo'"
                @mouseover="foto = 'Amarillo'"
                v-bind:class="{ 'anim_letter-e' : show, 'animate-appearLettersStart' : appearLetters }"
                class="absolute font-semibold leading-none text-white transform rotate-90 text-shadow-lg letter-e text-7xl lg:text-11xl cursor-mano">
                E
            </div>

            <nuxt-link to="/resume">
            <div v-bind:class="{ 'anim_letter-r' : show, 'animate-appearLettersStart': appearLetters }"
                class="absolute font-semibold leading-none text-white text-shadow-lg letter-r text-7xl lg:text-11xl">
              R
            </div>
            </nuxt-link>

            <nuxt-link to="/sobremi">
            <div v-bind:class="{ 'anim_letter-s' : show, 'animate-appearLettersStart' : appearLetters }"
                class="absolute font-semibold leading-none text-white transform rotate-90 text-shadow-lg letter-s text-7xl lg:text-11xl">
              S
            </div>
            </nuxt-link>
            <div @click="foto = 'Azul'"
                @mouseover="foto = 'Azul'"
                v-bind:class="{ 'anim_letter-o' : show , 'animate-appearLettersStart' : appearLetters}"
                class="absolute font-semibold leading-none text-white text-shadow-lg letter-o text-7xl lg:text-11xl cursor-mano">
              O
            </div>
            <nuxt-link to="/contacto">
            <div v-bind:class="{ 'anim_letter-n' : show, 'animate-appearLettersStart' : appearLetters}"
                class="absolute font-semibold leading-none text-white text-shadow-lg letter-n text-7xl lg:text-11xl">
                N
            </div>
            </nuxt-link>
            <div @click="foto = 'Rojo'"
                @mouseover="foto = 'Rojo'"
                v-bind:class="{ 'anim_letter-a' : show, 'animate-appearLettersStart' : appearLetters}"
                class="absolute font-semibold leading-none text-white text-shadow-lg letter-a text-7xl lg:text-11xl cursor-mano ">
                A
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  transition: "page",

  data() {
    return {
      appearLetters: true,
      show: false,
      theme : 'theme-inicio',
      foto: '',
    }
  },
  methods:{
    lettersAnimStart : function () {
      setTimeout(()=>{
        this.appearLetters = !this.appearLetters
        this.show = !this.show
      }, 4000);
    },
    toggle : function () {
      this.show = !this.show
    },
     toggleThemeInicio : function () {
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

<style lang="scss" scoped>

// position initiale letters
.letter-p {
  top: 3%;
  left: 45%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 2%;
    left: 50%;
    transform-origin: center;

  }
}
.letter-e {
  top: 15%;
  left: 22%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 15%;
    left: 34%;
    transform-origin: center;

  }
}
.letter-r {
  top: 35%;
  left: 5%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 35%;
    left: 17%;
    transform-origin: center;

  }
}
.letter-s {
  top: 55%;
  left: 22%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 52%;
    left: 34%;
    transform-origin: center;

  }
}
.letter-o {
  bottom: 10%;
  left: 45%;
  transform-origin: center;

  @media (min-width: 768px) {
    bottom: 2%;
    left: 50%;
    transform-origin: center;

  }
}
.letter-n {
  top: 30%;
  left: 65%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 15%;
    left: 70%;
    transform-origin: center;

  }
}
.letter-a {
  top: 50%;
  left: 65%;
  transform-origin: center;

  @media (min-width: 768px) {
    top: 45%;
    left: 70%;
    transform-origin: center;

  }
}
//transform on desktop
@keyframes letterP {
  0% {}
  40%, 60% {
    transform:  translate(-400%, 200%) rotate(360deg);
  }
  100% {
    transform:  translate(150%, 15%) rotate(0deg);
  }
}
@keyframes letterE {
  0% {}
  40%, 60% {
    transform:  translate(-40%, 80%) rotate(-90deg);
  }
  100% {
    transform:  translate(210%, -65%)  rotate(90deg);
  }
}

@keyframes letterR {
  0% {}
  40%, 60%  {
    transform:  translate(300%, -60%) rotate(360deg);
  }
  100% {
    transform:  translate(40%, 28%) rotate(0deg);
  }
}
@keyframes letterS {
  0% {}
  40%, 60% {
    transform:  translate(300%, -30%)  rotate(-90deg);
  }
  100% {
    transform:  translate(60%, -40%) rotate(90deg);
  }
}
@keyframes letterO {
  0% {}
  40%, 60%  {
    transform:  translate(170%, -125%) rotate(720deg);
  }
  100% {
    transform:  translate(-140%, 0%)  rotate(0deg);
  }
}
@keyframes letterN {
  0% {}
  40%, 60%  {
    transform:  translate(-180%, -50%)  rotate(360deg);
  }
  100% {
    transform:  translate(-230%, 86%)  rotate(0deg);
  }
}
@keyframes letterA {
  0% {}
  40%, 60%  {
    transform:  translate(-350%, 50%) rotate(-360deg);
  }
  100% {
    transform:  translate(80%, -1%) rotate(0deg);
  }
}
//transform on mobile
@media (max-width: 768px) {
  @keyframes letterP {
    0% {
      transform:  translate(0)  rotate(0);
    }
    40%, 60% {
      transform:  translate(80%, 200%) rotate(270deg);
    }
    100% {
      transform:  translate(10%, 90%) rotate(0deg);
    }
  }

  @keyframes letterE {
    0% {
      transform:  translate(0)  rotate(90);
    }
    40%, 60%  {
      transform:  translate(-60%, 170%)  rotate(0deg);
    }
    100% {
      transform:  translate(50%,-60%)  rotate(90deg);
    }
  }

  @keyframes letterR {
    0% {
      transform:  translate(0)  rotate(0);
    }
    40%, 60%  {
      transform:  translate(20%, -90%)  rotate(270deg) ;
    }
    100% {
      transform:  translate(0%, 27%) rotate(0deg);
    }
  }
  @keyframes letterS {
    0% {
      transform:  translate(0)  rotate(90);
    }
    40%, 60%  {
      transform:  translate(170%, -280%)  rotate(360deg);
    }
    100% {
      transform:  translate(60%, 10%)  rotate(90deg);
    }
  }

  @keyframes letterO {
    0% {
      transform:  translate(0)  rotate(0);
    }
    40%, 60%  {
      transform:  translate(-60%, -200%)  rotate(360deg);
    }
    100% {
      transform:  translate( -90%, 20%) rotate(0deg);
    }
  }

  @keyframes letterN {
    0% {
      transform:  translate(0)  rotate(0);
    }
    40%, 60% {
      transform:  translate( 20%, 180%) rotate(90deg) ;
    }
    100% {
      transform:  translate(-75%, 55%) rotate(0deg);
    }
  }

  @keyframes letterA {
    0% {
      transform:  translate(0)  rotate(0);
    }
    40%, 60%  {
      transform:  translate(-180%, 120%) rotate(180deg);
    }
    100% {
      transform:  translate(60%, -50%) rotate(0deg);
    }
  }
}

.anim_letter-p {
  animation: 6.4s ease-in-out 1 forwards running letterP;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-e {
  animation: 5.6s ease-in-out 1 forwards running letterE;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-r {
  animation: 6.1s ease-in-out 1 forwards running letterR;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-s {
  animation: 5.3s ease-in-out 1 forwards running letterS;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-o {
  animation: 6s ease-in-out 1 forwards running letterO;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-n {
  animation: 5.9s ease-in-out 1 forwards running letterN;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-a {
  animation: 6.2s forwards 1 ease-in-out normal running letterA;
  &:hover {
    animation-play-state: paused;
  }
}
</style>
