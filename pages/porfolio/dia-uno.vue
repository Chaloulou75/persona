<template>
    <div class="min-h-screen dia-uno">
      <Navigation />
      <div class="relative flex flex-col w-full min-h-screen mx-auto lg:flex-row">
        <Lostresbotones />

        <!-- left screen -->
        <div class="flex flex-col items-center justify-center w-full h-screen lg:w-1/2 bg-yellowjuli">
          <div class="relative w-48 h-48 mt-auto border-2 border-bluejuli">
            <div class="absolute bottom-0 left-0 -mb-5 -ml-2 text-5xl font-bold text-white uppercase numberBig">DÍA</div>
            <div class="absolute top-0 right-0 w-1/2 h-48 font-semibold text-white -mt-29 numberBig text-17xl">1</div>

          </div>
          <div class="flex items-center justify-center mt-8 space-x-1">
            <div class="px-1 py-1 border border-white"></div>
            <div class="px-1 py-1 border border-white"></div>
            <div class="px-1 py-1 border border-white"></div>
          </div>
          <div class="flex flex-col items-center justify-center w-48 h-48 px-4 py-2 mt-4 text-xs text-center text-white uppercase">
            <div class="pb-4">ESTE DÍA, ME OBSESIONÉ CON LOS CUERPOS,  HASTA VER SOLO FORMAS FLOTANDO.
            </div>
            <div>trabajo de fotogragia digital</div>

          </div>
        </div>

        <!-- right screen -->
        <div class="flex flex-col w-full h-screen px-4 bg-gray-100 lg:w-1/2">

            <div class="flex items-center justify-center w-full h-48">
              <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
              </div>
              <div class="text-sm uppercase text-bluejuli">fotografia digital</div>
            </div>
            <div class="flex justify-around">
              <div class="flex items-center justify-center w-full h-48">
                <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
                </div>
                <div class="text-sm uppercase text-bluejuli">literatura</div>
              </div>
              <div class="flex items-center justify-center w-full h-48">
                <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
                </div>
                <div class="text-sm uppercase text-bluejuli"></div>
              </div>
            </div>
            <div class="flex items-center justify-center w-full h-48 space-x-16">
              <div class="flex items-center justify-center w-full">
                <div class="px-1 py-1 mr-2 border border-bluejuli bg-bluejuli">
                </div>
                <div class="text-sm uppercase text-bluejuli">Concepto</div>
              </div>
              <div class="px-1 py-1 border border-bluejuli bg-bluejuli">
              </div>
            </div>

            <div class="w-1/2 px-2 ml-auto text-4xl text-right uppercase text-bluejuli sortsMill">Posibilidades de abstraccion_</div>
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

.numberBig, .dia-uno{
  font-family: 'Ubuntu', 'Sorts Mill Goudy', 'Montserrat', sans-serif;
}
.sortsMill{
  font-family: 'Sorts Mill Goudy', 'Ubuntu',  'Montserrat', sans-serif;
}

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
