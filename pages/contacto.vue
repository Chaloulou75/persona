<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-n">
    <Navigation />
    <Lostresbotones />
    <main class="relative w-full min-h-screen">
      <div class="flex flex-col items-center max-w-sm px-6 py-6 mx-auto mt-16 mb-32 bg-gray-100 shadow-md ">
        <form name="contact" action="POST" netlify-honeypot="bot-field" data-netlify="true">
          <div>
            <label class="text-sm font-bold text-gray-600" for="username">{{ $t('nombre')}}</label>
            <input class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="username" id="username">
          </div>
          <p class="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          <div class="mt-8">
            <label class="text-sm font-bold text-gray-600" for="email">Email:</label>
            <input  type="email" name="email" id="email" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
          </div>
          <div class="mt-8">
            <label class="text-sm font-bold text-gray-600" for="asunto">{{ $t('asunto')}}:</label>
            <input type="text" name="asunto" id="asunto" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
          </div>
          <div class="mt-8">
            <label class="text-sm font-bold text-gray-600" for="mensaje">{{ $t('mensaje')}}:</label>
            <textarea name="mensaje" id="mensaje" class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <div class="mt-8">
            <button type="submit"
              class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase animate-pulse bg-bluejuli hover:bg-blue-600 focus:outline-none focus:shadow-outline">
              {{ $t('enviar')}}
            </button>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    beforeEnter() {
      this.$i18n.finalizePendingLocaleChange()
    }
  },
  head: {
    title: 'Persona Diseño | Contacto Julieta Mercerat',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact Julieta Mercerat'
      }
    ],
  }
};
</script>
