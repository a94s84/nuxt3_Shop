<script setup>
    const props = defineProps ( {
        imgurl: String
    })
</script>

<template>
    <div class="w-1/2 mb-5 cursor-pointer">
        <img :src="imgurl">
    </div>
</template>