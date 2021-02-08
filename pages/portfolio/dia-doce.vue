<template>
  <div class="relative">

    <client-only>
      <v-gallery :images="images" :index="index" @close="index = null" class="cursor-mano" />
    </client-only>

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
      <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-bluejuli cursor-mano" @click="show = !show">

        <div class="relative w-48 h-48 mt-auto overflow-hidden bg-center bg-cover bg-cuadro-12">
        </div>

        <div class="flex items-center justify-center mt-8 space-x-1">
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
          <div class="px-1 py-1 border border-white"></div>
        </div>

        <div class="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto mt-4 text-sm text-center text-white lg:w-1/2">
          <p class="pb-6">Este día me concentré en los microorganismos vivos y como se relacionan entre ellos, cuales son los enlaces que generan para la construcción del sistema.
          </p>
          <p class="uppercase">TRABAJO DE DESARROLLO DE COLECCIÓN DE ESTAMPAS TEXTILES.</p>
        </div>
      </div>


      <transition name="component-fade" mode="out-in">
        <!-- right screen 1 -->
        <div key="right1" v-if="show" @click="show = !show" @mouseenter="show = !show" class="flex flex-col w-full h-screen p-4 bg-white lg:w-1/2 cursor-mano">
          <div class="flex items-center justify-center w-full h-48">
            <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
            </div>
            <div class="text-sm uppercase text-bluejuli">Tendencia </div>
          </div>
          <div class="flex justify-around">
            <div class="flex items-center justify-center w-full h-48">
              <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
              </div>
              <div class="text-sm uppercase text-bluejuli">Textile pattern </div>
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
              <div class="text-sm uppercase text-bluejuli">Inspiración en lo natural</div>
            </div>
            <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
            </div>
          </div>

          <div class="w-2/3 px-2 ml-auto text-2xl text-right uppercase lg:text-4xl text-bluejuli">NATURAL ORIGIN
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

            <div id="ultima12" @click='toggleColorFoto'>
              <img loading="lazy" alt="nueve" src="~assets/img/proyectos/diadoce/9.jpg" class="object-cover w-full h-auto shadow-lg lg:object-contain lg:h-screen cursor-mano">
            </div>
        </div>
      </transition>
    </div>

    <!-- <transition name="component-fade" mode="out-in">
      <modal v-if="showModal" @close="showModal = false" :image='image'></modal>
    </transition> -->

    <VolverButton />
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  head: {
    title: 'Persona Diseño | Porfolio - Dia 12',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Porfolio Julieta Mercerat, Dia 12'
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
          href: require(`~/assets/img/proyectos/diadoce/1.jpg`)
        },
        {
          id: 2,
          name: 'dos',
          href: require(`~/assets/img/proyectos/diadoce/2.jpg`)
        },
        {
          id: 3,
          name: 'tres',
          href: require(`~/assets/img/proyectos/diadoce/3.jpg`)
        },
        {
          id: 4,
          name: 'cuatro',
          href: require(`~/assets/img/proyectos/diadoce/4.jpg`)
        },
        {
          id: 5,
          name: 'cinco',
          href: require(`~/assets/img/proyectos/diadoce/5.jpg`)
        },
        {
          id: 6,
          name: 'seis',
          href: require(`~/assets/img/proyectos/diadoce/6.jpg`)
        },
        {
          id: 7,
          name: 'siete',
          href: require(`~/assets/img/proyectos/diadoce/7.jpg`)
        },
        {
          id: 8,
          name: 'ocho',
          href: require(`~/assets/img/proyectos/diadoce/8.jpg`)
        },
        {
          id: 9,
          name: 'nueve',
          href: require(`~/assets/img/proyectos/diadoce/9.jpg`)
        },
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
  transition: all .4s ease;
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
