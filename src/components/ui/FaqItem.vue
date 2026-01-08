<template>
  <div class="border-b border-slate-800 last:border-0">
    <button
      class="w-full py-5 flex justify-between items-center text-left hover:text-cyan-400 transition-colors group"
      @click="isOpen = !isOpen"
    >
      <span class="font-medium text-lg text-slate-200 group-hover:pl-2 transition-all">
        {{ question }}
      </span>
      <ChevronUp v-if="isOpen" class="text-cyan-500" />
      <ChevronDown v-else class="text-slate-500" />
    </button>
    <div
      :class="[
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      ]"
    >
      <p class="text-slate-400 leading-relaxed text-sm md:text-base">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
</script>
