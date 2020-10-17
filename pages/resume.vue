<template>
    <div id="resume">

      <Navigation />

      <div class="relative w-full min-h-screen text-gray-900">

      <lostresbotones />

        <div class="flex items-center justify-center">
          <div class="relative w-full h-screen p-2 overflow-hidden">
            <img
              src="~assets/img/resume.jpg"
              alt="resume"
              class="absolute inset-0 object-cover w-full h-full"
            />
            <div class="absolute inset-0 bg-gray-200 bg-opacity-25"></div>
            <div class="relative flex flex-col items-center justify-center h-full">
              <a href="/CV_Julieta_Mercerat.pdf" download="" target="_blank" class="inline-flex items-center justify-center px-5 py-3 mb-6 text-lg font-medium leading-6 tracking-wider text-gray-900 uppercase transition duration-150 ease-in-out transform border border-gray-900 rounded-lg shadow-xl hover:bg-bluejuli hover:text-white hover:translate-y-2 hover:border-white focus:outline-none focus:shadow-outline-none">
                <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Descargar CV
              </a>
              <svg class="w-16 h-16 text-yellowjuli" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
            </div>
          </div>
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
