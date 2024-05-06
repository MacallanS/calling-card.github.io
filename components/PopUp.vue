<template>
    <div
        v-if="show"
        class="pop w-fit p-2 h-screen absolute top-20 right-0 bg-zinc-900/70 backdrop-blur bg-none"
    >
        <ul class="w-fit p-3">
            <li class="my-5 mx-2">
                <button
                    v-if="$route.path !== '/contact'"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2"
                    @click="handleAboutClick"
                >
                    About
                </button>
            </li>
            <li class="my-5 mx-2">
                <button
                    v-if="$route.path !== '/contact'"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2"
                    @click="handleProjectsClick"
                >
                    Projects
                </button>
            </li>
            <li class="my-5 mx-2">
                <NuxtLink
                    v-if="$route.path !== '/contact'"
                    to="/contact"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2 text-red-500"
                    @click="handleContactClick"
                >
                    Contact
                </NuxtLink>
            </li>
            <li class="my-5 mx-2">
                <NuxtLink
                    v-if="$route.path == '/contact'"
                    to="/"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2 text-red-500"
                    @click="handleContactClick"
                >
                    Home
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps({ show: Boolean })

function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}

function scrollToElementProject(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
}

function handleAboutClick() {
    scrollToElement('about')
}

function handleProjectsClick() {
    scrollToElementProject('projects')
}

function handleContactClick() {
    scrollToElement('contact')
}
</script>

<style lang="scss">
@use '@/assets/scss/variables' as *;

.light {
    .pop {
        color: $dark-color;
    }
}

.dark {
    .pop {
        color: $light-color;
    }
}
</style>
