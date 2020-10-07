<template>
    <div class="persona">
      <div class="relative h-screen">
        <button class="left-0 px-2 py-1 mr-2 text-gray-500 focus:outline-none" @click="toggle">Animate me! or click on any letter</button>
        <div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-p' : show}" class=" letter-p dark:text-blue-500 letter">
            P
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-e' : show}" class="transform rotate-90 letter-e dark:text-blue-500 letter">
            E
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-r' : show}" class="letter-r dark:text-blue-500 letter">
            R
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-s' : show}" class="transform rotate-90 letter-s dark:text-blue-500 letter">
            S
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-o' : show}" class="letter-o dark:text-blue-500 letter">
            O
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-n' : show}" class="letter-n dark:text-blue-500 letter">
            N
          </div>
          <div @click="toggle" v-bind:class="{ 'anim_letter-a' : show}" class="letter-a dark:text-blue-500 letter">
            A
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import TButton from "~/components/TButton";

export default {
  data() {
    return {
      show: false
    }
  },
  methods:{
    toggle : function () {
      this.show = !this.show
    }
  },
  components: {
    TButton
  }
};
</script>

<style scoped>

/* .badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
.dark-mode .badge {
  @apply bg-gray-700 text-gray-200;
} */

.letter-p {
  top: 5px;
  left: 580px;
  transform-origin: left;
}

.anim_letter-p {
  animation: letterP 3.4s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}
/* cubic-bezier(.98,.11,.34,.78) */
@keyframes letterP {
  0% {
    transform:  translate(0px, 0px)  rotate(0deg);
    opacity: 1;
  }
  52% {
    transform:  translate(-120px, 50px)  rotate(360deg) ;
  }
  100% {
    transform:  translate(225px, 10px)  rotate(0deg);
    opacity: 1;
  }
}

.letter-e {
  top: 12px;
  left: 500px;
  transform-origin: left;
}

.anim_letter-e {
  animation: letterE 2.6s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterE {
  0% {
    transform:  translate(0px,0px)  rotate(90deg);
  }
  45% {
    transform:  translate(120px,-81px)  rotate(45deg) ;
  }
  100% {
    transform:  translate(268px,-138px)  rotate(90deg);
  }
}

.letter-r {
  top: 120px;
  left: 280px;
  transform-origin: left;
}

.anim_letter-r {
  animation: letterR 3.1s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterR {
  0% {
    transform:  translate(0px, 0px)  rotate(0deg);
  }
  41% {
    transform:  translate(120px,-81px)  rotate(360deg) ;
  }
  100% {
    transform:  translate(90px,50px)  rotate(0deg);
  }
}

.letter-s {
  top: 180px;
  left: 500px;
  transform-origin: left;
}

.anim_letter-s {
  animation: letterS 2.3s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterS {
  0% {
    transform:  translate(0px,0px)  rotate(90deg);
  }
  55% {
    transform:  translate(180px,-81px)  rotate(360deg) ;
  }
  100% {
    transform:  translate(115px,-70px)  rotate(90deg);
  }
}

.letter-o {
  top: 280px;
  left: 580px;
  transform-origin: left;
}
.anim_letter-o {
  animation: letterO 3s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterO {
  0% {
    transform:  translate(0px, 0px)  rotate(0deg);
  }
  52% {
    transform:  translate(320px, -421px)  rotate(1080deg);
  }
  100% {
    transform:  translate(-40px,0px)  rotate(0deg);
  }
}

.letter-n {
  top: 50px;
  left: 900px;
  transform-origin: left;
}
.anim_letter-n {
  animation: letterN 2.9s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterN {
  0% {
    transform:  translate(0px, 0px)  rotate(0deg);
  }
  55% {
    transform:  translate(170px,-81px)  rotate(120deg) ;
  }
  100% {
    transform:  translate(-200px, 120px)  rotate(0deg);
  }
}

.letter-a {
  top: 190px;
  left: 900px;
  transform-origin: left;
}
.anim_letter-a {
  animation: letterA 3.6s 0.5s both 4 ease-in-out alternate;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes letterA {
  0% {
    transform:  translate(0px, 0px)  rotate(0deg);
  }
  62% {
    transform:  translate(120px,-81px) rotate(190deg);
  }
  100% {
    transform:  translate(200px, -20px) rotate(0deg);
  }
}
</style>
