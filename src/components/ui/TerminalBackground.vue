<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30 select-none font-mono text-sm md:text-base text-yellow-400/80">
    <div class="p-4 md:p-10 space-y-2">
      <div v-for="(line, idx) in lines" :key="idx" class="typing-line">
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const lines = ref([])

const commands = [
  '> initializing_secure_env...',
  '> loading_mistral_7b_quantized...',
  '> verifying_local_integrity... [OK]',
  '> mounting_private_volume...',
  '> establishing_gpu_link...',
  '> blocking_external_requests... [OK]',
  '> deploying_rag_pipeline...',
  '> user_auth_confirmed...',
  '> system_ready.',
]

let interval = null
let i = 0

onMounted(() => {
  interval = setInterval(() => {
    lines.value = [...lines.value, commands[i % commands.length]]
    if (lines.value.length > 12) {
      lines.value.shift()
    }
    i++
  }, 800)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>
