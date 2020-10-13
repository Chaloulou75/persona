<template>
  <div class="bg-white ">
      <Navigation />
      <div class="w-full min-h-screen text-gray-900 lg:ml-16 lg:border-l-2 lg:border-blue-400 lg:border-dashed ">

        <h1 class="py-4 text-lg font-semibold text-center uppercase text-redjuli">sobre mi</h1>

        <div class="flex items-center justify-center h-screen" data-scroll>
          <div class="w-full mx-2 my-4 lg:w-1/3">
            <img
              src="~assets/img/autorretrato.jpg"
              alt="autorretrato"
              class="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div class="flex flex-col items-center justify-center w-1/2 h-screen mx-auto lg:w-1/5" data-scroll>
          <div class="items-stretch px-4 py-2">
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// Quien sos?</h2>

            <p class="text-sm text-justify text-gray-600">
              <vue-typed-js :strings="['SOY PERSONA, LA DIOSA DE TODAS LAS PERSONAS','b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis ^500 sint adipisci dolorem odio architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :backDelay="100" :backSpeed="50">
              <p class="typing"></p>
              </vue-typed-js>
            </p>
          </div>

          <div class="items-stretch px-4 py-2">
            <h2 class="py-4 text-sm font-semibold text-left text-gray-900">a// Porque Persona?</h2>

            <vue-typed-js :strings="['Que sé yo!!', 'b//  Lorem ipsum dolor sit amet consectetur adipisicing elit. ^500 Eos sed deserunt accusamus quia officiis sint adipisci dolorem odio ^500 architecto iure accusantium at nisi commodi vitae, rem libero facere, omnis voluptatem.']" :startDelay="23000">
              <p class="text-sm text-justify text-gray-600 typing"> </p>
            </vue-typed-js>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
import VueTypedJs from 'vue-typed-js';

export default {
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

<style lang="scss" scoped>

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
