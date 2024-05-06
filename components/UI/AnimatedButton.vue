<template>
    <NuxtLink
        href="/contact"
        class="link lg:py-10 py-5 lg:px-24 px-12 lg:text-5xl text-3xl m-4 rounded-3xl border-2 border-solid border-red-300 cursor-pointer"
    >
        Contact me
        <SvgoIconBell class="bell" filled />
    </NuxtLink>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nuxt-icon.bell {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
}

@keyframes bell {
    7% {
        transform: rotateZ(0);
        scale: (1);
    }

    15% {
        transform: rotateZ(-15deg);
    }

    20% {
        transform: rotateZ(10deg);
    }

    25% {
        transform: rotateZ(-10deg);
    }

    30% {
        transform: rotateZ(6deg);
    }

    35% {
        transform: rotateZ(-4deg);
    }

    40% {
        transform: rotateZ(0);
        scale: (1.2);
    }
}

.link {
    animation: bell 2s linear infinite;
}
</style>
