<template>
  <div
    ref="domRef"
    :style="{ transitionDelay: delay }"
    :class="[
      'transition-all duration-700 transform',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps({
  delay: {
    type: String,
    default: '0ms',
  },
})

const { isVisible, domRef } = useScrollAnimation()
</script>
