<template>
  <div class="border-b-2 border-blue-400 border-dashed">
    <nav class="flex justify-between w-full px-8 py-4 font-hairline bg-transparent text-copy-primary">

      <nuxt-link to='/' class="tracking-wider uppercase transition duration-500 ease-in-out transform hover:translate-x-2">Persona</nuxt-link>

      <button
        class="outline-none mobile-hamburger lg:hidden focus:outline-none hover:text-copy-primary"
        @click="show = !show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6">
          <li class="uppercase transition duration-500 ease-in-out transform hover:translate-x-2">
            <nuxt-link to="/proyectos">PROYECTOS</nuxt-link>
          </li>
          <li class="uppercase transition duration-500 ease-in-out transform hover:translate-x-2">
            <nuxt-link to="/sobremi">SOBRE MI</nuxt-link>
          </li>

        </ul>
      </div>
    </nav>

    <transition name="fade" class="mobile-menu lg:hidden">
        <ul class="flex flex-col items-start px-8 space-y-2 text-sm" v-if="show">
          <li class="uppercase transition duration-500 ease-in-out transform hover:translate-x-2"><nuxt-link to="/proyectos">Proyectos</nuxt-link></li>

          <li class="uppercase transition duration-500 ease-in-out transform hover:translate-x-2"><nuxt-link to="/sobremi">Sobre mi</nuxt-link></li>

        </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
