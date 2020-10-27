<template>
<div class="relative">
  <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>
  <div class="relative flex flex-col w-full min-h-screen mx-auto lg:flex-row sortsMill">

    <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>

    <div class="absolute top-0 left-0 px-4 py-2 transition duration-500 transform hover:translate-x-2">
      <nuxt-link to="/">
        <img loading="lazy" alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-12">
      </nuxt-link>
    </div>
    <Lostresbotones />

      <!-- left screen -->
      <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-redjuli" @click="show = !show">
        <div class="relative w-48 h-48 mt-auto border-2 border-bluejuli">
          <div class="absolute bottom-0 left-0 -mb-5 -ml-2 text-5xl font-bold text-white uppercase numberBig">DÍA</div>
          <div class="absolute top-0 right-0 w-1/2 h-48 font-semibold text-white -mt-26 numberBig text-16xl">2</div>
        </div>

        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto mt-4 text-sm text-center text-white lg:w-1/2">
          <p class="pb-6">Este día, me obsesioné con los cuerpos, hasta ver solo formas flotando.
          </p>
          <p class="uppercase">TRABAJO DE REVELAMIENTO DE TENDENCIAS CON DESARROLLO DE COLECCIÓN.</p>
        </div>
      </div>

      <!-- right screen 1 -->
      <div name="page" v-if="show" @click="show = !show" class="flex flex-col w-full h-screen p-4 bg-white lg:w-1/2">
        <div class="flex items-center justify-center w-full h-48">
          <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
          </div>
          <div class="text-sm uppercase text-bluejuli">Concepto </div>
        </div>
        <div class="flex justify-around">
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Fotografía digital</div>
          </div>
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli"></div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full h-48 space-x-16">
          <div class="flex items-center justify-center w-full">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Literatura</div>
          </div>
          <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
          </div>
        </div>

        <div class="w-2/3 px-2 ml-auto text-4xl text-right uppercase text-bluejuli sortsMill">POSIBILIDADES DE ABSTRACCIÓN
        </div>
      </div>

      <!-- right screen 2 -->
      <div name="page" v-else class="relative flex flex-col w-full h-screen p-2 space-y-8 overflow-y-scroll divide-y-2 lg:w-1/2 scrollhidden"
      v-bind:style=" lastFotoRed ? 'bg-redjuli bg-opacity-100' : 'bg-gray-200' "
      >

        <div class="fixed z-10 flex flex-col w-16 px-1 space-y-4 bg-transparent">

          <scroll-link href="#uno" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '1'"
          v-bind:class="{ active: isActive == '1' }"
          ></scroll-link>

          <scroll-link href="#dos" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '2'"
          v-bind:class="{ active: isActive == '2'}"
          ></scroll-link>

          <scroll-link href="#tres" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '3'"
          v-bind:class="{ active: isActive == '3' }"
          ></scroll-link>

          <scroll-link href="#cuatro" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '4'"
          v-bind:class="{ active: isActive == '4' }"
          ></scroll-link>

          <scroll-link href="#cinco" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110"
          @click.native="isActive = '5'"
          v-bind:class="{ active: isActive == '5' }"
          ></scroll-link>

          <scroll-link href="#seis" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '6'"
          v-bind:class="{ active: isActive == '6' }"
          ></scroll-link>

          <scroll-link href="#siete" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '7'"
          v-bind:class="{ active: isActive == '7' }"
          ></scroll-link>

          <scroll-link href="#ocho" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '8'"
          v-bind:class="{ active: isActive == '8' }"
          ></scroll-link>

          <scroll-link href="#nueve" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '9'"
          v-bind:class="{ active: isActive == '9' }"
          ></scroll-link>

          <scroll-link href="#dies" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '10'"
          v-bind:class="{ active: isActive == '10' }"
          ></scroll-link>

          <scroll-link href="#once" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          @click.native="isActive = '11'"
          v-bind:class="{ active: isActive == '11' }"
          ></scroll-link>
        </div>

          <div id="uno" class="flex items-center justify-center w-full min-h-screen shadow-lg ">
            <img loading="lazy" alt="uno" src="~assets/img/proyectos/diados/1.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="dos" class="flex items-center justify-center w-full min-h-screen shadow-lg ">
            <img loading="lazy" alt="dos" src="~assets/img/proyectos/diados/2.jpg" class="object-contain w-full h-screen" >
          </div>
          <div id="tres" class="flex items-center justify-center w-full min-h-screen shadow-lg ">
            <img loading="lazy" alt="tres" src="~assets/img/proyectos/diados/3.jpg" class="object-contain w-full h-screen" >
          </div>
          <div id="cuatro" class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img loading="lazy" alt="cuatro" src="~assets/img/proyectos/diados/4.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="cinco" class="flex items-center justify-center w-full min-h-screen shadow-lg" >
            <img loading="lazy" alt="cinco" src="~assets/img/proyectos/diados/5.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="seis" class="flex items-center justify-center w-full min-h-screen shadow-lg ">
            <img loading="lazy" alt="seis" src="~assets/img/proyectos/diados/6.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="siete" class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img loading="lazy" alt="siete" src="~assets/img/proyectos/diados/7.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="ocho" class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img loading="lazy" alt="ocho" src="~assets/img/proyectos/diados/8.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="nueve" class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img loading="lazy" alt="nueve" src="~assets/img/proyectos/diados/9.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="dies" class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img loading="lazy" alt="dies" src="~assets/img/proyectos/diados/10.jpg" class="object-contain w-full h-screen">
          </div>
          <div id="once" class="flex items-center justify-center w-full min-h-screen shadow-lg" @click='toggleColorFoto'>
            <img loading="lazy" alt="once" src="~assets/img/proyectos/diados/11.jpg" class="object-contain w-full h-screen">
          </div>
      </div>
  </div>

  <div class="w-1/4 mx-auto my-20" data-scroll>
    <nuxt-link to="/porfolio">
     <button class="w-full text-sm font-bold tracking-wide text-gray-900 uppercase animate-pulse bg-yellowjuli hover:bg-blue-400 focus:outline-none focus:shadow-outline">
      volver al porfolio
     </button>
    </nuxt-link>
  </div>

  <Footer />
</div>
</template>

<script>
import Lostresbotones from '~/components/Lostresbotones';
import ScrollLink from '~/components/ScrollLink';
import ScrollOut from "scroll-out";

export default {
  transition: "page",
  components : {
    Lostresbotones,
    ScrollLink
  },
  data() {
    return {
      show: true,
      isActive: '',
      lastFotoRed: false
    };
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2
    });
  },
  destroyed() {
    this.so.teardown();
  },
  methods:{
    toggleColorFoto : function () {
      this.lastFotoRed = !this.lastFotoRed
    },
  }
};
</script>

<style scoped>

.active{
  @apply bg-bluejuli transform scale-y-125 scale-x-110;
}

.scrollhidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollhidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.numberBig, .dia-uno{
  font-family: 'Ubuntu', 'Sorts Mill Goudy', 'Montserrat', sans-serif;
}
.sortsMill{
  font-family: 'Sorts Mill Goudy', 'Ubuntu',  'Montserrat', sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

[data-scroll] {
  transition: all 0.5s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-100px);
}

</style>
