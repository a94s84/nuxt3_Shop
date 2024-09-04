<script setup>
    const route = useRoute()
    const { products } = useProductsData();
    const productlist = computed(() => {
       return route.params.flavor ? products.filter((item) => item.flavor.trim() == route.params.flavor.trim()) : products
    })
    const favorite = useLocalStorage("favorite", {})
    const handleFavorite = (product) => {
        if(product.id in favorite.value) {
            delete favorite.value[product.id]
        } else {
            favorite.value = {
                ...favorite.value,
                [product.id]: {'id':product.id,'name':product.name,'flavor':product.flavor,'price':product.price,'url': product.url}
            }
        }
    }
    useHead({
        title:`Butter in ${route.params.flavor ? route.params.flavor : 'Biscuit'}`        
    })
    definePageMeta({
        layout: 'layoutproducts',
    })

    console.log( route.query.maxPrice)
</script>

<template>
    <div class="md:w-[65%] w-full">
        <div class="w-full flex flex-wrap shadow border md:p-4">
            <ProductCard v-for="product in productlist" :key="product.id" :product="product" @favor="handleFavorite" :hearted="product.id in favorite"/>
        </div>
    </div>
</template>