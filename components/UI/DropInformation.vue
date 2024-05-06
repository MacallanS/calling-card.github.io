<template>
    <div v-if="show" class="absolute inset-0 flex justify-center items-center">
        <div
            class="drop flex sm:flex-row flex-col items-center justify-center lg:w-2/3 lg:mx-20 sm:p-5 pt-3 rounded-3xl"
        >
            <img
                class="border-2 border-solid border-black rounded-3xl w-1/2 h-full"
                :src="image"
                alt="Image project"
            />
            <div
                class="flex flex-col text-center justify-center xl:p-20 sm:p-5 p-1 xl:w-1/2 sm:w-3/4 w-full xl:h-full"
            >
                <p class="xl:text-4xl text-2xl p-5">Детали проекта: <br />{{ dropText }}</p>
                <div class="flex flex-row justify-center p-3">
                    <NuxtLink
                        class="mx-2 text-2xl xl:py-5 py-2 lg:px-12 px-6 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110"
                        :href="dropLink"
                        target="_blank"
                    >
                        Ссылка на проект
                    </NuxtLink>
                    <button
                        class="mx-2 text-2xl xl:py-5 py-2 xl:px-12 px-5 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110"
                        @click="closeDrop"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    show: Boolean
    image: string
    dropText: string
    dropLink: string
}>()

const emit = defineEmits(['update:show'])

function closeDrop() {
    emit('update:show', false)
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.light {
    .drop {
        background-color: $dark-color;
        color: $light-color;
    }
}

.dark {
    .drop {
        background-color: $light-color;
        color: $dark-color;
    }
}
</style>
