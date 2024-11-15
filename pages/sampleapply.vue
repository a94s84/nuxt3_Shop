<script setup>
    //驗證身分
    definePageMeta({
        middleware:['auth']
    })
    const user = useSupabaseUser();
    //取得flavorlist及amountlist
    const flavorlist = ref([]);
    const amountlist = ref([]);
    const { data, error } = await useFetch(`/api/sampleapply`);
    if (error.value) {
        console.error('Fetch error:', error.value);
    } else {
        const { flavorlist: fetchedFlavorlist = [], amountlist: fetchedAmountlist = [] } = data.value || {};
        flavorlist.value = fetchedFlavorlist;
        amountlist.value = fetchedAmountlist;
    }
    //綁定資料
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
    const handleSubmit = async () =>{
        const { flavor, amount, ...rest } = info.value;
        const body = {
            ...rest,
            flavor: parseInt(flavor),
            amount: parseInt(amount),
            userID: user.value.id
        }
        try{
            await $fetch("/api/sampleapply", {
                method: "POST",
                body: body
            })
            info.value = {
                name: '',
                phone: '',
                email: '',
                address: '',
                flavor: '',
                amount: '',
                date: ''
            };
            alert("申請成功!");
            navigateTo("/")
        }
        catch(error) {
            alert(error.statusMessage);
        }
    }
    const config = useRuntimeConfig()
</script>

<template>
    <div class="max-w-2xl mx-auto pb-10">
        <h1 class="text-center text-4xl mt-10 mb-5">Try these best Biscuits ...</h1>
        <p class="text-center text-xl mb-10">Apply Form</p>
        <div class="h-[220px] my-5 bg-no-repeat bg-cover bg-bottom" :style="{backgroundImage:`url(${config.public.supabase.url}/storage/v1/object/public/images/public/apply_bg.webp)`}"></div>
        <div class="my-10 border-t p-3 flex flex-wrap justify-between">
            <ApplyInput title="Name*" type="text" name="name" placeholder="" @change-input="onChangeInput"/>
            <ApplyInput title="Phone Number*" type="tel" name="phone" placeholder="" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" @change-input="onChangeInput"/>
            <ApplyInput title="Email*" type="email" name="email"  placeholder="" @change-input="onChangeInput"/>
            <ApplySelect title="Biscuit Flavor*" :options="flavorlist" name="flavor" @change-input="onChangeInput" />
            <ApplySelect title="Estimated Amount*" :options="amountlist" name="amount" @change-input="onChangeInput" />
            <ApplyDate title="Date of Pickup*" name="date" @change-input="onChangeInput"/>
            <ApplyInput title="Address*" type="text" name="address"  placeholder="" @change-input="onChangeInput"/>
        </div>
        <button class="block my-10 mx-auto w-4xl py-1 px-7 rounded-md bg-orange-200 hover:bg-black hover:text-white" @click="handleSubmit">Apply</button>
    </div>
</template>