<template>
  <div class="bg-white ">
    <Navigation />
      <div class="relative w-full text-gray-900">

        <h1 class="py-4 text-2xl font-semibold tracking-widest text-center uppercase ">sobre mi</h1>

        <nuxt-link to="/contacto" class="fixed left-0 z-30 px-4 py-2 mt-32 ml-16 tracking-widest text-gray-700 uppercase transition duration-200 ease-in-out transform rotate-45 border border-gray-600 rounded hover:text-white hover:border-white lg:mt-64 lg:ml-48 focus:outline-none hover:bg-yellowjuli hover:-rotate-45 hover:font-semibold">Contacto</nuxt-link>

        <nuxt-link to="/resume" class="fixed right-0 z-30 px-6 py-2 mt-12 mr-16 tracking-widest text-gray-700 uppercase transition duration-200 ease-in-out transform -rotate-45 border border-gray-600 rounded hover:text-white hover:border-white lg:mt-20 lg:mr-48 focus:outline-none hover:bg-bluejuli hover:rotate-45 hover:font-semibold">Resume</nuxt-link>



        <lostresbotones />

        <div class="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto mt-8" data-scroll>
          <div class="px-4 py-4 mr-auto">
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// Quien sos?</h2>

            <vue-typed-js :strings="['SOY PERSONA, LA DIOSA DE TODAS LAS PERSONAS','b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis ^500 sint adipisci dolorem odio architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :startDelay="1000"  :backDelay="100" :backSpeed="20" :typeSpeed="30" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto">
            <h2 class="py-4 text-sm font-semibold text-left text-gray-900">
              a// Porque Persona?
            </h2>

            <vue-typed-js :strings="['Que sé yo!!', 'b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis sint adipisci dolorem odio ^500 architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :startDelay="15000" :typeSpeed="30" :backSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"> </p>
            </vue-typed-js>
          </div>
        </div>

        <div class="flex items-center justify-center min-h-screen" data-scroll>
          <div class="w-full mx-2 my-4 mb-auto lg:w-1/3">
            <img
              src="~assets/img/autorretrato-min.jpg"
              alt="autorretrato"
              class="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>


      </div>
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
import VueTypedJs from 'vue-typed-js';
import Lostresbotones from '~/components/Lostresbotones';

export default {
  components : {
    Lostresbotones
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .4
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style scoped>

[data-scroll] {
  transition: all 2s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-150px);
}

</style>
