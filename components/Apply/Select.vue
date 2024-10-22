<script setup>
    const props = defineProps({
        name: String,
        title: String,
        options: Array
    })
    const emits = defineEmits(['changeInput'])
    const selectedValue = ref("")
    const onChange = () => {
        emits('changeInput', selectedValue.value, props.name)
    }
</script>

<template>
    <div class="flex flex-col w-[45%] mb-4">
        <label for="" class="mb-1 text-sm">{{title}}</label>
        <select name="" class="p-1 border rounded-md" @change="onChange" v-model="selectedValue">
            <option disabled value="">Select</option>
            <option v-for="option in options" :key="option.id" :value="option.id">{{option.name}}</option>
        </select>
    </div>
</template>