<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-r">
    <Navigation />
    <lostresbotones />

    <div class="relative w-full min-h-screen">
      <div class="fixed left-0 z-50 flex flex-col items-center justify-center h-auto ml-8 lg:ml-32">
        <a href="/CV_Julieta_Mercerat.pdf" download="" target="_blank" class="inline-flex items-center justify-center px-5 py-3 mb-6 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform rotate-45 border-4 border-gray-700 shadow-xl hover:bg-bluejuli hover:text-white hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none">
          <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Descargar CV
        </a>
      </div>

        <div class="container mx-auto mt-12 mb-24">
          <div class="grid grid-cols-8 grid-rows-5 gap-1">

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
              <div class="py-8 mt-auto text-4xl font-bold">Julieta Mercerat
              </div>
              <div class="mb-4 text-3xl font-semibold text-bluejuli">Hola,
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

            <div></div>

            <div class="col-span-2 row-span-2">

              <h2 class="py-4 pl-6 text-lg font-hairline uppercase text-redjuli">// EDUCACIÓN</h2>
              <div class="max-w-sm px-2 mt-2 ml-auto border-l-2 border-gray-400 border-dashed">
                <div class="flex flex-col justify-end space-y-8 border-l-2 border-gray-400 border-dashed">
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
                </div>
                </div>
            </div>

            <div class="bg-gray-100">21</div>
            <div class="bg-gray-100">22</div>
            <div></div>
            <div class="col-span-2">
                <div class="flex flex-col items-start justify-center px-8 py-8 space-y-4">
                  <div class="px-4 py-4 text-4xl uppercase border-2 border-dashed border-yellowjuli text-yellowjuli">
                    <h3>IDIO</h3>
                    <h3>MAS</h3>
                  </div>
                  <div class="flex items-center justify-between w-full">
                    <div class="text-sm text-redjuli">Español</div>
                    <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-yellowjuli ring-opacity-50">
                      <div class="bg-yellowjuli w-full rounded-full h-1.5"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between w-full ">
                    <div class="text-sm text-redjuli">
                      Inglés
                    </div>
                    <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-yellowjuli ring-opacity-50">
                      <div class="bg-yellowjuli rounded-full  w-2/3 h-1.5"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between w-full">
                    <div class="text-sm text-redjuli">Francés</div>
                    <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-yellowjuli ring-opacity-50">
                      <div class="bg-yellowjuli rounded-full w-1/2 h-1.5"></div>
                    </div>
                  </div>
                </div>
            </div>
            <div></div>
            <div class="col-span-2">
              <div class="flex flex-col justify-end h-full">
                <h2 class="py-4 pl-10 text-lg font-hairline uppercase text-redjuli">// CURSOS Y SEMINARIOS</h2>
                <div class="pb-2 pl-8">
                  <p class="pb-4 text-xs font-medium text-gray-500">COLOR, MATERIALS & FINISH (CMF)</p>
                  <p class="pb-4 text-xs font-medium text-gray-500">CURSO DE BIOPLÁSTICOS (Biofabricación)</p>
                  <p class="text-xs font-medium text-gray-500 ">EXPERIMENTACIONES TEXTILES (SHIBORI Y TYE DYE)</p>
                </div>
              </div>
            </div>
            <!-- <div class="bg-gray-100">28</div> -->
            <div></div>
            <div class="col-span-2">
              <div class="flex flex-col items-start justify-center px-4 py-4 space-y-4">
                <div class="py-2 text-2xl uppercase text-bluejuli lineyellow cursor-mano">
                  <h3><span>Habilidades</span></h3>
                </div>
                <div class="text-sm text-bluejuli lineyellow cursor-mano">
                  <span >- Desarrollo de conceptos e identidad</span>
                </div>
                <div class="text-sm text-bluejuli ">
                  - Seguimiento de producción
                </div>
                <div class="text-sm text-bluejuli lineyellow cursor-mano">
                  <span >- Aportar conocimiento integral del proceso textil de DENIM</span>
                </div>
                <div class="text-sm text-bluejuli">
                  - Diseño con conciencia
                </div>
                <div class="text-sm text-bluejuli lineyellow cursor-mano">
                  <span >- Investigación de tendencias</span>
                </div>
                <div class="text-sm text-bluejuli lineyellow cursor-mano">
                  <span >- Nunca parar de aprender</span>
                </div>
              </div>
            </div>
            <!-- <div class="bg-gray-100">31</div> -->
            <div class="col-span-3">
              <div class="flex flex-col items-center justify-center w-full h-full my-8">
                <div class="flex flex-col justify-center my-4">
                  <div class="text-2xl leading-none uppercase text-bluejuli">H</div>
                  <div class="flex items-center justify-start">
                    <div class="w-5 h-5 bg-yellowjuli"></div>
                    <div class="text-2xl leading-none uppercase text-bluejuli">E</div>
                  </div>
                  <div class="pl-10 text-2xl leading-none uppercase text-bluejuli">RRAMIENTAS</div>
                </div>
                <div class="grid grid-cols-5 grid-rows-5 mx-auto justify-items-stretch">
                  <div ></div>
                  <div ></div>
                  <div ></div>
                  <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
                    <div class="absolute inset-0 mt-2 font-semibold text-center">AI</div>
                    <div class="w-full mt-auto h-4/5 bg-bluejuli"></div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
                    <div class="absolute font-semibold text-center inset-2">Ps</div>
                    <div class="w-full mt-auto h-3/5 bg-bluejuli"></div>
                  </div>
                  <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
                  <div class="w-10 h-10 border border-bluejuli"></div>
                  <div></div>
                  <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
                    <div class="absolute font-semibold text-center inset-2">Ex</div>
                    <div class="w-full mt-auto h-3/5 bg-bluejuli"></div>
                  </div>
                  <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
                  <div class="w-10 h-10 border border-bluejuli"></div>
                  <div></div>
                  <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
                    <div class="absolute font-semibold text-center inset-2">Lr</div>
                    <div class="w-full mt-auto h-1/2 bg-bluejuli"></div>
                  </div>
                  <div class="w-10 h-10 border-r border-bluejuli"></div>
                  <div class="w-10 h-10 border border-bluejuli"></div>
                  <div ></div>
                  <div ></div>
                  <div ></div>
                  <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
                    <div class="absolute font-semibold text-center inset-2">Id</div>
                    <div class="w-full mt-auto h-2/5 bg-bluejuli"></div>
                  </div>
                  <div ></div>
                  <div ></div>
                  <div ></div>
                </div>
              </div>
            </div>

            <div class="col-span-2">
              <div class="flex flex-col justify-end h-full">
                <div class="py-4 border border-dashed border-yellowjuli">
                  <h2 class="py-4 text-5xl font-thin text-center uppercase text-yellowjuli">INTERESES</h2>
                  <div class="px-4 text-xs font-semibold text-gray-900">
                    <p class="">1. Cine / Documentales</p>
                    <p class="">2. Voley / Running</p>
                    <p class="">3. Biomateriales</p>
                    <p class="">4. Observar arquitectura</p>
                    <p class="">5. Apreciar arte plástico y digital y fotografía.</p>
                    <p class="">7. La montaña y el mar</p>
                  </div>
                </div>
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

<style lang="scss" scoped>

$color:#FFDF00;

.lineyellow {
  span{
    background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken($color, 1%) 5px,
    );
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    transition: 0.7s ease;
  }
  &:hover {
    span {
      background-size: 100%;
    }
  }
}

</style>
