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
  components : {
    Lostresbotones
  }

};
</script>

<style scoped>

</style>
