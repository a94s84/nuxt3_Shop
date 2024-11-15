<script setup>
    const { login } = useSupabaseLogin();
    useHead({
        title:"Butter Biscuit",
    })
    const config = useRuntimeConfig()
</script>
<template>
    <div class="max-w-3xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-8">Login</h1>
        <div class="flex justify-between">
            <div class="w-[45%] h-[65vh] bg-center bg-norepeat bg-cover"  :style="{backgroundImage:`url(${config.public.supabase.url}/storage/v1/object/public/images/public/login_bg.webp)`}"></div>
            <div class="w-[45%]">
                <button @click="login" class="block my-5 mx-auto w-4xl py-1 px-7 rounded-md border border-black text-black bg-white hover:bg-zinc-100">Login with Google</button>
            </div>
        </div>
    </div>
</template>