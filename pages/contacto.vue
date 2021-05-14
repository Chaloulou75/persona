<template>
  <div class="relative w-full min-h-screen text-gray-900 bg-scroll bg-no-repeat bg-cover bg-pagina-n">
    <Navigation />
    <Lostresbotones />
    <main class="relative w-full min-h-screen">
      <div class="flex flex-col items-center max-w-sm px-6 py-6 mx-auto mt-16 mb-32 bg-gray-100 shadow-md ">
        <form name="contact" action="POST" data-netlify="true" data-netlify-recaptcha="true">
        <div>
          <label class="text-sm font-bold text-gray-600" for="username">Tu nombre</label>
          <input class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="username" id="username">
        </div>
        <div class="mt-8">
          <label class="text-sm font-bold text-gray-600" for="email">Tu email:</label>
          <input  type="email" name="email" id="email" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
        </div>
        <div class="mt-8">
          <label class="text-sm font-bold text-gray-600" for="asunto">Asunto:</label>
          <input type="text" name="asunto" id="asunto" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
        </div>
        <div class="mt-8">
          <label class="text-sm font-bold text-gray-600" for="mensaje">Mensaje:</label>
          <textarea name="mensaje" id="mensaje" class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>

        <div data-netlify-recaptcha="true"></div>

        <div class="mt-8">
          <button type="submit"
            class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase animate-pulse bg-bluejuli hover:bg-blue-500 focus:outline-none focus:shadow-outline">
            Envia Mensaje
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
  transition: "page",
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
