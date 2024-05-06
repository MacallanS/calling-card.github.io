<template>
    <div class="sm:mx-20 mx-10 lg:mt-40 sm:mt-28 mt-10">
        <section
            v-if="!loading"
            class="lg:my-20 mt-10 flex relative"
            :class="{ loading: loading }"
        >
            <SvgoIconBackground class="img ml-auto svg-animation-bg" filled />
            <SvgoIconTitle
                class="developer svg-animation-text absolute lg:left-24 -left-4 lg:bottom-40 bottom-20"
                filled
            />
        </section>
        <section
            class="flex lg:mx-28 mx-8 lg:justify-between gap-10 lg:flex-row flex-col items-center"
        >
            <div
                id="about"
                class="title-animation flex flex-col lg:items-end items-center lg:w-6/12 relative"
            >
                <h2 class="lg:text-7xl text-4xl w-fit lg:text-end text-center">
                    Привет, меня зовут Артём
                </h2>
                <p class="my-1 lg:text-3xl text-2xl w-fit text-red-300">Khametov Artem</p>
                <SvgoIconAbout class="me absolute -top-36 -right-72" filled />
                <h3 class="lg:text-5xl text-3xl lg:text-end text-center mt-8">
                    Я студент 2 курса Московского Политеха. Учусь на направлении
                    веб-разработка, также заканчивал курс. Разработкой занимаюсь не первый год
                    и за это время смог поучавстовать в различных проектах, о которых вы можете
                    прочитать ниже.
                </h3>
            </div>
            <img
                class="img-animation rounded-full lg:w-fit lg:h-fit w-72 h-72"
                src="/photo.jpg"
                alt="photo"
            />
        </section>
        <section class="lines-animation">
            <div class="-rotate-3">
                <RunningLine class="running-animation-first" />
            </div>
            <div class="rotate-3">
                <RunningLine class="running-animation-second" />
            </div>
        </section>
        <section class="flex xl:mx-28 mx-0 justify-between xl:flex-row flex-col items-center">
            <SkillsItem />
        </section>
        <section class="slider-animation lg:mt-52 mt-48">
            <SliderCarousel v-if="isLoaded" />
        </section>
        <section class="lines-animation">
            <div id="projects" class="rotate-3">
                <RunningLine class="running-animation-first" />
            </div>
            <div class="-rotate-3">
                <RunningLine class="running-animation-second" />
            </div>
        </section>
        <section class="buttons-animation flex flex-col xl:w-6/12 sm:w-2/3 mx-auto">
            <AnswerItem />
        </section>
        <section
            id="contact"
            class="lines-animation lg:my-28 my-10 m-auto flex flex-col items-center lg:w-6/12 relative"
        >
            <h3 class="lg:text-5xl text-3xl lg:m-8 m-4 text-center">
                Вам понравился мой сайт? Обязательно свяжитесь со мной любым удобным способом
            </h3>
            <SvgoIconEnd
                class="end absolute xl:top-28 top-24 xl:-right-20 right-0 sm:invisible xl:visible"
                filled
            />
            <AnimatedButton />
        </section>
    </div>
</template>

<script setup lang="ts">
const loading = ref(true)

setTimeout(() => {
    loading.value = false
}, 500)

const isLoaded = ref(false)

function scroll() {
    const move = document.querySelectorAll(
        '.title-animation, .img-animation, .lines-animation, .buttons-animation, .slider-animation',
    )

    for (let i = 0; i < move.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = move[i].getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
            move[i].classList.add('active')
        } else {
            move[i].classList.remove('active')
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', scroll)
    isLoaded.value = true
})
</script>

<style lang="scss">
.loading {
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0s 2s,
        opacity 2s ease;
}

.nuxt-icon {
    width: 50rem;
    height: 25rem;
}

.nuxt-icon.developer {
    width: 40rem;
    height: 25rem;
}

.nuxt-icon.img {
    width: 50rem;
    height: 35rem;
}

.nuxt-icon.me {
    width: 17.5rem;
    height: 12.5rem;
    visibility: hidden;
}

.nuxt-icon.end {
    width: 6rem;
    height: 6rem;
}

@media (min-width: 1400px) {
    .nuxt-icon.me {
        width: 35rem;
        height: 25rem;
        visibility: visible;
    }
}

@media (min-width: 1024px) {
    .nuxt-icon,
    .nuxt-icon.developer {
        width: 100rem;
        height: 50rem;
    }

    .nuxt-icon.img {
        width: 100rem;
        height: 70rem;
    }

    .nuxt-icon.end {
        width: 12rem;
        height: 12rem;
    }

    @keyframes run-one {
        0% {
            transform: translateX(24.35%);
        }

        100% {
            transform: translateX(-20%);
        }
    }

    .running-animation-first {
        animation: run-one 4s linear infinite;
    }

    @keyframes run-two {
        0% {
            transform: translateX(-24.35%);
        }

        100% {
            transform: translateX(20%);
        }
    }

    .running-animation-second {
        animation: run-two 4s linear infinite;
    }
}

.title-animation {
    transform: translateX(-220px);
    opacity: 0;
    transition: 2s all ease;
}

.title-animation.active {
    transform: translateX(0);
    opacity: 1;
}

.img-animation {
    transform: translateX(220px);
    opacity: 0;
    transition: 2s all ease;
}

.img-animation.active {
    transform: translateX(0);
    opacity: 1;
}

.lines-animation {
    opacity: 0;
    transition: opacity 2s ease;
}

.lines-animation.active {
    opacity: 1;
}

.buttons-animation {
    transform: scale(0.3);
    opacity: 0;
    transition: 2s all ease;
}

.buttons-animation.active {
    transform: scale(1);
    opacity: 1;
}

.slider-animation {
    transform: translateX(100%);
    opacity: 0;
    transition: 2s all ease;
}

.slider-animation.active {
    transform: translateX(0%);
    opacity: 1;
}

@keyframes fade-bg {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.svg-animation-bg {
    animation: fade-bg 1s ease;
}

@keyframes fade-text {
    0% {
        opacity: 0;
        transform: translateX(-200px);
    }

    30% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.svg-animation-text {
    animation: fade-text 2s ease;
}

@media (max-width: 1024px) {
    @keyframes run-one {
        0% {
            transform: translateX(62.5%);
        }

        100% {
            transform: translateX(-20%);
        }
    }

    .running-animation-first {
        animation: run-one 4s linear infinite;
    }

    @keyframes run-two {
        0% {
            transform: translateX(-62.5%);
        }

        100% {
            transform: translateX(20%);
        }
    }

    .running-animation-second {
        animation: run-two 4s linear infinite;
    }
}
</style>
