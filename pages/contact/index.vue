<template>
    <div
        v-if="!loading"
        class="lg:px-20 px-10 pt-10"
        :class="{ loading: loading }"
        style="overflow: hidden"
    >
        <section>
            <ContactLinks />
        </section>
        <section>
            <div class="-rotate-3">
                <RunningLine class="running-animation-first" />
            </div>
            <div class="rotate-3">
                <RunningLine class="running-animation-second" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const loading = ref(true)

setTimeout(() => {
    loading.value = false
}, 500)
</script>

<style lang="scss">
@keyframes links {
    from {
        opacity: 0;
        transform: translateX(-200px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.links-animation,
.mobile-animation {
    animation: links 2s ease;
}

@keyframes contact {
    from {
        opacity: 0;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.contact-animation {
    animation: contact 2s ease;
}
</style>
