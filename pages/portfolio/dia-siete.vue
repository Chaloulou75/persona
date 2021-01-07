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
    <Lostresbotones />

      <!-- left screen -->
      <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-redjuli cursor-mano" @click="show = !show">

        <div class="relative w-48 h-48 mt-auto overflow-hidden bg-center bg-cover bg-cuadro-7">
        </div>

        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto mt-4 text-sm text-center text-white lg:w-2/3">
          <p class="pb-6">Que maravillosos los humanxs, con sus diversidades y rarezas. Me topé con uno y le pregunté: <br>
          - ¿Como definen el conjunto de los muchos universos, pero que co-existen dentro del propio?<br>
          - ¿El multiverso? - dijo riéndose el sujeto... -
          </p>
          <p class="uppercase">TRABAJO DE CREACIÓN DE IDENTIDAD DE MARCA, CONCEPTUALIZACIÓN Y SISTEMA DE COMERCIALIZACIÓN.</p>
        </div>
      </div>

      <!-- right screen 1 -->
      <div name="page" v-if="show" @click="show = !show" class="flex flex-col w-full h-screen p-4 bg-white lg:w-1/2 cursor-mano">
        <div class="flex items-center justify-center w-full h-48">
          <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
          </div>
          <div class="text-sm uppercase text-bluejuli">Brand Identity</div>
        </div>
        <div class="flex justify-around">
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Streetwear</div>
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
            <div class="text-sm uppercase text-bluejuli">Retail y branding</div>
          </div>
          <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
          </div>
        </div>

        <div class="w-2/3 px-2 ml-auto text-2xl text-right uppercase lg:text-4xl text-bluejuli">LOS SISTEMAS
        </div>
      </div>

      <!-- right screen 2 -->
      <div name="page" v-else class="relative flex flex-col w-full h-screen p-2 space-y-8 overflow-y-scroll lg:w-1/2 scrollhidden"
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

          <div :id="image.name"
              v-for="image in images"
              :key="image.id"
              class="flex items-center justify-center w-full h-auto shadow-lg cursor-mano lg:min-h-screen"
          >
          <img loading="lazy"
                :alt="image.name"
                :src="image.src"
                class="object-cover w-full h-auto lg:object-contain lg:h-screen"
                @click="openModal(image)"
          >
          </div>

          <div id="ultima7" class="flex items-center justify-center w-full h-auto shadow-lg lg:min-h-screen cursor-mano" @click='toggleColorFoto'>
            <img loading="lazy" alt="veinteseis" src="~assets/img/proyectos/diasiete/26.jpg" class="object-cover w-full h-auto lg:object-contain lg:h-screen">
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
import ScrollOut from "scroll-out";

export default {
  head: {
    title: 'Persona Diseño | Porfolio - Dia 7',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Porfolio Julieta Mercerat, Dia 7'
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
      image: null,
      images : [
        {
          id: 1,
          name: 'uno',
          src: require(`~/assets/img/proyectos/diasiete/1.jpg`)
        },
        {
          id: 2,
          name: 'dos',
          src: require(`~/assets/img/proyectos/diasiete/2.jpg`)
        },
        {
          id: 3,
          name: 'tres',
          src: require(`~/assets/img/proyectos/diasiete/3.jpg`)
        },
        {
          id: 4,
          name: 'cuatro',
          src: require(`~/assets/img/proyectos/diasiete/4.jpg`)
        },
        {
          id: 5,
          name: 'cinco',
          src: require(`~/assets/img/proyectos/diasiete/5.jpg`)
        },
        {
          id: 6,
          name: 'seis',
          src: require(`~/assets/img/proyectos/diasiete/6.jpg`)
        },
        {
          id: 7,
          name: 'siete',
          src: require(`~/assets/img/proyectos/diasiete/7.jpg`)
        },
        {
          id: 8,
          name: 'ocho',
          src: require(`~/assets/img/proyectos/diasiete/8.jpg`)
        },
        {
          id: 9,
          name: 'nueve',
          src: require(`~/assets/img/proyectos/diasiete/9.jpg`)
        },
        {
          id: 10,
          name: 'dies',
          src: require(`~/assets/img/proyectos/diasiete/10.jpg`)
        },
        {
          id: 11,
          name: 'once',
          src: require(`~/assets/img/proyectos/diasiete/11.jpg`)
        },
        {
          id: 12,
          name: 'doce',
          src: require(`~/assets/img/proyectos/diasiete/12.jpg`)
        },
        {
          id: 13,
          name: 'trece',
          src: require(`~/assets/img/proyectos/diasiete/13.jpg`)
        },
        {
          id: 14,
          name: 'quatorze',
          src: require(`~/assets/img/proyectos/diasiete/14.jpg`)
        },
        {
          id: 15,
          name: 'quinze',
          src: require(`~/assets/img/proyectos/diasiete/15.jpg`)
        },
        {
          id: 16,
          name: 'diesiseis',
          src: require(`~/assets/img/proyectos/diasiete/16.jpg`)
        },
        {
          id: 17,
          name: 'diesisiete',
          src: require(`~/assets/img/proyectos/diasiete/17.jpg`)
        },
        {
          id: 18,
          name: 'diesiocho',
          src: require(`~/assets/img/proyectos/diasiete/18.jpg`)
        },
        {
          id: 19,
          name: 'diesinueve',
          src: require(`~/assets/img/proyectos/diasiete/19.jpg`)
        },
        {
          id: 20,
          name: 'veinte',
          src: require(`~/assets/img/proyectos/diasiete/20.jpg`)
        },
        {
          id: 21,
          name: 'veintiuno',
          src: require(`~/assets/img/proyectos/diasiete/21.jpg`)
        },
        {
          id: 22,
          name: 'veintidos',
          src: require(`~/assets/img/proyectos/diasiete/22.jpg`)
        },
        {
          id: 23,
          name: 'veintitres',
          src: require(`~/assets/img/proyectos/diasiete/23.jpg`)
        },
        {
          id: 24,
          name: 'veinticuatro',
          src: require(`~/assets/img/proyectos/diasiete/24.jpg`)
        },
        {
          id: 25,
          name: 'veinticinco',
          src: require(`~/assets/img/proyectos/diasiete/25.jpg`)
        },
        {
          id: 26,
          name: 'veintiseis',
          src: require(`~/assets/img/proyectos/diasiete/26.jpg`)
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
