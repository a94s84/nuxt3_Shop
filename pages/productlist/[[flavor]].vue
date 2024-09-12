<script setup>
    const route = useRoute()

    //商品列表
    const { products } = useProductsData();
    const productlist = computed(() => {
        const flavor = decodeURIComponent(route.params.flavor)
        const minPrice = parseInt(route.query.minPrice)
        const maxPrice = parseInt(route.query.maxPrice)
        let filteredProduct = products
        if(flavor) filteredProduct = filteredProduct.filter(i => i.flavor.trim() === flavor)
        if(minPrice) filteredProduct = filteredProduct.filter(i => parseInt(i.price) >= parseInt(minPrice))
        if(maxPrice) filteredProduct = filteredProduct.filter( i => i.price <= parseInt(maxPrice))
        return filteredProduct
    })

    //最愛清單
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
</script>

<template>
    <div class="md:w-[65%] w-full">
        <div class="w-full flex flex-wrap shadow border md:p-4">
            <template v-if="productlist.length > 0">
                <ProductCard v-for="product in productlist" :key="product.id" :product="product" @favor="handleFavorite" :hearted="product.id in favorite"/>
            </template>
            <template v-else>
                <div class="text-center w-full py-9">No Product is Matching the Query</div>
            </template>
        </div>
    </div>
</template>