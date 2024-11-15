<script setup>
    const { logout } = useSupabaseLogin();
    const user = useSupabaseUser();
    const { data: applyList , error } = await useFetch(`/api/memapplylist`, {
        method: "POST",
        body: {userID: user.value.id}
    });
     if(error.value) {
        throw createError ({
            statusCode: error.value.statusCode,
            message: error.value.message,
        })
    }
    useHead({
        title:"Butter Biscuit",
    })
    definePageMeta({
        middleware:['auth']
    })

    const config = useRuntimeConfig()
</script>
<template>
{{}}
    <div class="max-w-3xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-5">Member Center</h1>
        <div class="flex flex-wrap justify-between">
            <div style="background-position:center 28%" class="w-full h-[20vh] mb-5 bg-no-repeat bg-cover"  :style="{backgroundImage:`url(${config.public.supabase.url}/storage/v1/object/public/images/public/login_bg.webp)`}"></div>
            <div class="w-full text-center">
                <img :src="user.user_metadata.picture" class="rounded-full m-auto mb-5">
                {{user.user_metadata.full_name}}
                {{user.user_metadata.email}}
                
                <button @click="logout" class="block my-5 mx-auto w-4xl py-1 px-7 rounded-md border border-black text-black bg-white hover:bg-zinc-100">Logout</button>
            </div>
        </div>
        
        <div v-if="applyList.length > 0" class="px-2">
            <h2 class="text-center text-2xl mt-9 mb-5">Your Biscuit Sample Apply Info</h2>
            <table class="table-auto w-full text-center">
                <thead>
                    <tr>
                        <th class="border-b bg-stone-200 py-2 px-1 text-sm opacity-70 rounded-tl-lg">Name</th>
                        <th class="border-b bg-stone-200 py-2 px-1 text-sm opacity-70">Phone</th>
                        <th class="border-b bg-stone-200 py-2 px-1 text-sm opacity-70">Flavor</th>
                        <th class="border-b bg-stone-200 py-2 px-1 text-sm opacity-70">Amount</th>
                        <th class="border-b bg-stone-200 py-2 px-1 text-sm opacity-70 rounded-tr-lg">Pickup Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in applyList" :key="item.applyID">
                        <td class="py-2 px-1 text-sm border-b" data-title="Name">{{item.name}}</td>
                        <td class="py-2 px-1 text-sm border-b" data-title="Phone">{{item.phone}}</td>
                        <td class="py-2 px-1 text-sm border-b" data-title="Flavor">{{item.flavor.name}}</td>
                        <td class="py-2 px-1 text-sm border-b" data-title="Amount">{{item.amount.name}}</td>
                        <td class="py-2 px-1 text-sm border-b" data-title="Pickup Date">{{item.date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>