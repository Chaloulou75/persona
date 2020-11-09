<template>
  <div>
    <div class="relative min-h-screen porfolio">
      <Navigation />
      <Lostresbotones />
      <div class="container relative grid w-full min-h-screen grid-cols-1 gap-1 mx-auto my-8 text-white lg:gap-2 lg:mt-20 md:grid-cols-2 lg:grid-cols-3">

        <nuxt-link to="/portfolio/dia-uno" class="relative flex flex-col items-start text-white transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-1 hover:bg-gradient-to-br from-gray-900 to-black hover:-rotate-1 lg:hover:-rotate-3">
            <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">1</span></h2>
            <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-dos" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-2 hover:bg-gradient-to-br from-red-600 to-redjuli hover:rotate-1 lg:hover:rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">2</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-tres" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-3 hover:bg-gradient-to-br from-blue-500 to-bluejuli hover:-rotate-1 lg:hover:-rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">3</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-cuatro" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-4 hover:bg-gradient-to-br from-yellow-500 to-yellowjuli hover:rotate-1 lg:hover:rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">4</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-cinco" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-5 hover:bg-gradient-to-br from-gray-900 to-black hover:-rotate-1 lg:hover:rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">5</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-seis" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-6 hover:bg-gradient-to-br from-blue-500 to-bluejuli hover:rotate-1 lg:hover:-rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">6</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-siete" class="relative flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-7 hover:bg-gradient-to-br from-red-600 to-redjuli hover:-rotate-1 lg:hover:rotate-3">
            <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">7</span></h2>
            <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-ocho" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-8 hover:bg-gradient-to-br from-yellow-500 to-yellowjuli hover:rotate-1 lg:hover:-rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">8</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-nueve" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-9 hover:bg-gradient-to-br from-gray-900 to-black hover:-rotate-1 lg:hover:-rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">9</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-dies" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-10 hover:bg-gradient-to-br from-blue-500 to-bluejuli hover:rotate-1 lg:hover:rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">10</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-once" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-11 hover:bg-gradient-to-br from-red-600 to-redjuli hover:-rotate-1 lg:hover:-rotate-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">11</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>

        <nuxt-link to="/portfolio/dia-doce" class="relative flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-5 hover:bg-gradient-to-br from-yellow-500 to-yellowjuli hover:rotate-1 lg:hover:rotate-3">
            <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">12</span></h2>
            <p class="px-4 text-lg">2020</p>
        </nuxt-link>

      </div>

      </div>
      <Footer />
    </div>
</template>

<script>
import Lostresbotones from '~/components/Lostresbotones';

export default {
  transition: "page",
  components : {
    Lostresbotones
  },
  head: {
    title: 'Persona Diseño | Porfolio de Julieta Mercerat',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Porfolio de Julieta Mercerat'
      }
    ],
  }

};
</script>

<style scoped>
.numberBig, .dia-uno{
  font-family: 'Ubuntu', 'Sorts Mill Goudy', 'Montserrat', sans-serif;
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

</style>
