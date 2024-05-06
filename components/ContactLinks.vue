<template>
    <div class="flex mx-20 xl:justify-between xl:flex-row flex-column items-center">
        <div class="links-animation">
            <div
                id="about"
                class="lg:my-28 my-10 flex flex-col xl:items-start items-center xl:w-2/3 w-full relative"
            >
                <h2 class="lg:text-7xl text-4xl w-fit xl:text-start text-center">
                    Если вам понравился данный сайт, то дайте пожалуйста отзыв
                </h2>
                <p class="my-2 lg:text-3xl text-2xl w-fit text-red-300">Khametov Artem</p>
                <SvgoIconAboutAgain class="me absolute top-16 -left-3" filled />
            </div>
            <div class="flex flex-row xl:gap-12 gap-8 xl:justify-start justify-center">
                <NuxtLink
                    class="transition-transform duration-500 ease transform hover:-translate-y-3"
                    href="https://github.com/MacallanS"
                    target="_blank"
                >
                    <SvgoIconGit class="links" filled />
                </NuxtLink>
                <NuxtLink
                    class="transition-transform duration-500 ease transform hover:-translate-y-3"
                    href="https://vk.com/macalllans"
                    target="_blank"
                >
                    <SvgoIconVk class="links" filled />
                </NuxtLink>
                <NuxtLink
                    class="transition-transform duration-500 ease transform hover:-translate-y-3"
                    href="https://t.me/MacalllanS"
                    target="_blank"
                >
                    <SvgoIconTg class="links" filled />
                </NuxtLink>
                <NuxtLink
                    class="transition-transform duration-500 ease transform hover:-translate-y-3"
                    href="mailto:khametovartem@gmail.com"
                >
                    <SvgoIconEmail class="links" filled />
                </NuxtLink>
            </div>
        </div>
        <CubeItem class="xl:block hidden my-40 mx-48" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nuxt-icon.links {
    width: 3rem;
    height: 3rem;
}

@media (min-width: 1024px) {
    .nuxt-icon.links {
        width: 5rem;
        height: 5rem;
    }
}
</style>
