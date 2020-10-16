<template>
  <div class="bg-white ">
    <Navigation />
      <div class="relative w-full text-gray-900">

        <h1 class="py-4 text-2xl font-semibold tracking-widest text-center uppercase ">sobre mi</h1>

        <lostresbotones />

        <div class="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto mt-8" data-scroll>
          <div class="px-4 py-4 mr-auto">
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// Quien sos?</h2>

            <vue-typed-js :strings="['SOY PERSONA, LA DIOSA DE TODAS LAS PERSONAS','b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis ^500 sint adipisci dolorem odio architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :backDelay="100" :backSpeed="20" :typeSpeed="30">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto">
            <h2 class="py-4 text-sm font-semibold text-left text-gray-900">
              a// Porque Persona?
            </h2>

            <vue-typed-js :strings="['Que sé yo!!', 'b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis sint adipisci dolorem odio ^500 architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :startDelay="15000" :typeSpeed="30" :backSpeed="20">
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

        <div id="resume" class="flex items-center justify-center min-h-screen" data-scroll>
          <div class="relative w-full h-screen p-2 overflow-hidden rounded-lg shadow-2xl ">
            <img
              src="~assets/img/resume.jpg"
              alt="resume"
              class="absolute inset-0 object-cover w-full h-full"
            />
            <div class="absolute inset-0 bg-gray-100 bg-opacity-0"></div>
            <div class="relative flex flex-col items-center justify-center h-full">
              <button class="inline-flex items-center justify-center px-5 py-3 mb-6 text-xl font-medium leading-6 tracking-wider text-indigo-700 uppercase transition duration-150 ease-in-out bg-blue-100 border border-gray-900 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline">
                <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                descargar resume
              </button>
              <svg class="w-16 h-16 text-yellowjuli" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
            </div>
          </div>
        </div>
      </div>
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
