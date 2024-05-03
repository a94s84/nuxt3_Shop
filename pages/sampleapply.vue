<script setup>
    const { products } = useProductsData();
    const flavorlist = products.reduce((a, curr) => a.includes(curr.flavor) ? a : [...a, curr.flavor],[])
    const amoutlist = ['20-50(boxes)', '50-100(boxes)','10-150(boxes)', '150 boxes or more']
    const info = useState('applyInfo', () => {
        return {
            name: '',
            phone: '',
            email: '',
            address: '',
            flavor: '',
            amount: '',
            date: ''
        }
    })

    const onChangeInput = (data, name) => {
        info.value[name] = data;
    }
</script>

<template>
    <div class="max-w-2xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-5">Try these best Biscuits ...</h1>
        <p class="text-center text-xl mb-10">Apply Form</p>
        <div class="h-[220px] my-5 bg-no-repeat bg-cover bg-bottom bg-[url('https://www.but.com.tw/system/butters/background_images/000/000/022/medium/1920x892-03_mini.jpg')]"></div>
        <div class="my-10 border-t p-3 flex flex-wrap justify-between">
            <ApplyInput title="Name*" type="text" name="name" placeholder="" @change-input="onChangeInput"/>
            <ApplyInput title="Phone Number*" type="tel" name="phone" placeholder="09-0000-0000" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" @change-input="onChangeInput"/>
            <ApplyInput title="Email*" type="email" name="email"  placeholder="" @change-input="onChangeInput"/>
            <ApplySelect title="Biscuit Flavor*" :options="flavorlist" name="flavor" @change-input="onChangeInput" />
            <ApplySelect title="Estimated Amount*" :options="amoutlist" name="amount" @change-input="onChangeInput" />
            <ApplyDate title="Date of Pickup*" name="date" @change-input="onChangeInput"/>
            <ApplyInput title="Address*" type="text" name="address"  placeholder="" @change-input="onChangeInput"/>
        </div>
        <button class="block my-10 mx-auto w-4xl py-1 px-7 rounded-md bg-orange-200 hover:bg-black hover:text-white">Apply</button>
    </div>
</template>