<template>
  <span class="font-mono text-cyan-400">
    {{ displayedText }}
    <span :class="['transition-opacity', blink ? 'opacity-100' : 'opacity-0']">|</span>
  </span>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: {
    type: Array,
    required: true,
  },
})

const index = ref(0)
const subIndex = ref(0)
const reverse = ref(false)
const blink = ref(true)
const displayedText = ref('')

let blinkTimeout = null
let typeTimeout = null

const updateText = () => {
  if (props.words.length === 0) return

  if (index.value === props.words.length) {
    index.value = 0
  }

  const currentWord = props.words[index.value]

  if (subIndex.value === currentWord.length + 1 && !reverse.value) {
    setTimeout(() => {
      reverse.value = true
    }, 2000)
    return
  }

  if (subIndex.value === 0 && reverse.value) {
    reverse.value = false
    index.value = (index.value + 1) % props.words.length
    return
  }

  displayedText.value = currentWord.substring(0, subIndex.value)

  typeTimeout = setTimeout(() => {
    subIndex.value = subIndex.value + (reverse.value ? -1 : 1)
  }, reverse.value ? 50 : 100)
}

const handleBlink = () => {
  blink.value = !blink.value
  blinkTimeout = setTimeout(handleBlink, 500)
}

watch([subIndex, index, reverse], () => {
  updateText()
})

onMounted(() => {
  updateText()
  handleBlink()
})

onUnmounted(() => {
  if (blinkTimeout) clearTimeout(blinkTimeout)
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>
