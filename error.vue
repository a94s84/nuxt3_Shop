<script setup>
    const error = useError()
    const handlerError = () => {
      clearError({
        redirect: "/productlist"
      })
    }
    const config = useRuntimeConfig()
</script>

<template>
  <div>
    <NavBar />
    <div class="flex flex-wrap justify-center items-center p-3 mx-auto max-w-5xl p-4 md:mt-32 lg:w-3/4 font-mono">
        <div class="md:w-[50%] w-full px-8 py-4 bg-center md:min-h-[45vh] min-h-[30vh] md:bg-auto bg-[length:500px_500px]" :style="{backgroundImage:`url(${config.public.supabase.url}/storage/v1/object/public/images/public/error_bg.webp)`}">
        </div>
        <div class="md:w-[50%] md:text-left text-center w-full p-4">
            <p class="md:mb-3">{{error.message}}</p>
            <h1 class="md:text-9xl text-7xl p-4 text-gray-500">{{error.statusCode}}</h1>
            <p class="md:text-4xl md:leading-snug leading-tight text-3xl">There isn’t much that can’t be solved by a box of biscuit!</p>
            <button class="inline-block mt-5 underline text-xl" @click="handlerError">Get Some Biscuits</button>
        </div>
    </div>
    <div class="mt-8 flex justify-center items-center p-3">

    </div>
  </div>
</template>
