<script setup>
    const route = useRoute()
    const router = useRouter()
    const { products } = useProductsData();
    const flavorlist = products.reduce((a, curr) => a.includes(curr.flavor) ? a : [...a, curr.flavor],[])
    const modalStatus = ref({
        flavor: true,
        price: false
    })
    const priceRange = ref({
        min: "",
        max: ""
    })
    const priceRangeText = computed(() => {
        const minPrice = route.query.minPrice;
        const maxPrice = route.query.maxPrice;
        if( !minPrice && !maxPrice) return "Any"
        else if (!minPrice && maxPrice) {return `< $ ${maxPrice}`}
        else if (minPrice && !maxPrice) {return `> $ ${minPrice}`}
        else return `$ ${minPrice} - $ ${maxPrice}`
    })
    const updateModalStatus = (key) => {
        modalStatus.value[key] = !modalStatus.value[key]
    }
    const handlerFlavorChage = (flavor) => {
        flavor ? navigateTo(`/productlist/${flavor}`) :navigateTo(`/productlist`)
    }
    const handlerPriceChange = () => {
        updateModalStatus('price');
        if(priceRange.value.min && priceRange.value.max) {
            if(parseInt(priceRange.value.min) > parseInt(priceRange.value.max)) return
        }
        router.push({
            query: {
                minPrice: priceRange.value.min,
                maxPrice: priceRange.value.max
            }
        })
        priceRange.value.min=""
        priceRange.value.max=""
    }
</script>

<template>
    <!-- BISCUIT SIDE BAR -->
    <div class="md:w-[30%] md:mr-[5%] mr-0 mb-2 z-30 w-[100%]">
        <div class="flex flex-wrap justify-between relative border">
            <p class="bg-black text-white p-2 w-1/3">Flavor</p>
            <p class="py-2 px-1 text-center font-medium w-2/3 border-b font-bold cursor-pointer" @click="updateModalStatus('flavor')">{{route.params.flavor || 'ALL'}}</p>
            <ul class="p-2 text-right w-full flex flex-col items-end" v-show="modalStatus.flavor">
                <li class="w-2/3 text-center mb-3 leading-7 hover:bg-slate-200 cursor-pointer" @click="handlerFlavorChage('')">ALL</li>
                <li class="w-2/3 text-center mb-3 leading-7 hover:bg-slate-200 cursor-pointer" v-for="flavor in flavorlist" :key="flavor" @click="handlerFlavorChage(flavor)">{{flavor}}</li>
            </ul>
        </div>
        <div class="flex flex-wrap justify-between relative cursor-pointer border border-t-0">
            <p class="bg-black text-white p-2 w-1/3">Price</p>
            <p class="py-2 px-1 text-center font-medium w-2/3" @click="updateModalStatus('price')">{{priceRangeText}}</p>
            <div class="flex items-center p-3 w-full text-xs border-t" v-show="modalStatus.price">
                <input type="number" v-model="priceRange.min" placeholder="min" class="w-[35%] border p-1 focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <span class="inline-block w-[5%] px-[1%] text-center">-</span>
                <input type="number" v-model="priceRange.max" placeholder="max" class="w-[35%] border p-1 focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <button class="w-[18%] ml-[5%] p-1 text-center bg-slate-200 rounded" @click="handlerPriceChange">Apply</button>
            </div>
        </div>
    </div>
    <!-- END BISCUIT SIDE BAR -->
</template>