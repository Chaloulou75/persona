<template>
  <div class="absolute inset-y-0 right-0 z-30 mt-16 mr-12 lg:mt-6 cursor-mano lg:mr-32">
    <nuxt-link :to="localePath('/')">
    <div class="fixed space-y-4">

      <div class="w-5 h-5 transition duration-200 transform border shadow-lg border-bluejuli bg-bluejuli hover:scale-110 hover:-rotate-45"><span class="sr-only">Home</span>
      </div>

      <div class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45"><span class="sr-only">Home</span>
      </div>

      <div class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45"><span class="sr-only">Home</span>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default{
};
</script>
