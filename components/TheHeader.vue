<template>
    <header
        class="fixed w-full top-0 bg-zinc-900/70 backdrop-blur bg-none z-50 header-animation text-white"
    >
        <div
            class="after flex justify-between items-center lg:mx-20 mx-10 lg:py-8 py-4 relative after:h-px after:bg-white after:w-full after:absolute after:bottom-0"
        >
            <div class="flex lg:gap-20 gap-4">
                <NuxtLink
                    class="lg:text-4xl text-2xl text-red-300 transition-transform duration-500 ease transform hover:-translate-y-2"
                    href="/"
                >
                    Khametov Artem
                </NuxtLink>
                <NuxtLink
                    class="lg:text-4xl text-2xl lg:inline hidden transition-transform duration-500 ease transform hover:-translate-y-2"
                    href="/"
                >
                    Frontend Developer
                </NuxtLink>
            </div>
            <div class="xl:gap-10 xl:flex hidden gap-4">
                <button
                    v-if="$route.path !== '/contact'"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2"
                    @click="handleAboutClick"
                >
                    About
                </button>
                <button
                    v-if="$route.path !== '/contact'"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2"
                    @click="handleProjectsClick"
                >
                    Projects
                </button>
                <NuxtLink
                    v-if="$route.path !== '/contact'"
                    to="/contact"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2 text-red-500"
                    @click="handleContactClick"
                >
                    Contact
                </NuxtLink>
                <NuxtLink
                    v-if="$route.path == '/contact'"
                    to="/"
                    class="lg:text-4xl text-2xl cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2 text-red-500"
                    @click="handleContactClick"
                >
                    Home
                </NuxtLink>
            </div>
            <div class="flex justify-between items-center gap-5">
                <SwitchCase
                    :model-value="switchValue"
                    @update:model-value="handleSwitchChange"
                >
                    <SvgoIconSwitch
                        class="svg absolute lg:-left-24 lg:-top-1 top-1 -left-12"
                        filled
                    />
                </SwitchCase>
                <div class="xl:hidden block">
                    <SvgoIconMenu
                        class="menu cursor-pointer transition-transform duration-500 ease transform hover:-translate-y-2"
                        filled
                        @click="showPop"
                    />
                </div>
            </div>
        </div>
        <transition name="pop">
            <PopUp :show="popVisible" @click.self="closePop" />
        </transition>
    </header>
</template>

<script setup lang="ts">
const switchValue = ref(false)

function handleSwitchChange() {
    switchValue.value = !switchValue.value
}

watch(switchValue, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    }
})

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

const popVisible = ref(false)

function showPop() {
    popVisible.value = !popVisible.value

    if (popVisible.value) {
        window.addEventListener('scroll', closePop, true)
    }
}

function closePop() {
    popVisible.value = false
    window.removeEventListener('scroll', closePop, true)
}

onMounted(() => {
    document.documentElement.classList.add('dark')
})
</script>

<style lang="scss" scoped>
.nuxt-icon.menu {
    width: 2rem;
    height: 2rem;
}

@keyframes fade-in {
    0% {
        transform: translateY(-100px);
    }

    100% {
        transform: translateY(0);
    }
}

.header-animation {
    animation: fade-in 1.5s ease;
    transition: all 0.5s ease;
}

.nuxt-icon.svg {
    width: 2rem;
    height: 2rem;
}

@media (min-width: 1024px) {
    .nuxt-icon.svg {
        width: 4rem;
        height: 4rem;
    }
}

.pop-enter-active,
.pop-leave-active {
    transition: opacity 0.3s ease;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
}
</style>
