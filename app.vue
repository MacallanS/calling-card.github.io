<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@use '@/assets/scss/variables' as *;

.dark {
    background-color: $dark-color;
    color: $light-color;
}

.light {
    background-color: $light-color;
    color: $dark-color;

    header {
        background: none;
        color: $dark-color;

        .after::after {
            background-color: $dark-color;
        }
    }

    .nuxt-icon.developer,
    .nuxt-icon.connect,
    .nuxt-icon.links,
    .nuxt-icon.svg {
        path {
            fill: $dark-color;
        }
    }

    .nuxt-icon.me,
    .nuxt-icon.menu {
        path {
            stroke: $dark-color;
        }
    }
}

* {
    padding: 0;
    margin: 0;
    font-size: 1rem;
}

input,
textarea {
    user-select: text;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: $dark-color;
    transition: all 0.5s ease-in-out;
}

body {
    font-family: Goldman, sans-serif;
    max-width: 1920px;
    overflow-x: hidden;
    margin: auto;
}

h1 {
    font-size: 1.4rem;
}

h2 {
    font-size: 1.3rem;
}

h3 {
    font-size: 1.2rem;
}

h4 {
    font-size: 1.1rem;
}

h5 {
    font-size: 1rem;
}

a {
    text-decoration: none;
    outline: none;
}

input {
    display: block;
    box-sizing: border-box;
    background: none;
    border: none;
    border-radius: 0.15rem;
    outline: none;
    transition: 100ms;
}

button {
    display: block;
    box-sizing: border-box;
    text-align: center;
    background: none;
    border: none;
    border-radius: 0.2rem;
    outline: none;
    cursor: pointer;
    transition: 100ms;
}

ol,
ul {
    list-style: none;
}
</style>
