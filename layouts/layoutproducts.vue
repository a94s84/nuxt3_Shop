<template>
    <div class="">
        <NavBar />
        <div class="mt-4 max-w-7xl p-4 lg:w-[75vw]  mx-auto">
            <div class="mt-8 flex flex-wrap lg:flex-nowrap">
                <SideMenuBar />
                <slot />
            </div>
        </div>
    </div>
</template>