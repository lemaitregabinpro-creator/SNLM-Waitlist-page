<template>
  <span>
    {{ formattedValue }}
  </span>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: Boolean,
    default: false,
  },
})

const displayValue = ref(0)

const formattedValue = computed(() => {
  return new Intl.NumberFormat('fr-FR', {
    style: props.currency ? 'currency' : 'decimal',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(displayValue.value)
})

const animate = (start, end, duration) => {
  const startTime = performance.now()

  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease out quart
    const ease = 1 - Math.pow(1 - progress, 4)

    displayValue.value = Math.floor(start + (end - start) * ease)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

watch(
  () => props.value,
  (newValue) => {
    animate(displayValue.value, newValue, 1000)
  },
  { immediate: true }
)

onMounted(() => {
  animate(0, props.value, 1000)
})
</script>
