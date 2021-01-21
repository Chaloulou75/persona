<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-r">
    <Navigation />
    <lostresbotones />

    <div class="relative w-full min-h-screen">

      <div class="fixed left-0 z-50 flex flex-col items-center justify-center h-full ml-8 lg:ml-32">
        <a href="/CV_Julieta_Mercerat.pdf" download="" target="_blank" class="inline-flex items-center justify-center px-5 py-3 mb-6 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform rotate-45 border-4 border-gray-700 shadow-xl hover:bg-bluejuli hover:text-white hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none">
          <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Descargar CV
        </a>
      </div>

      <div class="grid w-full min-h-screen grid-flow-col grid-cols-3 gap-4">
        <div class="flex items-center justify-between w-full">
          <div class="transform -rotate-90">
            <div class="flex flex-row-reverse items-center justify-around mb-auto">
              <div class="mr-4 text-lg font-semibold transform rotate-90 text-redjuli">Info</div>
              <div class="items-center mx-auto text-sm font-medium text-redjuli">Buenos Aires, Argentina <span class="ml-4">26 años // Nac. 06.04.1994</span></div>
              <div class="mr-4 transform rotate-90">
                <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/logoubi.png" class="object-contain h-5">
              </div>
            </div>
          </div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit inventore est tenetur reiciendis ad tempora iure, minima blanditiis labore, esse reprehenderit laboriosam magni veritatis vero ipsam. Ipsam, rem animi.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit inventore est tenetur reiciendis ad tempora iure, minima blanditiis labore, esse reprehenderit laboriosam magni veritatis vero ipsam. Ipsam, rem animi.</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Persona Diseño | Resume Julieta Mercerat',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Resume de Julieta Mercerat'
      }
    ],
  },
  transition: "page",

};
</script>

<style scoped>

</style>
