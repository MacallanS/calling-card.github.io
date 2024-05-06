<template>
    <div
        id="contact"
        class="contact-animation lg:my-28 my-10 flex flex-col items-center lg:gap-16 gap-8 relative"
    >
        <h2 class="lg:text-7xl text-4xl w-fit">Для быстрой связи со мной</h2>
        <form
            method="POST"
            data-netlify="true"
            class="flex flex-col lg:gap-8 gap-4 items-center xl:w-1/4"
        >
            <input
                id="name"
                class="lg:px-10 px-5 lg:py-6 py-3 bg-white lg:text-4xl text-3xl rounded-3xl w-full text-black font-sans"
                name="name"
                type="text"
                required
                placeholder="Введите имя"
            />
            <input
                id="email"
                class="lg:px-10 px-5 lg:py-6 py-3 bg-white lg:text-4xl text-3xl rounded-3xl w-full text-black font-sans"
                name="email"
                type="email"
                required
                placeholder="Введите почту"
            />
            <textarea
                id="area"
                class="lg:px-10 px-5 lg:py-6 py-3 bg-white lg:text-4xl text-3xl rounded-3xl text-black w-full lg:h-80 h-64 resize-none outline-none border-none font-sans"
                name="area"
                required
                placeholder="Введите текст"
            />
            <button
                class="lg:mx-4 mx-2 2xl:text-5xl 2xl:py-7 2xl:px-28 xl:text-4xl xl:py-6 xl:px-20 text-2xl py-4 px-12 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110"
                type="submit"
                name="submit"
            >
                Отправить
            </button>
        </form>
        <SvgoIconContact
            class="contact-svg absolute right-96 top-12 2xl:block hidden"
            filled
        />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.nuxt-icon.contact-svg {
    width: 30rem;
    height: 30rem;
}

.light {
    input,
    textarea {
        background-color: $dark-color;
        color: $light-color;
    }
}

.dark {
    input,
    textarea {
        background-color: $light-color;
        color: $dark-color;
    }
}

input:invalid,
textarea:invalid {
    border: 2px solid #fca5a5;
}
</style>
