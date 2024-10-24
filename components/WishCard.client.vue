<script setup>
    const favoriteData = useLocalStorage("favorite", {})
    const handleDelete = (id) => {
        if(id in favoriteData.value) {
            delete favoriteData.value[id]
        }
    }
</script>

<template>
<div class="flex justify-between flex-wrap">
    <div class="flex justify-between md:w-[50%] w-full even:border-l-2 p-4 mb-4 items-center" v-for="wishedProduct in favoriteData" :key="wishedProduct">
        <div class="flex w-[75%] items-center">
            <div class="block w-[30%] md:w-[40%] cursor-pointer" @click.prevent="navigateTo(`/product/${wishedProduct.flavor}-${wishedProduct.id}`)">
                <img :src="wishedProduct.url" :alt="wishedProduct.name">
            </div>
            <div class="p-4 cursor-pointer w-[70%] md:w-[60%]" @click.prevent="navigateTo(`/product/${wishedProduct.flavor}-${wishedProduct.id}`)">
                <p>{{wishedProduct.flavor}}</p>
                <p>{{wishedProduct.name}}</p>                    
                <p>$ {{wishedProduct.price}}</p>
            </div>
        </div>
        <div class="p-1 sm:p-4 w-[25%]">
            <button class="bg-slate-200 sm:px-3 px-1" @click="handleDelete(wishedProduct.id)">Delete</button>
        </div>
    </div>
</div>

</template>