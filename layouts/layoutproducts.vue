<template>
    <div>
        <NavBar />
        <div class="mt-4 mx-auto max-w-7xl p-4 lg:w-3/4">
            <div class="mt-8 flex flex-wrap lg:flex-nowrap">
                <SideMenuBar />
                <slot />
            </div>
        </div>
    </div>
</template>