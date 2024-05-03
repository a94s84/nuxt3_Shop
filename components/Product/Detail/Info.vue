<script setup>
    const props = defineProps({
        biscuit: Object
    })
</script>

<template>
    <div class="relative w-[100%] p-4 bg-black text-white lg:fixed lg:top-[40%] lg:right-0 lg:w-[35%] ">
        <p class="text-xl font-blod mb-2">{{biscuit.flavor}}</p>
        <p class="text-xl font-blod mb-2">$ {{biscuit.price}}</p>
        <p class="mb-5">{{biscuit.description}}</p>
        <p class="text-xs">尺寸：{{biscuit.size}}</p>
        <p class="text-xs">淨重：{{biscuit.weight}}</p>
        <p class="text-xs mb-5">成份：{{biscuit.ingredients}}</p>
        <p class="text-xs">保存方式：賞味期12天，可常溫；若久放，建議冷藏。</p>
        <div class="text-xs text-center mt-8 border border-white mx-auto p-2 w-[120px] cursor-pointer hover:bg-white hover:text-black">加入購物車</div>
    </div>
</template>