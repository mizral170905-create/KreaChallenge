<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

type Props = {
    className?: HTMLAttributes['class'];
};

defineProps<Props>();
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        :class="className"
        v-bind="$attrs"
        fill="none"
    >
        <path
            d="M20 7v26M7 20h26M10.8 10.8l18.4 18.4M29.2 10.8 10.8 29.2"
            stroke="currentColor"
            stroke-width="3.4"
            stroke-linecap="round"
        />
    </svg>
</template>
