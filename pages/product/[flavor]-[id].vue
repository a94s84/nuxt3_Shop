<script setup>
    const route = useRoute()
    const { products } = useProductsData()
    useHead({
        title: route.params.flavor,
    });

    const biscuit = computed(() => {
        return products.find((item) => item.id === parseInt(route.params.id) && item.flavor.trim() == route.params.flavor.trim())
    })

    if(!biscuit.value) {
        throw createError ({
            statusCode: 404,
            message: `Biscuit with ID of ${route.params.id} does not exist`
        })
    }

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