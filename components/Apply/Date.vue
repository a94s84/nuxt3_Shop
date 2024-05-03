<script setup>
    const props = defineProps({
        name: String,
        title: String,
    })
    const emits = defineEmits(['changeInput'])
    const inputValue = ref("")
    const onChange = () => {
        emits('changeInput', inputValue.value, props.name)
        console.log('changeInput'+ inputValue.value +"dddd:" + props.name)
    }
    const today = new Date()
    const dayafter5 = new Date(today.setDate(today.getDate() + 5))
    const minDate = dayafter5.toISOString().split('T')[0]
    const nextyear = new Date(today.setFullYear(today.getFullYear() + 1))
    const maxDate = nextyear.toISOString().split('T')[0]
</script>

<template>
    <div class="flex flex-col w-[45%] mb-4">
        <label for="" class="mb-1 text-sm">{{title}}</label>
        <input type="date" class="p-1 border rounded-md" :min="minDate" :max="maxDate" v-model="inputValue" @change="onChange">
    </div>
</template>