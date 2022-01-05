<template>
  <div>
    <div class="relative min-h-screen porfolio">
      <Navigation />
      <Lostresbotones />
      <div class="container relative grid w-full min-h-screen grid-cols-1 gap-1 mx-auto my-8 text-white lg:gap-2 lg:my-20 md:grid-cols-2 lg:grid-cols-3">

        <nuxt-link :to="localePath('/portfolio/dia-uno')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-1 hover:bg-gradient-to-br from-black to-gray-800 dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase "><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="1" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2021"></count></p>
          </div>
        </nuxt-link>

        <nuxt-link :to="localePath('/portfolio/dia-dos')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-2 dias-moove hover:bg-gradient-to-br from-red-600 to-redjuli hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-red-600 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="2" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2020"></count></p>
          </div>
        </nuxt-link>

        <nuxt-link :to="localePath('/portfolio/dia-tres')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-3 hover:bg-gradient-to-br from-blue-500 to-bluejuli hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-blue-900 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="3" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2021"></count></p>
          </div>
        </nuxt-link>

        <nuxt-link :to="localePath('/portfolio/dia-cuatro')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-4 hover:bg-gradient-to-br from-yellow-500 to-yellowjuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-opacity-25 bg-yellowjuli"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"> <span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="4" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2019"></count></p>
          </div>
        </nuxt-link>

        <nuxt-link :to="localePath('/portfolio/dia-cinco')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-5 hover:bg-gradient-to-br from-gray-900 to-black dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="5" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2020"></count></p>
          </div>
        </nuxt-link>

        <nuxt-link :to="localePath('/portfolio/dia-seis')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-6 hover:bg-gradient-to-br from-blue-500 to-bluejuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-blue-800 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="6" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2018"></count></p>
          </div>
        </nuxt-link>

        <!-- <nuxt-link :to="localePath('/portfolio/dia-siete')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-7 hover:bg-gradient-to-br from-red-600 to-redjuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-opacity-50 bg-redjuli"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="7" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2019"></count></p>
          </div>
        </nuxt-link> -->

        <!-- <nuxt-link :to="localePath('/portfolio/dia-ocho')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-8 hover:bg-gradient-to-br from-yellow-500 to-yellowjuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-yellow-600 bg-opacity-50"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="8" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2019"></count></p>
          </div>
        </nuxt-link> -->

        <!-- <nuxt-link :to="localePath('/portfolio/dia-nueve')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-9 hover:bg-gradient-to-br from-gray-900 to-black dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="9" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2017"></count></p>
          </div>
        </nuxt-link> -->

        <!-- <nuxt-link :to="localePath('/portfolio/dia-dies')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-10 hover:bg-gradient-to-br from-blue-500 to-bluejuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-blue-800 bg-opacity-50"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="10" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2017"></count></p>
          </div>
        </nuxt-link> -->

        <!-- <nuxt-link :to="localePath('/portfolio/dia-once')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-11 hover:bg-gradient-to-br from-red-600 to-redjuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-red-800 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="11" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2017"></count></p>
          </div>
        </nuxt-link> -->

        <!-- <nuxt-link :to="localePath('/portfolio/dia-doce')" class="relative transition duration-300 ease-in-out transform bg-center bg-cover bg-dia-12 hover:bg-gradient-to-br from-blue-600 to-bluejuli dias-moove hover:rotate-3 lg:hover:rotate-6">
          <div class="absolute inset-0 bg-blue-500 bg-opacity-25"></div>
          <div class="relative flex flex-col items-start h-full">
            <h2 class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"><span>{{ $t('D')}}</span><span>{{ $t('Í')}}</span><span>{{ $t('A')}}</span><span>{{ $t('R')}}</span> <count :to="12" class="text-xl ubuntu"></count></h2>
            <p class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"><count :to="2018"></count></p>
          </div>
        </nuxt-link> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Lostresbotones from '@/components/Lostresbotones.vue'
import Count from '@/components/Count.vue'

export default {
  components: { Navigation, Footer, Lostresbotones, Count},
  transition: {
    name: 'page',
    beforeEnter() {
      this.$i18n.finalizePendingLocaleChange()
    }
  },
  head: {
    title: 'Persona Portfolio | Porfolio de Julieta Mercerat',
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

<style lang="scss" scoped>

.dias-moove {
  $transitionTime: 200ms;

  span {
    transition: transform $transitionTime;
    transform-origin: bottom left;
    display: inline-block;

    &:nth-child(1) {
      transition-delay: calc(3*#{$transitionTime});
    }

    &:nth-child(2) {
      transition-delay: calc(2*#{$transitionTime});
    }

    &:nth-child(3) {
      transition-delay: calc(1*#{$transitionTime});
    }

    &:nth-child(4) {
      transition-delay: 0;
    }
  }

  &:hover {
    span {
      transform: rotate(12deg);

      &:nth-child(1) {
        transition-delay: 0ms;
      }

      &:nth-child(2) {
        transition-delay: calc(1*#{$transitionTime});
      }

      &:nth-child(3) {
        transition-delay: calc(2*#{$transitionTime});
      }

      &:nth-child(4) {
        transition-delay: calc(3*#{$transitionTime});
      }
    }
  }
}
</style>
