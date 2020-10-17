<template>
    <div class="min-h-screen proyectos">
      <Navigation />
      <div class="relative ">
        <h1 class="w-full py-4 text-lg text-center">Proyectos page</h1>
        <Lostresbotones />
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
