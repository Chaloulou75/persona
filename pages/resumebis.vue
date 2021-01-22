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

        <div class="container mx-auto my-12">
          <div class="grid grid-cols-8 grid-rows-6 gap-1 place-items-stretch">

            <div class="row-span-3">
              <div class="grid items-stretch h-full grid-cols-1 grid-rows-4 justify-items-center">
                <div class="self-end">
                  <h3 class="text-lg font-semibold transform -rotate-90 text-redjuli">Info</h3>
                </div>
                <div class="self-center">
                  <p class="font-medium transform -rotate-90 whitespace-nowrap text-redjuli">26 años // Nac. 06.04.1994</p>
                </div>
                <div class="self-center">
                  <p class="font-medium transform -rotate-90 whitespace-nowrap text-redjuli">Buenos Aires, Argentina</p>
                </div>
                <div class="self-start">
                  <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/logoubi.png" class="object-contain h-5">
                </div>
              </div>
            </div>

            <div class="items-center h-auto col-span-2 text-bluejuli">
              <div class="py-8 mt-auto text-4xl font-medium">Julieta Mercerat
              </div>
              <div class="mb-4 text-3xl font-medium text-bluejuli">Hola,
              </div>
              <div class="w-1/2 pb-6 text-base leading-normal">Soy una diseñadora apasionada y compromedita con este increible mundo de creación de personajes.</div>
            </div>
            <div class="col-span-3"></div>
            <div class="col-span-2 ">
              <img alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-12 mx-auto my-8 lg:h-24">
              <div class="px-6 text-xs text-bluejuli">
                Conceptos <br>
                Denim <br>
                Producto <br>
                Diseño
              </div>
            </div>

            <div></div>
            <div class="col-span-2 row-span-2">

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
              </div>
              </div>
            </div>

            <div class="bg-gray-100">11</div>
            <div class="bg-gray-100">12</div>
            <div class="bg-gray-100">13</div>
            <div class="bg-gray-100">14</div>

            <div class="bg-gray-100">16</div>

            <div class="bg-gray-100">19</div>
            <div class="bg-gray-100">20</div>
            <div class="bg-gray-100">21</div>
            <div class="bg-gray-100">22</div>
            <div class="bg-gray-100">23</div>
            <div class="bg-gray-100">24</div>
            <div class="bg-gray-100">25</div>
            <div class="bg-gray-100">26</div>
            <div class="bg-gray-100">27</div>
            <div class="bg-gray-100">28</div>
            <div class="bg-gray-100">29</div>
            <div class="bg-gray-100">30</div>
            <div class="bg-gray-100">31</div>
            <div class="bg-gray-100">32</div>
            <div class="bg-gray-100">33</div>
            <div class="bg-gray-100">34</div>
            <div class="bg-gray-100">35</div>
            <div class="bg-gray-100">36</div>
            <div class="bg-gray-100">37</div>
            <div class="bg-gray-100">38</div>
            <div class="bg-gray-100">39</div>
            <div class="bg-gray-100">40</div>
            <div class="bg-gray-100">41</div>
            <div class="bg-gray-100">42</div>
            <div class="bg-gray-100">43</div>
            <div class="bg-gray-100">44</div>
            <div class="bg-gray-100">45</div>
            <div class="bg-gray-100">46</div>
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
