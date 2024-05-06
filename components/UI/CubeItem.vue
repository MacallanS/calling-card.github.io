<template>
    <div class="cube">
        <div class="cube__face cube__front">HTML/CSS</div>
        <div class="cube__face cube__right">VUE/NUXT</div>
        <div class="cube__face cube__top">SCSS/SASS</div>
        <div class="cube__face cube__back">TAILWIND/GIT</div>
        <div class="cube__face cube__left">JS/TS</div>
        <div class="cube__face cube__bottom">FIGMA/TILDA</div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cube {
    width: 300px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    animation: cube-spinner 12s ease infinite;

    &__face {
        position: absolute;
        width: 300px;
        height: 300px;
        line-height: 300px;
        text-align: center;
        font-size: 3rem;
        backdrop-filter: blur(0.5rem);
        color: rgb(252 165 165);
    }

    &__front {
        transform: translateZ(175px);
    }

    &__top {
        transform: rotateY(90deg) translateZ(175px);
    }

    &__right {
        transform: rotateX(90deg) translateZ(175px);
    }

    &__back {
        transform: rotateY(180deg) translateZ(175px);
    }

    &__bottom {
        transform: rotateY(-90deg) translateZ(175px);
    }

    &__left {
        transform: rotateX(-90deg) translateZ(175px);
    }
}

@keyframes cube-spinner {
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    50% {
        transform: rotateX(90deg) rotateY(180deg) rotateZ(180deg);
    }

    100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
}

.light {
    .cube__face {
        border: 2px solid black;
    }
}

.dark {
    .cube__face {
        border: 2px solid white;
    }
}

@media (max-width: 1280px) {
    .cube {
        width: 150px;
        height: 150px;
        position: relative;
        transform-style: preserve-3d;
        animation: cube-spinner 12s ease infinite;
        margin-top: 10rem;

        &__face {
            position: absolute;
            width: 150px;
            height: 150px;
            line-height: 150px;
            text-align: center;
            font-size: 2rem;
            backdrop-filter: blur(0.5rem);
            color: rgb(252 165 165);
        }

        &__front {
            transform: translateZ(90px);
        }

        &__top {
            transform: rotateY(90deg) translateZ(90px);
        }

        &__right {
            transform: rotateX(90deg) translateZ(90px);
        }

        &__back {
            transform: rotateY(180deg) translateZ(90px);
        }

        &__bottom {
            transform: rotateY(-90deg) translateZ(90px);
        }

        &__left {
            transform: rotateX(-90deg) translateZ(90px);
        }
    }
}
</style>
