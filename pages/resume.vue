<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-white">
    <!-- bg-no-repeat bg-cover bg-pagina-r bg-scroll-->
    <Navigation />
    <Lostresbotones />

    <!--info -->
    <div class="fixed inset-y-0 left-0 items-center hidden my-20 lg:grid">
      <div class="flex items-center justify-center space-x-4 transform -rotate-90">
        <p class="font-medium whitespace-nowrap text-redjuli">Paris</p>
        <div class="transform rotate-90 ">
          <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/logoubi.png" class="object-contain h-5">
        </div>
        <h3 class="text-lg font-semibold text-redjuli">Info</h3>
      </div>
      <div class="flex justify-end transform -rotate-90">
        <p class="text-sm font-bold tracking-wide uppercase whitespace-nowrap text-redjuli">denim &bull; {{ $t('conceptos')}} &bull; {{ $t('productos')}} &bull; {{ $t('diseño')}}</p>
      </div>

    </div>

    <div class="relative w-full min-h-screen mb-16 lg:hidden"> <!--Resume Mobile -->

      <div class="fixed z-50 flex items-center justify-center h-auto px-2 py-1 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform -rotate-45 bg-transparent border-2 shadow-xl left-4 top-1/4 border-redjuli hover:bg-redjuli hover:rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none cursor-mano hover:text-white"> <!--Button Vimeo -->
        <a href="https://vimeo.com/502370696" target="_blank">
          <svg class="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {{ $t('vervideo')}}
        </a>
      </div>
      <div class="fixed z-50 flex items-center justify-center h-auto px-2 py-1 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform rotate-45 bg-transparent border-2 shadow-xl right-4 bottom-1/4 border-bluejuli hover:bg-bluejuli hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none cursor-mano hover:text-white">
        <a v-if="$i18n.locale === 'fr'" href="/CV_Julieta_Mercerat_FR.pdf" download="" target="_blank">
          <svg class="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          {{ $t('descargarCV') }}
        </a>
        <a v-else href="/CV_Julieta_Mercerat_ESP.pdf" download="" target="_blank">
          <svg class="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          {{ $t('descargarCV') }}
        </a>
      </div>

      <div class="flex flex-col items-center max-w-md mx-auto my-8"> <!-- intro + foto + experienca -->

        <div class="flex flex-col items-start justify-center h-auto px-6 mb-4 text-bluejuli"> <!--presentation sm-->
          <div class="py-4 mt-auto text-3xl font-bold lineyellow "><span>Julieta Mercerat</span>
          <p class="text-xs">1 rue Jean Leclaire, 75017</p>
          </div>
          <div class="mb-4 text-2xl font-semibold text-bluejuli lineyellow "><span>{{ $t('hola') }},</span>
          </div>
          <div class="pb-6 text-sm leading-normal lineyellow"><span>{{ $t('presentation') }}</span> </div>
        </div>

        <div class="flex flex-col h-auto px-2 my-4"> <!-- foto sm-->
          <div class="h-full rounded-full">
            <div class="p-1 rounded-full bg-gradient-to-tr from-yellowjuli to-fuchsia-600">
              <div class="block p-1 transition duration-300 ease-in-out transform bg-white rounded-full shadow-lg hover:-rotate-12">
                <img loading="lazy" alt="fotocv" src="~/assets/img/paginaR/fotoCV2.jpg" class="object-contain w-full h-auto rounded-full">
              </div>
            </div>
          </div>
        </div> <!-- end foto -->

        <div class="flex flex-col items-start"><!--info sm -->
            <h3 class="px-4 text-lg font-semibold text-redjuli">Info</h3>
            <div class="flex items-baseline py-4">
              <!-- <img loading="lazy" alt="ubi" src="~/assets/img/paginaR/logoubi.png" class="object-contain h-5"> -->
              <p class="px-4 text-sm font-semibold leading-10 uppercase text-redjuli">denim &bull; {{ $t('conceptos') }} &bull; {{ $t('productos') }} &bull; {{ $t('diseño') }}</p>
            </div>
        </div>

         <!--Habilidades sm -->
      <div class="flex items-center justify-center h-auto max-w-sm mx-auto my-8">
        <div class="flex flex-col items-start justify-center px-12 mx-auto space-y-4">
          <div class="w-full py-2 text-2xl text-center uppercase text-bluejuli lineyellow">
            <h3><span>{{ $t('habilidades') }}</span></h3>
          </div>
          <div class="text-sm text-bluejuli lineyellow">
            <span >{{ $t('habilidadestext1') }}</span>
          </div>
          <div class="text-sm text-bluejuli ">
            {{ $t('habilidadestext2') }}
          </div>
          <div class="text-sm text-bluejuli lineyellow">
            <span >{{ $t('habilidadestext3') }}</span>
          </div>
          <div class="text-sm text-bluejuli">
            {{ $t('habilidadestext4') }}
          </div>
          <div class="text-sm text-bluejuli lineyellow">
            <span >{{ $t('habilidadestext5') }}</span>
          </div>
          <div class="text-sm text-bluejuli lineyellow">
            <span >{{ $t('habilidadestext6') }}</span>
          </div>
        </div>
      </div><!--end Habilidades sm-->

        <!-- Experiencia sm-->
        <!-- Para hacer las lineas de border-->
        <div class="max-w-sm px-2 mt-6 ml-auto border-l-2 border-gray-400 border-dashed">
        <div class="flex flex-col justify-end space-y-8 border-l-2 border-gray-400 border-dashed">

          <h2 class="py-4 pl-6 text-lg font-hairline text-gray-900 uppercase lineyellow">// <span>{{ $t('experiencalaboral') }}</span> </h2>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2021</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>BE DISOBEDIENT</h2>
              <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('desobedientsubtext')}}</p>
              <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('desobedienttext')}}</p>
              <p class="mt-2 text-xs font-medium text-redjuli laboral" data-scroll>{{ $t('desobedientref')}}</p>
            </div>
          </div>

          <div class="flex items-start ">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli ">2017/ <br>2020</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>SANTISTA</h2>
              <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext1')}}</p>
              <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext1')}} <br> {{ $t('santistatext1bis')}}</p>
              <p class="mt-2 text-xs font-medium text-redjuli laboral" data-scroll>{{ $t('santistaref')}}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="relative ml-4">
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="pb-2 pr-4 pl-14">
              <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext2')}}</p>
              <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext2')}}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="relative ml-4">
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="pb-2 pr-4 pl-14">
              <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext3')}}</p>
              <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext3')}}</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2016/ <br>2017</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>BRANDO</h2>
              <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('brandotext')}}</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2015/ <br>2016</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>FANATICOS</h2>
              <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('fanaticostext')}}</p>
            </div>
          </div>

          <!-- educacion -->
          <h2 class="py-4 pl-6 text-lg font-hairline text-gray-900 uppercase lineyellow">// <span>{{ $t('educacion')}}</span> </h2>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2021</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Design for Sustainability, London College of Communication (UAL)</h2>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2020</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad Argentina de la Empresa (UADE)</h2>
              <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('uadetext') }}</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2019</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad de Buenos Aires (UBA)</h2>
              <p class="pb-4 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('ubatext1')}}</p>
              <p class="pb-4 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('ubatext2')}}</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2018</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Facultad Latinoamericana de Ciencias Sociales (FLACSO)</h2>
              <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('flacsotext') }}</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="relative ml-4">
              <p class="text-base font-bold text-bluejuli">2015</p>
              <div class="absolute top-0 left-0 mt-2 -ml-8">
                <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
              </div>
            </div>
            <div class="px-4 pb-2">
              <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad de Monterrey (UDEM)</h2>
              <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('udemtext') }}</p>
            </div>
          </div>

          <!-- seminarios -->
          <h2 class="py-4 pl-6 text-lg font-hairline text-gray-900 uppercase lineyellow">// <span> {{$t('cursos') }}</span></h2>
          <div class="pb-2 pl-8">
            <p class="pb-4 text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext1') }}</p>
            <p class="pb-4 text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext2') }}</p>
            <p class="text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext3') }}</p>
          </div>
        </div>
        </div>
      </div>

      <div class="flex flex-col justify-center h-full max-w-md mx-auto my-8"> <!--herramientas sm-->
        <div class="flex flex-col items-center justify-center w-full h-full my-8">
          <div class="flex flex-col justify-center my-4">
            <div class="text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasH')}}</div>
            <div class="flex items-center justify-start">
              <div class="w-5 h-5 bg-redjuli"></div>
              <div class="text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasE')}}</div>
            </div>
            <div class="pl-10 text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasR')}}</div>
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
            <div class="w-10 h-10 border-t border-b border-r border-bluejuli"></div>
            <div></div>
            <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
              <div class="absolute font-semibold text-center inset-2">Ex</div>
              <div class="w-full mt-auto h-3/5 bg-bluejuli"></div>
            </div>
            <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
            <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
            <div></div>
            <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
              <div class="absolute font-semibold text-center inset-2">Lr</div>
              <div class="w-full mt-auto h-1/2 bg-bluejuli"></div>
            </div>
            <div class="w-10 h-10"></div>
            <div class="w-10 h-10 border-b border-l border-r border-bluejuli"></div>
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
      </div><!--end herramientas sm-->
      <div class="flex flex-col items-start justify-center h-auto max-w-sm px-8 mx-auto my-12 space-y-4"><!--idiomas sm-->
        <div class="w-full px-4 py-4 text-4xl text-center uppercase border-2 border-dashed border-yellowjuli text-yellowjuli">
          <h3>{{ $t('idio') }}</h3>
          <h3>{{ $t('mas') }}</h3>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="text-sm text-redjuli">{{ $t('Español') }}</div>
          <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-bluejuli ring-opacity-50">
            <div class="transform origin-left bg-yellowjuli w-full rounded-full h-1.5 idiomas" data-scroll></div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full ">
          <div class="text-sm text-redjuli">
            {{ $t('Inglés') }}
          </div>
          <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-bluejuli ring-opacity-50">
            <div class="transform origin-left bg-yellowjuli rounded-full w-2/3 h-1.5 idiomas" data-scroll></div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="text-sm text-redjuli">{{ $t('Francés') }}</div>
          <div class="bg-gray-100 rounded-full w-48 h-1.5 ring-2 ring-bluejuli ring-opacity-50">
            <div class="transform origin-left w-1/2 h-1.5 rounded-full bg-yellowjuli idiomas" data-scroll></div>
          </div>
        </div>
      </div><!--end idiomas sm-->
      <div class="flex flex-col justify-center h-auto max-w-sm px-8 mx-auto my-12"> <!--INTERESES sm-->
        <div class="py-4 border border-dashed border-yellowjuli">
          <h2 class="py-4 text-4xl font-thin text-center uppercase text-yellowjuli">{{ $t('intereses') }}</h2>
          <div class="px-6 text-xs font-semibold text-gray-900">
            <p class="intereses" data-scroll>{{ $t('interesestext1') }}</p>
            <p class="intereses" data-scroll>{{ $t('interesestext2') }}</p>
            <p class="intereses" data-scroll>{{ $t('interesestext3') }}</p>
            <p class="intereses" data-scroll>{{ $t('interesestext4') }}</p>
            <p class="intereses" data-scroll>{{ $t('interesestext5') }}</p>
            <p class="intereses" data-scroll>{{ $t('interesestext6') }}</p>
          </div>
        </div>
      </div><!-- end intereses sm-->
      <div class="flex flex-col items-center justify-center w-full h-auto px-4 my-12"> <!-- contacto sm-->
        <div class="flex items-end justify-center w-full h-full py-4">
          <div class="flex flex-col pb-1 mr-4">
            <div class="w-4 h-4 bg-yellowjuli"></div>
            <div class="w-4 h-4 bg-bluejuli"></div>
            <div class="w-4 h-4 bg-redjuli"></div>
          </div>
          <div class="text-2xl font-bold leading-none text-center uppercase text-redjuli">
            {{ $t('contactme') }}
          </div>
        </div>

        <div class="flex flex-col items-center justify-center h-auto max-w-md px-4 py-4 space-y-4">

          <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4 hover:text-gray-500 text-bluejuli">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
            </div>
            <div class="text-lg font-semibold text-bluejuli">(+33) 06 68 23 07 18</div>
          </div>

          <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4 hover:text-gray-500 text-bluejuli">
              <Mailto mail="julietamercerat@gmail.com" target="_blank">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </Mailto>
            </div>
            <div class="text-sm font-medium text-bluejuli hover:text-gray-500">
              <a href="mailto:julietamercerat@gmail.com" target="_blank">
                julietamercerat@gmail.com
              </a>
            </div>
          </div>

          <!-- <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4 hover:text-gray-500 text-bluejuli">
              <a href="https://www.instagram.com/personamercerat/" target="_blank">
                <svg class="w-6 h-6" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </div>
            <div class="text-sm font-medium text-bluejuli">
              <a href="https://www.instagram.com/personamercerat/" target="_blank">// personamercerat</a>
            </div>
          </div> -->

          <!-- <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4 text-bluejuli hover:text-gray-500">
              <a href="https://www.linkedin.com/in/julieta-mercerat-38b637142/" target="_blank">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <div class="text-sm font-medium text-bluejuli">
              <a href="https://www.linkedin.com/in/julieta-mercerat-38b637142/" target="_blank">// julieta mercerat</a>
            </div>
          </div> -->

          <!-- <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4 text-bluejuli hover:text-gray-500">
              <a href="https://vimeo.com/225087294" target="_blank">
                <svg class="w-6 h-6" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vimeo icon</title><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
              </a>
            </div>
            <div class="text-sm font-medium text-bluejuli">
              <a href="https://vimeo.com/225087294" target="_blank" class="text-bluejuli hover:text-gray-500">// personadisenio</a>
            </div>
          </div> -->

          <!-- <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
            <div class="mr-4">
              <a href="https://www.behance.net/personamercerat" target="_blank" class="text-bluejuli hover:text-gray-500">
                <svg class="w-6 h-7" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Behance icon</title><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/></svg>
              </a>
            </div>
            <div class="text-sm font-medium text-bluejuli">
              <a href="https://www.behance.net/personamercerat" target="_blank" class="text-bluejuli hover:text-gray-500">// personamercerat</a>
            </div>
          </div> -->
        </div>
      </div> <!-- end contacto sm-->
    </div>

    <main class="relative flex-col justify-between hidden min-h-full px-4 mx-auto mt-12 mb-24 lg:flex max-w-7xl"> <!--Resume screen LG -->

      <div class="fixed z-50 flex items-center justify-center h-auto px-5 py-3 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform -rotate-45 bg-transparent border-4 shadow-xl top-80 left-16 border-redjuli hover:bg-redjuli hover:text-white hover:rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none cursor-mano"> <!--Button Vimeo -->
        <a href="https://vimeo.com/502370696" target="_blank">
          <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {{ $t('vervideo')}}
        </a>
      </div>

      <div class="fixed z-50 flex items-center justify-center h-auto px-5 py-3 text-sm font-medium tracking-wider text-gray-600 uppercase transition duration-300 ease-in-out transform rotate-45 bg-transparent border-4 shadow-xl bottom-1/4 right-44 border-bluejuli hover:bg-bluejuli hover:text-white hover:-rotate-45 hover:border-white focus:outline-none focus:shadow-outline-none cursor-mano"> <!--Button descargar CV -->
          <a v-if="$i18n.locale === 'fr'" href="/CV_Julieta_Mercerat_FR.pdf" download="" target="_blank">
            <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            {{ $t('descargarCV') }}
          </a>
          <a v-else href="/CV_Julieta_Mercerat_ESP.pdf" download="" target="_blank">
            <svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            {{ $t('descargarCV') }}
          </a>
      </div>

      <div class="flex justify-between min-h-full">
        <div class="flex flex-col justify-between w-1/3 min-h-full mx-auto">
          <div class="text-bluejuli"> <!--presentation -->
            <div class="py-8 mt-auto text-4xl font-bold lineyellow"><span>Julieta Mercerat</span> <br/>
            <p class="text-xs">1 rue Jean Leclaire, 75017</p>
            </div>
            <div class="mb-4 text-3xl font-semibold text-bluejuli lineyellow"><span>{{ $t('hola')}}</span>,
            </div>
            <div class="pb-6 text-base leading-normal lineyellow"><span>{{ $t('presentation')}}</span></div>
          </div>
          <!--Habilidades -->
          <div class="flex flex-col items-start justify-center py-4 space-y-4">
            <div class="py-2 text-2xl uppercase text-bluejuli lineyellow">
              <h3><span>{{ $t('habilidades')}}</span></h3>
            </div>
            <div class="text-sm text-bluejuli lineyellow">
              <span >{{ $t('habilidadestext1')}}</span>
            </div>
            <div class="text-sm text-bluejuli ">
              {{ $t('habilidadestext2')}}
            </div>
            <div class="text-sm text-bluejuli lineyellow">
              <span >{{ $t('habilidadestext3')}}</span>
            </div>
            <div class="text-sm text-bluejuli">
              {{ $t('habilidadestext4')}}
            </div>
            <div class="text-sm text-bluejuli lineyellow">
              <span >{{ $t('habilidadestext5')}}</span>
            </div>
            <div class="text-sm text-bluejuli lineyellow">
              <span >{{ $t('habilidadestext6')}}</span>
            </div>
          </div>

          <!--Experienca laboral -->
          <h2 class="py-4 text-lg font-hairline text-gray-900 uppercase lineyellow">// <span>{{ $t('experiencalaboral')}}</span> </h2>
          <!-- Para hacer las lineas de borde -->
          <div class="px-2 mt-2 border-l-2 border-gray-400 border-dashed">
            <div class="flex flex-col justify-end space-y-8 border-l-2 border-gray-400 border-dashed">
              <div class="flex items-start">
                <div class="relative ml-4">
                  <p class="text-base font-bold text-bluejuli">2021</p>
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="px-4 pb-2">
                  <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>BE DISOBEDIENT</h2>
                  <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('desobedientsubtext')}}</p>
                  <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('desobedienttext')}}</p>
                  <p class="mt-2 text-xs font-medium text-redjuli laboral" data-scroll>{{ $t('desobedientref')}}</p>
                </div>
              </div>
              <div class="flex items-start ">
                <div class="relative ml-4">
                  <p class="text-base font-bold text-bluejuli ">2017/ <br>2021</p>
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="px-4 pb-2">
                  <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>SANTISTA</h2>
                  <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext1')}}</p>
                  <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext1')}} <br> {{ $t('santistatext1bis')}}</p>
                  <p class="mt-2 text-xs font-medium text-redjuli laboral" data-scroll>{{ $t('santistaref')}}</p>
                </div>
              </div>
              <div class="flex items-start ">
                <div class="relative ml-4">
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="pb-2 pr-4 pl-14">
                  <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext2')}}</p>
                  <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext2')}}</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="relative ml-4">
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="pb-2 pr-4 pl-14">
                  <p class="text-sm italic font-medium text-bluejuli laboral" data-scroll>{{ $t('santistasubtext3')}}</p>
                  <p class="mt-2 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('santistatext3')}}</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="relative ml-4">
                  <p class="text-base font-bold text-bluejuli">2016/ <br>2017</p>
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="px-4 pb-2">
                  <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>BRANDO</h2>
                  <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('brandotext')}}</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="relative ml-4">
                  <p class="text-base font-bold text-bluejuli">2015/ <br>2016</p>
                  <div class="absolute top-0 left-0 mt-2 -ml-8">
                    <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                  </div>
                </div>
                <div class="px-4 pb-2">
                  <h2 class="text-lg font-hairline uppercase text-bluejuli laboral" data-scroll>FANATICOS</h2>
                  <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('fanaticostext')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-between w-1/3 min-h-full mx-auto">
          <div class="mt-auto mb-20"> <!--educacion -->
              <h2 class="py-4 pl-6 text-lg font-hairline text-gray-900 uppercase lineyellow">
                // <span>{{ $t('educacion')}}</span></h2>
              <div class="max-w-sm px-2 mt-2 ml-auto border-l-2 border-gray-400 border-dashed">
                <div class="flex flex-col justify-end space-y-8 border-l-2 border-gray-400 border-dashed">
                  <div class="flex items-start">
                    <div class="relative ml-4">
                      <p class="text-base font-bold text-bluejuli">2021</p>
                      <div class="absolute top-0 left-0 mt-2 -ml-8">
                        <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                      </div>
                    </div>
                    <div class="px-4 pb-2">
                      <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Design for Sustainability, London College of Communication (UAL)</h2>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="relative ml-4">
                      <p class="text-base font-bold text-bluejuli">2020</p>
                      <div class="absolute top-0 left-0 mt-2 -ml-8">
                        <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                      </div>
                    </div>
                    <div class="px-4 pb-2">
                      <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad Argentina de la Empresa (UADE)</h2>
                      <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('uadetext')}}</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="relative ml-4">
                      <p class="text-base font-bold text-bluejuli">2019</p>
                      <div class="absolute top-0 left-0 mt-2 -ml-8">
                        <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                      </div>
                    </div>
                    <div class="px-4 pb-2">
                      <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad de Buenos Aires (UBA)</h2>
                      <p class="pb-4 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('ubatext1')}}</p>
                      <p class="pb-4 text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('ubatext2')}}</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="relative ml-4">
                      <p class="text-base font-bold text-bluejuli">2018</p>
                      <div class="absolute top-0 left-0 mt-2 -ml-8">
                        <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                      </div>
                    </div>
                    <div class="px-4 pb-2">
                      <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Facultad Latinoamericana de Ciencias Sociales (FLACSO)</h2>
                      <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('flacsotext')}}</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="relative ml-4">
                      <p class="text-base font-bold text-bluejuli">2015</p>
                      <div class="absolute top-0 left-0 mt-2 -ml-8">
                        <img loading="lazy" alt="ubi" src="~/assets/img/cursorw.png" class="object-contain h-2">
                      </div>
                    </div>
                    <div class="px-4 pb-2">
                      <h2 class="text-lg font-medium text-bluejuli laboral" data-scroll>Universidad de Monterrey (UDEM)</h2>
                      <p class="text-xs font-medium text-bluejuli laboral" data-scroll>{{ $t('udemtext')}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="flex flex-col justify-start w-1/3 min-h-full mx-auto">
          <!--logo -->
          <div class="flex flex-col items-start justify-start h-auto py-8">
              <img loading="lazy" alt="logo" src="~/assets/img/logo/logo.png" class="object-contain h-24 mx-auto">
          </div>

          <!--foto cv -->
          <div class="h-auto py-8 mx-auto">
            <div class="p-1 rounded-full bg-gradient-to-tr from-yellowjuli to-fuchsia-600">
              <div class="p-1 transition duration-500 ease-in-out transform bg-white rounded-full hover:-rotate-180">
                <img loading="lazy" alt="fotocv" src="~/assets/img/paginaR/fotoCV2.jpg" class="object-cover rounded-full w-72 h-72">
              </div>
            </div>
          </div>

          <!--contacto -->
          <div class="flex flex-col items-start justify-center w-full h-auto px-4 py-8">
              <div class="flex items-end justify-center w-full h-full py-4">
                <div class="flex flex-col pb-1 mr-4">
                  <div class="w-4 h-4 bg-yellowjuli"></div>
                  <div class="w-4 h-4 bg-bluejuli"></div>
                  <div class="w-4 h-4 bg-redjuli"></div>
                </div>
                <div class="text-2xl font-bold leading-none text-center uppercase text-redjuli">
                  {{ $t('contactme')}}
                </div>
              </div>

              <div class="flex flex-col items-center justify-center w-3/4 h-auto px-4 py-4 mx-auto space-y-4">

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4 hover:text-gray-500 text-bluejuli">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                  </div>
                  <div class="text-lg font-semibold text-bluejuli">(+33) 06 68 23 07 18</div>
                </div>

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4 hover:text-gray-500 text-bluejuli">
                    <a href="mailto:personadisenio@gmail.com" target="_blank">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a>
                  </div>
                  <div class="text-sm font-medium text-bluejuli hover:text-gray-500">
                    <Mailto mail="julietamercerat@gmail.com" target="_blank">
                      julietamercerat@gmail.com
                    </Mailto>
                  </div>
                </div>

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4 hover:text-gray-500 text-bluejuli">
                    <a href="https://www.instagram.com/personamercerat/" target="_blank">
                      <svg class="w-6 h-6" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                    </a>
                  </div>
                  <div class="text-sm font-medium text-bluejuli">
                    <a href="https://www.instagram.com/personamercerat/" target="_blank">// personamercerat</a>
                  </div>
                </div>

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4 text-bluejuli hover:text-gray-500">
                    <a href="https://www.linkedin.com/in/julieta-mercerat/" target="_blank">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                  <div class="text-sm font-medium text-bluejuli">
                    <a href="https://www.linkedin.com/in/julieta-mercerat/" target="_blank">// julieta mercerat</a>
                  </div>
                </div>

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4 text-bluejuli hover:text-gray-500">
                    <a href="https://vimeo.com/personaportfolio" target="_blank">
                      <svg class="w-6 h-6" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vimeo icon</title><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
                    </a>
                  </div>
                  <div class="text-sm font-medium text-bluejuli">
                    <a href="https://vimeo.com/personaportfolio" target="_blank" class="text-bluejuli hover:text-gray-500">// personaportfolio</a>
                  </div>
                </div>

                <div class="flex items-center justify-start w-full transition duration-200 hover:transform hover:scale-105">
                  <div class="mr-4">
                    <a href="https://www.behance.net/personaportfolio" target="_blank" class="text-bluejuli hover:text-gray-500">
                      <svg class="w-6 h-7" role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Behance icon</title><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/></svg>
                    </a>
                  </div>
                  <div class="text-sm font-medium text-bluejuli">
                    <a href="https://www.behance.net/personaportfolio" target="_blank" class="text-bluejuli hover:text-gray-500">// personaportfolio</a>
                  </div>
                </div>
              </div>
          </div>

          <!-- CURSOS Y SEMINARIOS -->
          <div class="flex flex-col justify-end h-full mb-8">
              <h2 class="py-4 pl-10 text-lg font-hairline uppercase text-redjuli lineyellow">// <span>{{ $t('cursos')}}</span> </h2>
              <div class="pb-2 pl-8">
                <p class="pb-4 text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext1')}}</p>
                <p class="pb-4 text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext2')}}</p>
                <p class="text-xs font-medium text-gray-500 laboral" data-scroll>{{ $t('cursostext3')}}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around h-auto">
        <!--idiomas -->
        <div class="flex flex-col items-start justify-center space-y-4">
          <div class="px-4 py-4 text-4xl uppercase border-2 border-dashed border-yellowjuli text-yellowjuli">
            <h3>{{ $t('idio')}}</h3>
            <h3>{{ $t('mas')}}</h3>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="w-1/3 text-sm font-medium text-left text-redjuli">{{ $t('Español')}}</div>
            <div class="bg-white rounded-full w-48 h-1.5 ring-2 ring-bluejuli ring-opacity-75">
              <div class="transform origin-left bg-yellowjuli w-full rounded-full h-1.5 idiomas" data-scroll></div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full ">
            <div class="w-1/3 text-sm font-medium text-left text-redjuli">
              {{ $t('Inglés')}}
            </div>
            <div class="bg-white rounded-full w-48 h-1.5 ring-2 ring-bluejuli ring-opacity-75">
              <div class="transform origin-left bg-yellowjuli rounded-full w-2/3 h-1.5 idiomas" data-scroll></div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="w-1/3 text-sm font-medium text-left text-redjuli">{{ $t('Francés')}}</div>
            <div class="w-48 h-1.5 bg-white rounded-full ring-2 ring-bluejuli ring-opacity-75">
              <div class="transform origin-left w-1/2 h-1.5 rounded-full bg-yellowjuli idiomas" data-scroll></div>
            </div>
          </div>
        </div>
        <!--Herramientas -->
        <div class="flex flex-col items-center justify-center h-auto">
          <div class="flex flex-col justify-center my-4">
            <div class="text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasH')}}</div>
            <div class="flex items-center justify-start">
              <div class="w-5 h-5 bg-redjuli"></div>
              <div class="text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasE')}}</div>
            </div>
            <div class="pl-10 text-2xl leading-none uppercase text-bluejuli">{{ $t('herramientasR')}}</div>
          </div>
          <div class="grid grid-cols-5 grid-rows-5 mx-auto transition duration-500 transform justify-items-stretch hover:-translate-y-6 hover:skew-y-12">
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
            <div class="w-10 h-10 border-t border-b border-r border-bluejuli"></div>
            <div></div>
            <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
              <div class="absolute font-semibold text-center inset-2">Ex</div>
              <div class="w-full mt-auto h-3/5 bg-bluejuli"></div>
            </div>
            <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
            <div class="w-10 h-10 border-b border-r border-bluejuli"></div>
            <div></div>
            <div class="relative flex w-10 h-10 border-2 border-dashed border-bluejuli">
              <div class="absolute font-semibold text-center inset-2">Lr</div>
              <div class="w-full mt-auto h-1/2 bg-bluejuli"></div>
            </div>
            <div class="w-10 h-10"></div>
            <div class="w-10 h-10 border-b border-l border-r border-bluejuli"></div>
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
        <!--INTERESES -->
        <div class="flex flex-col items-center justify-center w-1/3 h-auto px-2">
          <div class="py-4 border border-dashed border-yellowjuli">
            <h2 class="py-4 text-5xl font-thin text-center uppercase text-yellowjuli">{{ $t('intereses')}}</h2>
            <div class="px-4 text-xs font-semibold text-gray-900">
              <p class="intereses" data-scroll>{{ $t('interesestext1') }}</p>
              <p class="intereses" data-scroll>{{ $t('interesestext2') }}</p>
              <p class="intereses" data-scroll>{{ $t('interesestext3') }}</p>
              <p class="intereses" data-scroll>{{ $t('interesestext4') }}</p>
              <p class="intereses" data-scroll>{{ $t('interesestext5') }}</p>
              <p class="intereses" data-scroll>{{ $t('interesestext6') }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  head: {
    title: 'Persona Portfolio | Resume Julieta Mercerat',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Resume de Julieta Mercerat'
      }
    ],
  },
  transition: {
    name: 'page',
    beforeEnter() {
      this.$i18n.finalizePendingLocaleChange()
    }
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2
    });
  },
  destroyed() {
    this.so.teardown();
  }
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

.intereses[data-scroll] {
  transition: all 2s;
}

.intereses[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
.intereses[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-135px);
}

.laboral, .laboral[data-scroll] {
  transition: all 2s;
}

.laboral, .laboral[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
.laboral, .laboral[data-scroll="out"] {
  opacity: 0;
  transform: translateX(50px);
}

.idiomas[data-scroll] {
  transition: all 2.5s;
}
.idiomas[data-scroll="in"] {
  transform: scaleX(1);
}
.idiomas[data-scroll="out"] {
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 2000ms ease-in-out;
}
</style>
