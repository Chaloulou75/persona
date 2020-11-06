<template>
<div class="relative">
  <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>
  <div class="relative flex flex-col w-full min-h-screen mx-auto lg:flex-row montserrat">

    <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>

    <div class="absolute top-0 left-0 px-4 py-2 transition duration-500 transform hover:translate-x-2">
      <nuxt-link to="/">
        <img loading="lazy" alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-12">
      </nuxt-link>
    </div>

    <lostresbotones />
      <!-- left screen -->
      <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-bluejuli" @click="show = !show">

        <div class="relative w-48 h-48 mt-auto overflow-hidden text-white bg-redjuli ubuntu">
          <div class="absolute bottom-0 left-0 -mb-4 -ml-1 text-5xl font-bold uppercase">DÍA</div>
          <div class="absolute inset-y-0 right-0 -mr-12 font-semibold -mt-25 text-16xl">1</div>
        </div>

        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto mt-4 text-sm text-center text-white lg:w-1/2">
          <p class="pb-6">Este día me obsesioné con aquellas cosas que tenían la capacidad de interrumpir el orden, me intrigó lo inquieto, los que rompían la tan esperada absurda monotonía.
          </p>
          <p class="uppercase">TRABAJO DE REVELAMIENTO DE TENDENCIAS CON DESARROLLO DE COLECCIÓN</p>
        </div>
      </div>

      <!-- right screen 1 -->
      <div name="page" v-if="show" @click="show = !show" class="flex flex-col w-full h-screen p-4 bg-white lg:w-1/2">
        <div class="flex items-center justify-center w-full h-48">
          <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
          </div>
          <div class="text-sm uppercase text-bluejuli">Tendencias</div>
        </div>
        <div class="flex justify-around">
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Moldería</div>
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

        <div class="w-2/3 px-2 ml-auto text-4xl text-right uppercase text-bluejuli montserrat">SUBVERSIVO
        </div>
      </div>

      <!-- right screen 2 -->
      <div name="page" v-else class="relative flex flex-col w-full h-screen p-2 space-y-8 overflow-y-scroll divide-y-2 lg:w-1/2 scrollhidden"
      v-bind:style=" lastFotoRed ? 'bg-redjuli bg-opacity-100' : 'bg-gray-200' "
      >

        <div class="fixed z-10 flex flex-col w-16 px-1 space-y-4 bg-transparent">
          <scroll-link :href="'#'+ image.name" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
          v-for="image in images"
          :key="image.id"
          @click.native="isActive = image.id"
          v-bind:class="{ active: isActive == image.id }"
          ></scroll-link>
        </div>

        <div :id="image.name"
          v-for="image in images"
          :key="image.id"
          class="flex items-center justify-center w-full min-h-screen shadow-lg "
        >
          <img loading="lazy"
              :alt="image.name"
              :src="image.src"
              class="object-contain w-full h-screen"
              @click="openModal(image)"
          >
        </div>
        <!-- end v-for image -->

        <div id="ultima1" class="flex items-center justify-center w-full min-h-screen shadow-lg cursor-mano" @click='toggleColorFoto'>
          <img loading="lazy" alt="siete" src="~assets/img/proyectos/diauno/7.jpg" class="object-contain w-full h-screen">
        </div>
      </div>
  </div>

  <transition name="component-fade" mode="out-in">
    <modal v-if="showModal" @close="showModal = false" :image='image'></modal>
  </transition>

  <div class="w-2/3 mx-auto my-20 lg:w-1/4" data-scroll>
    <nuxt-link to="/portfolio">
     <button class="w-full text-sm font-bold tracking-wide text-gray-900 uppercase animate-pulse bg-yellowjuli hover:bg-blue-400 focus:outline-none focus:shadow-outline">
      volver al portfolio
     </button>
    </nuxt-link>
  </div>

  <Footer />
</div>
</template>

<script>
import Lostresbotones from '~/components/Lostresbotones';
import ScrollLink from '~/components/ScrollLink';
import Modal from '~/components/Modal';
import ScrollOut from "scroll-out";

export default {
  transition: "page",
  components : {
    Lostresbotones,
    ScrollLink,
    Modal
  },
  data() {
    return {
      show: true,
      isActive: '',
      lastFotoRed: false,
      showModal: false,
      image: null,
      images : [
        {
          id: 1,
          name: 'uno',
          src: require(`~/assets/img/proyectos/diauno/1.jpg`)
        },
        {
          id: 2,
          name: 'dos',
          src: require(`~/assets/img/proyectos/diauno/2.jpg`)
        },
        {
          id: 3,
          name: 'tres',
          src: require(`~/assets/img/proyectos/diauno/3.jpg`)
        },
        {
          id: 4,
          name: 'cuatro',
          src: require(`~/assets/img/proyectos/diauno/4.jpg`)
        },
        {
          id: 5,
          name: 'cinco',
          src: require(`~/assets/img/proyectos/diauno/5.jpg`)
        },
        {
          id: 6,
          name: 'seis',
          src: require(`~/assets/img/proyectos/diauno/6.jpg`)
        },
        {
          id: 7,
          name: 'siete',
          src: require(`~/assets/img/proyectos/diauno/7.jpg`)
        }
      ]
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
    openModal(image) {
      this.image = image
      this.showModal = true
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
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
