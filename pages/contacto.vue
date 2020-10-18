<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-center bg-no-repeat bg-contain bg-pagina-n">
    <Navigation />
    <div class="relative w-full min-h-screen">
    <lostresbotones />
    </div>
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
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
