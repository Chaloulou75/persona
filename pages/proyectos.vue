<template>
    <div class="min-h-screen proyectos">
      <Navigation />
      <div class="relative grid w-full min-h-screen grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4">
        <Lostresbotones />
        <div class="flex flex-col items-start transition duration-300 ease-in-out bg-center bg-cover bg-dia-1 hover:bg-gradient-to-br from-black to-bluejuli">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">1</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start transition duration-300 ease-in-out bg-center bg-cover bg-dia-2 hover:bg-gradient-to-br from-red-600 to-redjuli">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">2</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start transition duration-300 ease-in-out bg-center bg-cover bg-dia-3 hover:bg-gradient-to-br from-bluejuli to-gray-800">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">3</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start transition duration-300 ease-in-out bg-center bg-cover bg-dia-4 hover:bg-gradient-to-br from-yellowjuli to-yellowjuli">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">4</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-5">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">5</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-1">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">6</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-2">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">7</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">8</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-4">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">9</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-5">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">10</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-1">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">11</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
        <div class="flex flex-col items-start bg-center bg-cover bg-dia-2">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">Dia <span class="text-xl">12</span></h2>
          <p class="px-4 text-lg">2020</p>
        </div>
      </div>
    </div>
</template>

<script>
import Lostresbotones from '~/components/Lostresbotones';

export default {
  transition: "page",
  components : {
    Lostresbotones
  }

};
</script>

<style scoped>

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
