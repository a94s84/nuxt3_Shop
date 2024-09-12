<script setup>
    const { logout } = useSupabaseLogin();
    const user = useSupabaseUser();
    useHead({
        title:"Butter Biscuit",
    })
    definePageMeta({
        middleware:['auth']
    })

</script>
<template>
    <div class="max-w-3xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-5">Member Center</h1>
        <div class="flex flex-wrap justify-between">
            <div style="background-position:center 28%" class="w-full h-[20vh] mb-5 bg-no-repeat bg-cover bg-[url('https://www.but.com.tw/system/package_images/images/000/000/099/original/%E5%BD%88%E8%B7%B3%E8%A6%96%E7%AA%972-04.jpg')]"></div>
            <div class="w-full text-center">
                <img :src="user.user_metadata.picture" class="rounded-full m-auto mb-5">
                {{user.user_metadata.full_name}}
                {{user.user_metadata.email}}
                
                <button @click="logout" class="block my-5 mx-auto w-4xl py-1 px-7 rounded-md border border-black text-black bg-white hover:bg-zinc-100">Logout</button>

            </div>
        </div>
    </div>
</template>