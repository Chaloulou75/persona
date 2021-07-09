<template>
  <div class="relative bg-white">
    <Navigation />
    <lostresbotones />
    <main class="relative w-full text-gray-900">

      <h1 class="py-4 text-2xl font-semibold tracking-widest text-center uppercase">{{$t('about')}}</h1>

      <nuxt-link :to="localePath('/contacto')" class="fixed z-20 h-auto px-4 py-2 tracking-widest text-gray-700 uppercase transition duration-300 ease-in-out transform rotate-45 border-4 shadow-lg hover:font-semibold border-yellowjuli left-1 lg:left-1/4 bottom-1/3 lg:bottom-1/4 hover:text-white hover:border-white focus:outline-none hover:bg-yellowjuli hover:-rotate-45">{{$t('contactme')}}</nuxt-link>

      <nuxt-link :to="localePath('/resume')" class="fixed z-20 h-auto px-4 py-2 tracking-widest text-gray-700 uppercase transition duration-300 ease-in-out transform -rotate-45 border-4 shadow-lg hover:font-semibold border-bluejuli right-1 lg:right-1/4 top-1/3 lg:top-1/3 hover:text-white hover:border-white focus:outline-none hover:bg-bluejuli hover:rotate-45">CURRICULUM
      </nuxt-link>

      <div class="z-40 flex items-center justify-center w-full h-auto my-4 lg:min-h-screen respContainer">
        <iframe src="https://player.vimeo.com/video/502370696" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>

      <transition name="component-fade" appear v-on:appear="switchLocale()" >

      <template v-if="$i18n.locale ==='fr'">
        <div class="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto my-8" v-if="languageActive">

          <div class="px-4 py-4 mr-auto" data-scroll>
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// Qui es-tu?</h2>
            <vue-typed-js :strings="['b // Salut! Moi, c’est Julieta, une designer hyperactive…', 'b // Bonjour, je m’appelle Julieta Mercerat. En tant que designer, je crois en la capacité de créer un environnement contemporain, qui accompagne les personnes dans le progrès et le développement des sociétés, en associant l’efficacité et la responsabilité. Je crois au travail d’équipe, à la curiosité et à l’expérience comme moteurs principaux.']" :startDelay="1000" :backDelay="100" :backSpeed="20" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>

            <vue-typed-js :strings="['a// Pourquoi Persona?']" :startDelay="14000" :typeSpeed="20" :showCursor="false" >
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// Bon, que dire…', 'b// Le choix de ce nom est basé sur une réflexion autour du design et plus particulièrement du design de mode. Cette réflexion tend à percevoir le design comme une manifestation sociologique d’une culture globale, orientée sur l’image. C’est-à-dire, comment l’instant présent se construit par un système de relations immédiates et superficielles, pas pour autant intéressantes. Les individus réussissent à construire des systèmes de communication, des langages complexes, où les personnes deviennent personnages qui communiquent.']" :startDelay="16000" :typeSpeed="20" :backSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>

            <vue-typed-js :strings="['a// Comment te décrirais-tu?']" :startDelay="34000" :typeSpeed="20" :showCursor="false" >
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// Si vous souhaitez naviguer sur ce site, je vais vous raconter ce qui m’inspire à chaque instant, lorsque je commence un nouveau projet.']" :startDelay="35000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['Il y a beaucoup de façons d’observer et de comprendre le quotidien. Quand je commence à travailler un sujet, j’ai tendance à penser aux personnes. C’est pour moi une source d’inspiration sans limite. Selon comment je me sens à chaque moment, je m’inspire de différentes manières.']" :startDelay="39000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['Tout au long de ce site je vais essayer de vous montrer un peu de ce que j’ai recueilli avec le temps. J’espère que vous comprendrez ce qui a retenu mon attention à chaque occasion.']" :startDelay="48000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <nuxt-link :to="localePath('/portfolio')">
            <div class="px-8 py-4 mx-auto my-4 mb-auto text-xl font-semibold tracking-wider text-white transition duration-75 bg-gray-900 ring-4 ring-gray-200 hover:ring-gray-900 cursor-mano hover:bg-white hover:text-gray-900 focus:outline-none" >
              {{ $t('seeporfolio')}}
            </div>
          </nuxt-link>
        </div>
      </template>

      <template v-else >
        <div class="flex flex-col items-center justify-center max-w-sm min-h-screen mx-auto my-8" v-if="languageActive">
          <div class="px-4 py-4 mr-auto" data-scroll>
            <h2 class="py-4 text-sm font-semibold text-gray-900">a// ¿Quién sos? </h2>

            <vue-typed-js :strings="['b // soy Julieta, una diseñadora muy manija ...', 'b // Hola, soy Julieta Mercerat. Como diseñadora creo en la capacidad de la disciplina de crear un entorno contemporáneo. Que acompañe a las personas en el avance y desarrollo de las sociedades, uniendo eficiencia y responsabilidad. Creo en el trabajo en equipo, la curiosidad y la experiencia como principales motores generadores.']" :startDelay="1000" :backDelay="100" :backSpeed="20" :typeSpeed="20" :showCursor="false">
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>

            <vue-typed-js :strings="['a// ¿Por qué Persona?']" :startDelay="14000" :typeSpeed="20" :showCursor="false" >
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// bueno, que decirrr...', 'b// La elección del nombre está dada por una perspectiva sobre el diseño, más particularmente de la indumentaria. La misma consiste en entender al diseño como manifestación sociológica de una cultura global, orientada hacia el mundo de las imágenes. Es decir, como la actualidad estaría construída por un sistema de relaciones mediato y superficial (aunque no por ello menos interesante). Los individuos logran construir sistemas de comunicación, lenguajes complejos, donde las personas se convierten en personajes que comunican.']" :startDelay="16000" :typeSpeed="20" :backSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['a// ¿Cómo te identificarías?']" :startDelay="34000" :typeSpeed="20" :showCursor="false" >
              <h2 class="py-4 text-sm font-semibold text-left text-gray-900 typing"></h2>
            </vue-typed-js>

            <vue-typed-js :strings="['b// Si quieren navegar en este sitio, voy a contarles un poco sobre qué es lo que me detiene e intriga a cada momento, a la hora de empezar un proyecto.']" :startDelay="35000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['A la hora de diseñar, tiendo a inclinarme (por no decir a caer estrepitosamente) a pensar en las personas. Estos sujetos increíbles, misteriosos, que pueden aportar un sin fin de inspiraciones. Hay muchas maneras de observar, de entender el día a día. Según como me encuentro cada momento, suelo inspirarme en el mundo corriente de diferentes maneras...']" :startDelay="39000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <div class="px-4 py-4 mb-auto mr-auto" data-scroll>
            <vue-typed-js :strings="['A lo largo de este sitio, intentaré mostrarles un poco de lo que fui recolectando con el pasar de los días. Así, esperaré que entiendan que me detuvo en cada ocasión...']" :startDelay="48000" :typeSpeed="20" :showCursor="false" >
              <p class="text-sm text-justify text-gray-600 typing"></p>
            </vue-typed-js>
          </div>

          <nuxt-link :to="localePath('/portfolio')">
            <div class="px-8 py-4 mx-auto my-4 mb-auto text-xl font-semibold tracking-wider text-white transition duration-75 bg-gray-900 ring-4 ring-gray-200 hover:ring-gray-900 cursor-mano hover:bg-white hover:text-gray-900 focus:outline-none" >
              {{ $t('seeporfolio')}}
            </div>
          </nuxt-link>
        </div>
      </template>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  head: {
    title: 'Persona Portfolio | Sobre Mi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Curriculum de Julieta Mercerat'
      }
    ],
  },
  transition: {
    name: 'page',
    beforeEnter() {
      this.$i18n.finalizePendingLocaleChange()
    }
  },
  data() {
    return {
      languageActive: true,
    }
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
  methods: {
    switchLocale() {
      this.languageActive = false
      this.$i18n.locale = this.$i18n.locale
      setTimeout(() => {
        this.languageActive = true
      }, 1)
    }
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
