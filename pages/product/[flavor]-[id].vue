<script setup>
    const route = useRoute()
    const flavor = encodeURI(route.params.flavor.trim())
    const id = parseInt(route.params.id)
    const {data: biscuit, error} = await useFetch(`/api/product/${flavor}-${id}`)
    if(error.value) {
        throw createError ({
            statusCode: error.value.statusCode,
            message: error.value.message,
        })
    }
    useHead({
        title: route.params.flavor,
    });
    definePageMeta({
        layout: 'layoutproducts',
    })
</script>
<template>
    <div v-if="biscuit" class="md:w-[65%] lg:justify-start p-4 flex flex-wrap relative justify-center">
        <ProductDetailMainPic :imgurl="biscuit.url" />
        <ProductDetailInfo :biscuit="biscuit"/>
    </div>
</template>