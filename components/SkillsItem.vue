<template>
    <div class="buttons-animation flex flex-col items-center lg:w-6/12 relative">
        <h3 class="lg:text-5xl text-3xl mb-8 text-4xl lg:text-end text-center">
            Список навыков/умений:
        </h3>
        <SvgoIconSkills class="me absolute lg:top-8 top-4 lg:-right-72 -right-32" filled />
        <div class="grid gap-8 grid-cols-2 justify-items-center">
            <ButtonItem>HTML/CSS</ButtonItem>
            <ButtonItem>JS/TS</ButtonItem>
            <ButtonItem>SCSS/SASS</ButtonItem>
            <ButtonItem>GIT</ButtonItem>
            <ButtonItem>TAILWIND</ButtonItem>
            <ButtonItem>VUE</ButtonItem>
            <ButtonItem>NUXT</ButtonItem>
            <ButtonItem>FIGMA/TILDA</ButtonItem>
            <ButtonItem>React</ButtonItem>
            <ButtonItem>Django</ButtonItem>
        </div>
    </div>
    <CubeItem />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
