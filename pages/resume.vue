<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-r">
    <Navigation />
    <div class="relative w-full min-h-screen">
    <lostresbotones />
    <div class="absolute left-0 flex flex-col items-center justify-center h-full">
      <a href="/CV_Julieta_Mercerat.pdf" download="" target="_blank" class="inline-flex items-center justify-center px-5 py-3 mb-6 text-lg font-medium leading-6 tracking-wider text-gray-600 uppercase transition duration-150 ease-in-out transform rotate-45 border-4 border-gray-500 rounded-lg shadow-xl hover:bg-bluejuli hover:text-white hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none">
        <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Descargar CV
      </a>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: "page",
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
