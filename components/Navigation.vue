<template>
  <div>
    <nav
      class="flex items-center justify-between w-full px-8 pt-4 pb-4 text-base font-medium text-gray-900 bg-transparent lg:text-xl"
    >
      <nuxt-link
        :to="localePath('/')"
        class="transition duration-500 transform hover:translate-x-2"
        >
        <!-- <img alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-10 lg:h-12"> -->
        <span class="sr-only">Home</span>
        <Logopersona class="h-10 lg:h-12" />
      </nuxt-link>

      <button
        class="outline-none mobile-hamburger lg:hidden focus:outline-none"
        @click="show = !show"
      >
        <svg
          v-if="!show"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <svg
          v-if="show"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <span class="sr-only">Open Menu</span>
      </button>

      <div class="hidden mr-40 font-medium desktop-menu lg:block">
        <ul class="flex justify-around space-x-12 text-gray-900">
          <li
            class="tracking-widest uppercase transition duration-500 ease-in-out transform hover:translate-x-2"
          >
            <nuxt-link :to="localePath('/portfolio')" >portfolio</nuxt-link>
          </li>
          <li
            class="tracking-widest uppercase transition duration-500 ease-in-out transform hover:translate-x-2"
          >
            <nuxt-link :to="localePath('/sobremi')" > {{ $t('about')}}</nuxt-link>
          </li>

          <li class="divide-x-2 divide-gray-600">
              <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="px-2 text-xs tracking-widest uppercase">
               {{ locale.name }}
              </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <transition name="fade" class="mobile-menu lg:hidden font-montserrat">
      <div class="z-20 lg:hidden">
        <ul
          class="flex flex-col items-start px-4 py-1 space-y-3 text-base font-semibold text-gray-900"
          v-if="show"
        >
          <li
            class="inline-block w-full px-2 tracking-wide uppercase transition duration-500 ease-in-out transform hover:translate-x-2"
          >
            <nuxt-link :to="localePath('/portfolio')">portfolio</nuxt-link>
          </li>

          <li
            class="inline-block w-full px-2 tracking-wide uppercase transition duration-500 ease-in-out transform hover:translate-x-2"
          >
            <nuxt-link :to="localePath('/sobremi')" >{{ $t('about')}}</nuxt-link>
          </li>
          <li class="inline-block w-full text-base tracking-widest text-gray-900 uppercase divide-x-2 divide-gray-600">
              <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="px-2">
               {{ locale.name }}
              </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Logopersona from './Logopersona.vue';

export default {
  name: 'Navigation',
  components: { Logopersona },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
      // .filter(i => i.code !== this.$i18n.locale)
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
