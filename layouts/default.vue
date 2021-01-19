<template>
  <div>
    <Nuxt />
  </div>
</template>

<style scoped>

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
