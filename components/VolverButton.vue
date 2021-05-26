<template>
    <div class="w-2/3 mx-auto my-20 lg:w-1/4" data-scroll>
    <nuxt-link :to="localePath('/portfolio')">
     <button class="w-full px-3 py-2 text-sm font-bold tracking-wide text-white uppercase bg-bluejuli hover:bg-blue-600 focus:outline-none focus:shadow-outline">
     {{ $t('backportfolio')}}
     </button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
  }
</script>
