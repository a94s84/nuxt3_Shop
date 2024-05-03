<script setup>
    import heartFilled from "@/assets/heartFilled.png"
    import heartOutline from "@/assets/heartOutline.png"
    const props = defineProps({
        product: Object,
        hearted: Boolean
    })
    const emit = defineEmits(['favor'])
</script>

<template>
    <div class="md:w-1/3 w-1/2 mb-5 p-2 text-center relative cursor-pointer" @click.prevent="navigateTo(`/product/${product.flavor}-${product.id}`)">
        <img :src="hearted ? heartFilled : heartOutline" class="absolute w-6 right-7 top-7 z-20" @click.stop="emit('favor', product)" alt="">
        <img :src="product.url">
        <div>
            <p>{{product.flavor}}</p>
            <p>{{product.name}}</p>
            <p>$ {{product.price}}</p>
        </div>
    </div>
</template>