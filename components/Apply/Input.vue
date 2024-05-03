<script setup>
    const props = defineProps({
        name: String,
        title: String,
        placeholder: String,
        type: String,
        pattern: String
    })
    const emits = defineEmits(['changeInput'])
    const inputValue = ref("")
    const onChange = () => {
        emits('changeInput', inputValue.value, props.name)
    }
</script>

<template>
    <div class="flex flex-col mb-4" :class="name == 'address' ? 'w-[100%]' : 'w-[45%]' ">
        <label for="" class="mb-1 text-sm">{{title}}</label>
        <input :type="type" class="p-1 border rounded-md" :placeholder="placeholder" :pattern="pattern" :name="name" v-model="inputValue" @input="onChange">
    </div>
</template>