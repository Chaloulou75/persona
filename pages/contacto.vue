<template>
  <div class="min-h-screen">
    <Navigation />
      <div class="relative w-full text-gray-900">
        <lostresbotones />

        <div id="contacto" class="flex items-center justify-center min-h-screen mb-auto" data-scroll>
          <div class="relative w-full h-screen p-2 overflow-hidden">
            <img
              src="~assets/img/paginaN/PAGINAN.png"
              alt="resume"
              class="absolute inset-0 object-cover w-full h-full"
            />
            <div class="absolute inset-0 bg-gray-200 bg-opacity-25"></div>
            <div class="relative flex flex-col items-center justify-center h-full">
              <a class="inline-flex items-center justify-center px-5 py-3 mb-6 text-xl font-medium leading-6 tracking-wider text-indigo-700 uppercase transition duration-150 ease-in-out bg-blue-100 border border-gray-900 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline">
                +54 11 111 222 11
              </a>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
import VueTypedJs from 'vue-typed-js';
import Lostresbotones from '~/components/Lostresbotones';

export default {
  transition: "page",
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
