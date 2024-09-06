<script setup>
  const flavor = ref("");
  const flavorError = ref(false)
  const { logout } = useSupabaseLogin();
  const user = useSupabaseUser();
  const handleSearch = () => {
    if(!flavor.value) {
      return flavorError.value = true
    }
    navigateTo(`/productlist/${flavor.value}`)
  }
</script>


<template>
    <header class="sticky top-0 z-50 flex justify-between items-center bg-white p-3 md:p-4 shadow-md">
      <NuxtLink to="/" class="text-3xl">But.</NuxtLink>
      <div class="flex items-center">
        <!-- <div class="font-serif rounded-md flex justify-between drop-shadow-md max-auto w-[210px]">
          <input type="text" class="w-[90%] py-1 px-5 text-m rounded-full focus:outline-none" :class="flavorError ? 'border border-red-500' : ''" placeholder="Search by Flavor" v-model="flavor" @keyup.enter="handleSearch">
          <button class="ml-2 w-[30px]" @click="handleSearch"><img class="w-5" src="https://www.afad.com.tw/Source/images/zh-cht/icons/search.svg" alt="search"></button>
        </div> -->
        <NuxtLink to="/wishlist"><img class="w-6" src="https://static.tpx.tw/sff/pazzo/static/img/wish.svg" alt="wishlist"></NuxtLink>
        <div v-if="user" class="relative group cursor-pointer">
          <img class="w-7 ml-3" src="https://static.tpx.tw/sff/pazzo/static/img/icon-member.svg" alt="member">
          <div class="absolute top-7 right-0 w-[200px] bg-white border border-gray hidden hover:block group-hover:block">
            <ul>
              <li class="hover:bg-gray-200 py-2 px-3 border-b"><NuxtLink to="/member">Member Center</NuxtLink></li>
              <li class="hover:bg-gray-200 py-2 px-3 border-b" @click="logout">Logout</li>
            </ul>
          </div>
        </div>        
        <NuxtLink to="/login" v-else><img class="w-7 ml-3" src="https://static.tpx.tw/sff/pazzo/static/img/icon-member.svg" alt="login"></NuxtLink>
      </div>
    </header>
</template>