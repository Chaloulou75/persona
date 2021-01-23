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
            <div class="col-span-2">
              <div class="flex flex-col">
                <img alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-12 mx-auto my-8 lg:h-24">
                <div class="px-6 text-xs text-bluejuli">
                  Conceptos <br>
                  Denim <br>
                  Producto <br>
                  Diseño
                </div>
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

            <div></div>
            <div></div>
            <div class="col-span-2">
              <div class="flex flex-col overflow-hidden -mt-30">
                <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/fotoCV.jpg" class="object-contain h-full">
              </div>

            </div>
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

            <div class="col-span-2">
              <div class="flex flex-col items-center justify-center w-full h-auto px-4 py-4">
                <div class="py-4 text-2xl font-bold text-center uppercase text-redjuli">
                  contacto
                </div>
                <div class="flex flex-col items-center justify-center w-full h-auto px-4 py-4 space-y-4">
                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                    </div>
                    <div class="text-sm font-medium text-bluejuli">(+54) 11 38191518</div>
                  </div>

                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4 hover:text-gray-500 text-bluejuli">
                      <a href="mailto:personadisenio@gmail.com" target="_blank">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </a>
                    </div>
                    <div class="text-sm font-medium text-bluejuli hover:text-gray-500">
                      <a href="mailto:personadisenio@gmail.com" target="_blank">
                        personadisenio@gmail.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                    </div>
                    <div class="text-sm font-medium text-bluejuli">// personamercerat</div>
                  </div>

                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                    </div>
                    <div class="text-sm font-medium text-bluejuli">// julieta mercerat</div>
                  </div>

                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4">
                      <a href="https://vimeo.com/225087294" target="_blank" class="text-bluejuli hover:text-gray-500">
                        <svg class="w-6 h-6" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vimeo icon</title><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
                      </a>
                    </div>
                    <div class="text-sm font-medium text-bluejuli">
                      <a href="https://vimeo.com/225087294" target="_blank" class="text-bluejuli hover:text-gray-500">// personadisenio</a>
                    </div>
                  </div>

                  <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                    <div class="mr-4">
                      <a href="https://www.behance.net/personamercerat" target="_blank" class="text-bluejuli hover:text-gray-500">
                        <svg class="w-6 h-7" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Behance icon</title><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/></svg>
                      </a>
                    </div>
                    <div class="text-sm font-medium text-bluejuli">
                      <a href="https://www.behance.net/personamercerat" target="_blank" class="text-bluejuli hover:text-gray-500">// personamercerat</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
