<template>
<div>
  <div class="relative flex flex-col w-full min-h-screen mx-auto lg:flex-row">
    <div class="absolute top-0 left-0 px-4 py-2 transition duration-500 transform hover:translate-x-2">
      <nuxt-link to="/">
        <img alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-12">
      </nuxt-link>
    </div>
    <Lostresbotones />
      <!-- left screen -->
      <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-yellowjuli" @click="show = !show">
        <div class="relative w-48 h-48 mt-auto border-2 border-bluejuli">
          <div class="absolute bottom-0 left-0 -mb-5 -ml-2 text-5xl font-bold text-white uppercase numberBig">DÍA</div>
          <div class="absolute top-0 right-0 w-1/2 h-48 font-semibold text-white -mt-29 numberBig text-17xl">1</div>

        </div>
        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>
        <div class="flex flex-col items-center justify-center w-48 h-48 px-4 py-2 mt-4 text-xs text-center text-white uppercase">
          <div class="pb-4">ESTE DÍA, ME OBSESIONÉ CON LOS CUERPOS,  HASTA VER SOLO FORMAS FLOTANDO.
          </div>
          <div>trabajo de fotogragia digital</div>

        </div>
      </div>

      <!-- right screen 1 -->

      <div v-if="show" class="flex flex-col w-full h-screen px-4 bg-white lg:w-1/2">
        <div class="flex items-center justify-center w-full h-48">
          <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
          </div>
          <div class="text-sm uppercase text-bluejuli">fotografia digital</div>
        </div>
        <div class="flex justify-around">
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">literatura</div>
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
            <div class="text-sm uppercase text-bluejuli">Concepto</div>
          </div>
          <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
          </div>
        </div>

        <div class="w-1/2 px-2 ml-auto text-4xl text-right uppercase text-bluejuli sortsMill">Posibilidades de abstraccion__
        </div>
      </div>

      <!-- right screen 2 -->
      <div v-else class="flex flex-col w-full h-screen p-4 space-y-8 overflow-y-scroll bg-gray-200 divide-y-2 lg:w-1/2 scrollhidden">
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img src="~assets/img/proyectos/diauno/1.jpg" class="object-cover w-full h-screen" data-scroll>
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img src="~assets/img/proyectos/diauno/2.jpg" class="object-cover w-full h-screen">
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img src="~assets/img/proyectos/diauno/3.jpg" class="object-cover w-full h-screen">
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img src="~assets/img/proyectos/diauno/4.jpg" class="object-cover w-full h-screen">
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg" >
            <img src="~assets/img/proyectos/diauno/5.jpg" class="object-cover w-full h-screen">
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg" >
            <img src="~assets/img/proyectos/diauno/6.jpg" class="object-cover w-full h-screen">
          </div>
          <div class="flex items-center justify-center w-full min-h-screen shadow-lg">
            <img src="~assets/img/proyectos/diauno/7.jpg" class="object-cover w-full h-screen">
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
import ScrollOut from "scroll-out";

export default {
  transition: "page",
  components : {
    Lostresbotones
  },
  data: () => ({
    show: true,
    currBackground: 0,
    backgrounds: [
      {
        name: "1",
        url: require("@/assets/img/proyectos/diauno/1.jpg")
      },
      {
        name: "2",
        url: require("@/assets/img/proyectos/diauno/2.jpg")
      },
      {
        name: "3",
        url: require("@/assets/img/proyectos/diauno/3.jpg")
      },
      {
        name: "4",
        url: require("@/assets/img/proyectos/diauno/4.jpg")
      },
      {
        name: "5",
        url: require("@/assets/img/proyectos/diauno/5.jpg")
      },
      {
        name: "6",
        url: require("@/assets/img/proyectos/diauno/6.jpg")
      },
      {
        name: "7",
        url: require("@/assets/img/proyectos/diauno/7.jpg")
      },
      {
        name: "8",
        url: ''
      }
    ]
  }),
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
// @click="nextImage()"
// @scroll.native="nextImage()"
//  <button class="bg-yellowjuli hover:bg-blue-400 focus:outline-none focus:shadow-outline">Cambiar image</button>
  // computed: {
  //   currBackgroundURL: function() {
  //       return this.backgrounds[this.currBackground].url
  //   }
  // },
  // methods: {
  //   nextImage() {
  //     this.currBackground += 1
  //     if (this.currBackground > 7) {
  //       this.currBackground = 0
  //     }
  //   }
  // }
</script>

<style scoped>

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
