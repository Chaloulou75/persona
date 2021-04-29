<template>
  <div class="relative">

    <client-only>
      <v-gallery :images="images" :index="index" @close="index = null" class="cursor-mano" />
    </client-only>

    <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>

    <div class="relative flex flex-col w-full min-h-screen mx-auto lg:flex-row">

      <div v-if="lastFotoRed" @click='toggleColorFoto' class="absolute inset-0 bg-opacity-100 bg-redjuli"></div>

      <div class="absolute top-0 left-0 px-4 py-2 transition duration-500 transform hover:translate-x-2">
        <nuxt-link to="/">
          <Logopersona class="h-12" />
        </nuxt-link>
      </div>
      <Lostresbotones />

      <!-- left screen -->
      <div class="flex flex-col items-center justify-center w-full h-screen bg-bluejuli lg:w-1/2 cursor-mano" @click="show = !show">

        <div class="relative w-48 h-48 mt-auto overflow-hidden bg-center bg-cover bg-cuadro-5">
        </div>

        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto mt-4 text-sm text-center text-white lg:w-1/2">
          <p class="pb-6">Con el pasar de los días me empecé a contagiar de un sentimiento mítico, me vi absorbida por la teatralidad de la forma de vestir de los humanos.
          </p>
          <p class="uppercase">TRABAJO DE DESARROLLO DE MARCA READY-TO-WEAR, CON SISTEMA DE COMUNICACIÓN COMPLETO.</p>
        </div>
      </div>

      <transition name="component-fade" mode="out-in">
        <!-- right screen 1 -->
        <div key="right1" v-if="show" @click="show = !show" class="relative flex flex-col w-full h-screen p-4 transition duration-200 ease-in-out bg-white group lg:w-1/2 cursor-mano">

          <!-- hover part -->
          <div class="absolute inset-0 group-hover:bg-gray-800 group-hover:bg-opacity-50"></div>
          <div class="absolute inset-0 ">
            <div class="flex items-center justify-center h-full text-2xl font-semibold leading-normal tracking-wider text-transparent uppercase group-hover:text-gray-100">Ver las fotos</div>
          </div><!-- end hover part -->

          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Experimentación</div>
          </div>
          <div class="flex justify-around">
            <div class="flex items-center justify-center w-full h-48">
              <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
              </div>
              <div class="text-sm uppercase text-bluejuli">Diseño de autor</div>
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
              <div class="text-sm uppercase text-bluejuli">Conceptualización</div>
            </div>
            <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
            </div>
          </div>

          <div class="w-2/3 px-2 ml-auto text-2xl text-right uppercase lg:text-4xl text-bluejuli">SUBVERSIVO
          </div>
        </div>

        <!-- right screen 2 -->
        <div key="right2" v-else class="relative flex flex-col justify-between w-full h-screen p-2 space-y-8 overflow-y-scroll lg:w-1/2 scrollhidden"
        v-bind:style=" lastFotoRed ? 'bg-redjuli bg-opacity-100' : 'bg-gray-200' "
        >

          <div class="fixed z-10 flex flex-col w-16 px-1 space-y-2 bg-transparent">
            <scroll-link :href="'#'+ image.name" class="w-full h-2 transition duration-200 transform bg-yellowjuli hover:bg-bluejuli hover:translate-x-2 hover:scale-110 "
            v-for="image in images"
            :key="image.id"
            @click.native="isActive = image.id"
            v-bind:class="{ active: isActive == image.id }"
            ></scroll-link>
          </div>

          <img loading="lazy"
              :id="image.name"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :alt="image.name"
              :src="image.href"
              class="object-cover w-full h-auto shadow-lg lg:object-contain lg:min-h-screen cursor-mano"
          >

          <div id="ultima5" @click='toggleColorFoto'>
              <img loading="lazy" alt="veinte" src="~assets/img/proyectos/diacinco/20.jpg" class="object-cover w-full h-auto shadow-lg lg:object-contain lg:h-screen cursor-mano">
          </div>
        </div>
      </transition>
    </div>

    <!-- <transition name="component-fade" mode="out-in">
      <LazyModal v-if="showModal" @close="showModal = false" :image='image'></LazyModal>
    </transition> -->

    <VolverButton />
    <LazyFooter />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  head: {
    title: 'Persona Diseño | Porfolio - Dia 5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Porfolio Julieta Mercerat, Dia 5'
      }
    ],
  },
  transition: "page",
  data() {
    return {
      show: true,
      isActive: '',
      lastFotoRed: false,
      showModal: false,
      // image: null,
      images : [
        {
          id: 1,
          name: 'uno',
          href: require(`~/assets/img/proyectos/diacinco/1.jpg`)
        },
        {
          id: 2,
          name: 'dos',
          href: require(`~/assets/img/proyectos/diacinco/2.jpg`)
        },
        {
          id: 3,
          name: 'tres',
          href: require(`~/assets/img/proyectos/diacinco/3.jpg`)
        },
        {
          id: 4,
          name: 'cuatro',
          href: require(`~/assets/img/proyectos/diacinco/4.jpg`)
        },
        {
          id: 5,
          name: 'cinco',
          href: require(`~/assets/img/proyectos/diacinco/5.jpg`)
        },
        {
          id: 6,
          name: 'seis',
          href: require(`~/assets/img/proyectos/diacinco/6.jpg`)
        },
        {
          id: 7,
          name: 'siete',
          href: require(`~/assets/img/proyectos/diacinco/7.jpg`)
        },
        {
          id: 8,
          name: 'ocho',
          href: require(`~/assets/img/proyectos/diacinco/8.jpg`)
        },
        {
          id: 9,
          name: 'nueve',
          href: require(`~/assets/img/proyectos/diacinco/9.jpg`)
        },
        {
          id: 10,
          name: 'dies',
          href: require(`~/assets/img/proyectos/diacinco/10.jpg`)
        },
        {
          id: 11,
          name: 'once',
          href: require(`~/assets/img/proyectos/diacinco/11.jpg`)
        },
        {
          id: 12,
          name: 'doce',
          href: require(`~/assets/img/proyectos/diacinco/12.jpg`)
        },
        {
          id: 13,
          name: 'trece',
          href: require(`~/assets/img/proyectos/diacinco/13.jpg`)
        },
        {
          id: 14,
          name: 'quatorze',
          href: require(`~/assets/img/proyectos/diacinco/14.jpg`)
        },
        {
          id: 15,
          name: 'quinze',
          href: require(`~/assets/img/proyectos/diacinco/15.jpg`)
        },
        {
          id: 16,
          name: 'diesiseis',
          href: require(`~/assets/img/proyectos/diacinco/16.jpg`)
        },
        {
          id: 17,
          name: 'diesisiete',
          href: require(`~/assets/img/proyectos/diacinco/17.jpg`)
        },
        {
          id: 18,
          name: 'diesiocho',
          href: require(`~/assets/img/proyectos/diacinco/18.jpg`)
        },
        {
          id: 19,
          name: 'diesinueve',
          href: require(`~/assets/img/proyectos/diacinco/19.jpg`)
        },
        {
          id: 20,
          name: 'veinte',
          href: require(`~/assets/img/proyectos/diacinco/20.jpg`)
        }
      ],
      index: null
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

<style lang="postcss" scoped>

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

.component-fade-enter-active, .component-fade-leave-active {
  transition: all .2s ease;
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
