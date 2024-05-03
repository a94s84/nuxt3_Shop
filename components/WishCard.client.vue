<script setup>
    const favoriteData = useLocalStorage("favorite", {})
    const handleDelete = (id) => {
        if(id in favoriteData.value) {
            delete favoriteData.value[id]
        }
    }
</script>

<template>
    <div class="flex justify-between w-[50%] even:border-l-2 p-4 mb-4 items-center" v-for="wishedProduct in favoriteData" :key="wishedProduct">
        <div class="flex w-[70%] items-center">
            <div class="block md:w-[40%] cursor-pointer" @click.prevent="navigateTo(`/product/${wishedProduct.flavor}-${wishedProduct.id}`)">
                <img :src="wishedProduct.url" :alt="wishedProduct.name">
            </div>
            <div class="p-4 cursor-pointer" @click.prevent="navigateTo(`/product/${wishedProduct.flavor}-${wishedProduct.id}`)">
                <p>{{wishedProduct.flavor}}</p>
                <p>{{wishedProduct.name}}</p>                    
                <p>$ {{wishedProduct.price}}</p>
            </div>
        </div>
        <div class="p-4 w-[30%]">
            <button>Add to Cart</button>
            <button @click="handleDelete(wishedProduct.id)">Delete</button>
        </div>
    </div>
</template>