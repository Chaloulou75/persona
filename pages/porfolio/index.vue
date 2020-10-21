<template>
  <div>
    <div class="min-h-screen porfolio">
      <Navigation />
      <div class="relative grid w-full min-h-screen grid-cols-1 mt-6 text-white lg:mt-20 md:grid-cols-2 lg:grid-cols-4">
        <Lostresbotones />
        <nuxt-link to="/porfolio/dia-uno" class="relative flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-1 hover:bg-gradient-to-br from-black to-bluejuli">
            <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">1</span></h2>
            <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-2 hover:bg-gradient-to-br from-red-600 to-redjuli">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">2</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-3 hover:bg-gradient-to-br from-bluejuli to-gray-800">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">3</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-4 hover:bg-gradient-to-br from-yellow-400 to-yellowjuli">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">4</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-5 hover:bg-gradient-to-br from-gray-900 to-black">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">5</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-1">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">6</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-2">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">7</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-3">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">8</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-4">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">9</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-5">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">10</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-1">
          <h2 class="px-4 py-4 text-3xl font-bold uppercase">DÍA <span class="text-xl numberBig">11</span></h2>
          <p class="px-4 text-lg">2020</p>
        </nuxt-link>
        <nuxt-link to="/porfolio/dia-uno" class="flex flex-col items-start bg-center bg-cover bg-dia-2">
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
