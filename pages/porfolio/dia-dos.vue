<template>
    <div class="min-h-screen dia-dos">
      <Navigation />
      <div class="relative flex justify-center w-full min-h-screen mx-auto ">
        <Lostresbotones />
        <div class="flex items-center justify-center w-full lg:w-1/2 bg-redjuli">
          <div class="w-1/3 h-48 border border-white">
          </div>
        </div>
        <div class="w-full bg-gray-100 lg:w-1/2">
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
