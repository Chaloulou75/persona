<template>
  <div class="relative bg-white">
    <Navigation />
    <lostresbotones />
      <div class="relative w-full text-gray-900">

        <h1 class="py-4 text-2xl font-semibold tracking-widest text-center uppercase">sobre mi</h1>

        <nuxt-link to="/contacto" class="fixed z-40 h-auto px-4 py-2 tracking-widest text-gray-700 uppercase transition duration-300 ease-in-out transform rotate-45 border-2 border-gray-600 rounded shadow-lg left-1 lg:left-1/4 bottom-1/3 lg:bottom-1/4 hover:text-white hover:border-white focus:outline-none hover:bg-yellowjuli hover:-rotate-45 hover:font-semibold">Contacto</nuxt-link>

        <nuxt-link to="/resume" class="fixed z-40 h-auto px-6 py-2 tracking-widest text-gray-700 uppercase transition duration-300 ease-in-out transform -rotate-45 border-2 border-gray-600 rounded shadow-lg right-1 lg:right-1/4 top-1/3 lg:top-1/4 hover:text-white hover:border-white focus:outline-none hover:bg-bluejuli hover:rotate-45 hover:font-semibold">Resume
        </nuxt-link>

        <div class="flex items-center justify-center w-full h-auto my-4 lg:min-h-screen respContainer">
          <iframe src="https://player.vimeo.com/video/502370696" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

        <div class="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto my-8">
          <div class="px-4 py-4 mr-auto" data-scroll>
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// Quien sos?</h2>

            <vue-typed-js :strings="['b // hola!! soy Julieta, una diseñadora muy manija ...', 'b // Hola, soy Julieta y como diseñadora creo en la capacidad de la disciplina de crear un entorno contemporáneo que acompañe a las personas en el avance y desarrollo de las sociedades uniendo eficiencia y responsabilidad. Creo en el trabajo en equipo, la curiosidad y la experiencia como principales motores generadores.']" :startDelay="1000" :backDelay="100" :backSpeed="20" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>

            <vue-typed-js :strings="['a// Porque Persona?']" :startDelay="14000" :typeSpeed="20" :showCursor="false">
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// bueno, que decirrr...', 'b// La elección está dada por una perspectiva sobre el diseño y más particularmente de la indumentaria que estuve indagando durante el último tiempo, la misma consiste en entender al diseño como manifestación sociológica de una cultura global orientada hacia el mundo de las imágenes, es decir, como en la actualidad con un sistema de relaciones mediato y superficial (aunque no por ello menos interesante) los individuos logran construir diversos sistemas de comunicación y lenguajes complejos, codificados al igual que el habla.']" :startDelay="16000" :typeSpeed="20" :backSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>

            <vue-typed-js :strings="['a// Como te identificarías?']" :startDelay="34000" :typeSpeed="20" :showCursor="false">
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// Si quieren navegar en este sitio, voy a contarles un poco sobre qué es lo que me detiene e intriga a cada momento, a la hora de empezar un proyecto.']" :startDelay="35000" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['A la hora de diseñar, tiendo a inclinarme (por no decir a caer estrepitosamente) a pensar en las personas, en estos sujetos increíbles, misteriosos, que pueden aportar un sin fin de disparadores. Hay muchas maneras de observarlos, de entenderlos, según el día en que me encuentre suelen despertar en mi diferentes sentidos..']" :startDelay="39000" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['A lo largo de este sitio, intentaré mostrarles un poco de lo que fui recolentando en el pasar de los días y así esperaré que entiendan que me detuvo en cada ocasión...']" :startDelay="48000" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <nuxt-link to="/portfolio">
            <div class="px-6 py-1 mx-auto my-4 mb-auto text-lg tracking-wider text-gray-800 transition duration-100 cursor-mano hover:bg-redjuli hover:text-white focus:outline-none" data-scroll>
              Para ver el Portfolio
            </div>
          </nuxt-link>
        </div>

        <div class="flex items-center justify-center min-h-screen" data-scroll>
          <div class="w-full mx-2 my-4 mb-auto lg:w-1/3">
            <img
              loading="lazy"
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

export default {
  head: {
    title: 'Persona Diseño | Sobre Mi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Curriculum de Julieta Mercerat'
      }
    ],
  },
  transition: "page",
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .3
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style scoped>

.respContainer {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.respContainer iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

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
