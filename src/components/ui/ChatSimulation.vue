<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-sm shadow-2xl max-w-md mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-cyan-500/10 hover:border-cyan-500/30">
    <div class="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <span class="text-slate-500 text-xs ml-2">secure-chat-v2.0 (Localhost)</span>
    </div>
    <div class="space-y-3 h-48 overflow-hidden">
      <div
        v-for="(msg, i) in messages"
        :key="i"
        :class="[
          'flex animate-fade-in',
          msg.role === 'user' ? 'justify-end' : 'justify-start'
        ]"
      >
        <div
          :class="[
            'p-2 rounded-lg max-w-[85%]',
            msg.role === 'user'
              ? 'bg-slate-800 text-slate-200'
              : msg.role === 'system'
              ? 'text-yellow-500 text-xs italic'
              : 'bg-cyan-900/20 text-cyan-200 border border-cyan-900/50'
          ]"
        >
          {{ msg.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const messages = ref([
  { role: 'user', text: 'Analyse ce bilan financier confidentiel.' },
])

let timeouts = []

const sequence = [
  { delay: 1000, role: 'system', text: '🔒 Analyse Local First en cours...' },
  {
    delay: 2500,
    role: 'ai',
    text: "Analyse terminée. Aucune donnée n'a quitté votre serveur. Le bilan montre une hausse de 15% de l'EBITDA.",
  },
]

onMounted(() => {
  sequence.forEach(({ delay, role, text }) => {
    const timeout = setTimeout(() => {
      messages.value = [...messages.value, { role, text }]
    }, delay)
    timeouts.push(timeout)
  })
})

onUnmounted(() => {
  timeouts.forEach((timeout) => clearTimeout(timeout))
})
</script>
