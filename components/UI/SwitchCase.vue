<template>
    <div>
        <label
            :class="{ 'switch-checked': value }"
            class="switch relative inline-block lg:w-28 w-20 lg:h-14 border-2 border-solid border-white cursor-pointer rounded-full"
        >
            <slot />
            <input v-model="value" class="opacity-0 w-0 h-0" type="checkbox" />
            <span
                class="slider top-px left-px absolute lg:h-12 lg:w-12 h-8 w-8 rounded-full bg-white border-2 border-black transition-all duration-500"
            />
        </label>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:model-value'])

const props = defineProps<{ modelValue: boolean }>()

const value = computed({
    get() {
        return props.modelValue
    },
    set(value: boolean) {
        emit('update:model-value', value)
    },
})
</script>

<style scoped lang="scss">
input:checked + .slider {
    background-color: black;
    transform: translateX(3.2rem);
}

@media (max-width: 1024px) {
    input:checked + .slider {
        transform: translateX(2.4rem);
    }

    .switch {
        height: 2.6rem;
    }
}

.switch-checked {
    border-color: black;
}
</style>
