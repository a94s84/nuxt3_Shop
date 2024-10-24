<script setup>
    const props = defineProps ( {
        imgurl: String
    })
</script>

<template>
    <div class="sm:w-1/2 w-3/4 mb-5 cursor-pointer">
        <img :src="imgurl">
    </div>
</template>