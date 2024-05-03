<script setup>
    const { login, logout } = useSupabaseLogin();
    useHead({
        title:"Butter Biscuit",
    })
</script>
<template>
    <div class="max-w-3xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-8">Login</h1>
        <div class="flex justify-between">
            <div class="w-[45%] h-[65vh] bg-center bg-norepeat bg-cover bg-[url('https://www.but.com.tw/system/package_images/images/000/000/099/original/%E5%BD%88%E8%B7%B3%E8%A6%96%E7%AA%972-04.jpg')]"></div>
            <div class="w-[45%]">
                <button @click="login" class="block my-5 mx-auto w-4xl py-1 px-7 rounded-md border border-black text-black bg-white hover:bg-zinc-100">Login with Google</button>
            </div>
        </div>
    </div>
</template>