<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-r">
    <Navigation />
    <lostresbotones />
    <div class="relative w-full min-h-screen">
      <div class="fixed left-0 flex flex-col items-center justify-center h-full ml-8 lg:ml-32">
        <a href="/CV_Julieta_Mercerat.pdf" download="" target="_blank" class="inline-flex items-center justify-center px-5 py-3 mb-6 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform rotate-45 border-4 border-gray-700 shadow-xl hover:bg-bluejuli hover:text-white hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none">
          <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Descargar CV
        </a>
      </div>

      <div class="flex flex-col items-center max-w-lg mx-auto my-16">
        <div class="flex flex-col items-start">
            <h1 class="text-lg font-semibold text-redjuli">Info</h1>
            <div class="flex items-baseline py-4">
              <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/logoubi.png" class="object-contain h-5">
              <p class="px-6 font-medium leading-10 text-redjuli">Buenos Aires, Argentina <br>
              26 años <span class="ml-2">// Nac. 06.04.1994</span> </p>
            </div>
        </div>

        <div class="mt-6 ml-6">
          <h2 class="py-4 text-lg font-hairline text-center uppercase text-redjuli">// experienca laboral</h2>
        </div>

        <!-- Para hacer las lineas de borde -->
        <div class="max-w-sm px-2 mt-2 ml-auto border-l-2 border-gray-400 border-dashed">
        <div class="flex flex-col justify-end space-y-8 border-l-2 border-gray-400 border-dashed">

          <div class="flex items-start ">

            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700 ">2017/ <br>2020</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline text-gray-600 uppercase ">SANTISTA</h2>
              <p class="pb-4 text-xs font-medium text-gray-700">Responsable del área de Producto Jeanswear.</p>
              <p class="pb-4 text-xs font-medium text-gray-700">Asistente de producto jeanswear.</p>
              <p class="pb-4 text-xs font-medium text-gray-700">Pasantía en área de jeanswear.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2016/ <br>2017</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline text-gray-600 uppercase ">BRANDO</h2>
              <p class="text-xs font-medium text-gray-700">Atención al público en tienda de indumentaria masculina.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2015/ <br>2016</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline text-gray-600 uppercase">FANATICOS</h2>
              <p class="text-xs font-medium text-gray-700">Responsable de caja en tienda de indumentaria deportiva.</p>
            </div>
          </div>

          <!-- educacion -->
          <h2 class="py-4 pl-6 text-lg font-hairline uppercase text-redjuli">// EDUCACIÓN</h2>
          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2019/ <br>HOY</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-gray-600">Universidad Argentina de la Empresa (UADE)</h2>
              <p class="text-xs font-medium text-gray-700">Lic. Diseño textil e indumentaria.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2019</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-gray-600">Universidad de Buenos Aires (UBA)</h2>
              <p class="pb-4 text-xs font-medium text-gray-700">Sistemas materiales // Biofabricación</p>
              <p class="pb-4 text-xs font-medium text-gray-700">Experimentación con bioaglomerados fúngicos.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2018</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-gray-600">Facultad Latinoamericana de Ciencias Sociales (FLACSO)</h2>
              <p class="text-xs font-medium text-gray-700">Cultura potente, Curso de posgrado en cultura y comunicación.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-gray-700">2015</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/CURSOR3.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-gray-600">Universidad de Monterrey (UDEM)</h2>
              <p class="text-xs font-medium text-gray-700">Semestre de intercambio de Lic. en diseño textil e indumentaria.</p>
            </div>
          </div>

          <!-- seminarios -->

          <h2 class="py-4 pl-10 text-lg font-hairline uppercase text-redjuli">// CURSOS Y SEMINARIOS</h2>
          <div class="pb-2 pl-8">
            <p class="pb-4 text-xs font-medium text-gray-500">COLOR, MATERIALS & FINISH (CMF)</p>
            <p class="pb-4 text-xs font-medium text-gray-500">CURSO DE BIOPLÁSTICOS (Biofabricación)</p>
            <p class="text-xs font-medium text-gray-500 ">EXPERIMENTACIONES TEXTILES (SHIBORI Y TYE DYE)</p>
          </div>

        </div>
        </div>
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
