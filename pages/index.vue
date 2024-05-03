<script setup>
    useHead({
        title:"Butter Biscuit",
    })
</script>
<template>
    <div>
        <div class="relative w-full h-screen bg-no-repeat bg-cover bg-bottom bg-[url('https://www.but.com.tw/system/system_images/images/000/000/125/large/%E9%9B%BB%E8%85%A6%E9%A6%96%E9%A0%81-01.jpg')]">
            <div class="absolute w-full h-full flex justify-center items-end">
                <NuxtLink to="/productlist" class="pb-5 flex flex-col items-center cursor-pointer">
                    <div class="inline-block border border-white px-3 py-1 text-xl text-white font-bold transition ease-in-out delay-150 hover:bg-black hover:skew-y-6">Shop Now</div>
                    <h1 class="text-4xl mb-10 text-white font-mono lg:text-8xl">In butter we TRUST</h1>
                </NuxtLink>
            </div>
        </div>
        <div class="relative w-full h-screen bg-no-repeat bg-cover bg-bottom bg-[url('https://www.but.com.tw/system/system_images/images/000/000/316/large/1920x1080.jpg')]">
            <div class="absolute right-5 w-[40%] h-full flex flex-col justify-center">
                <div class="w-full text-white ">
                    <h2 class="font-bold text-3xl mb-1">About baby gift</h2>
                    <h3 class="font-bold text-base mb-4">關於彌月禮盒</h3>
                    <div class="text-xs mb-4 leading-loose mb-4">
                        用最頂級的艾許奶油<br/>
                        與大家分享新生的喜悅<br/>
                        懷著期待和祝福<br/>
                        迎接全新的生命身分與前所未有的感動<br/>
                    </div>
                    <div class="text-xs mb-4 leading-loose mb-6">
                        每款禮盒皆附上當年度生肖說明卡<br/>
                        增添更多彌月的可愛氣息
                    </div>
                    <div class="text-xs mb-4 leading-loose mb-6">
                        <span class="font-bold text-base">賞味期限：</span><br/>
                        常溫保存12天，如需久放，建議冷藏
                    </div>
                </div>
                <div class="w-full flex">
                    <NuxtLink to="/productlist" class="block border py-2 px-6 text-sm text-white text-center mr-2 hover:bg-white hover:text-orange-300">了解更多禮盒</NuxtLink>
                    <NuxtLink to="/sampleapply" class="block border py-2 px-6 text-sm text-white text-center mr-2 hover:bg-white hover:text-orange-300">填寫試吃申請</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>