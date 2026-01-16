<template>
  <div 
    v-if="currentProgressPercentage > 0"
    class="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 shadow-lg"
  >
    <div class="max-w-7xl mx-auto px-4 py-3">
      <!-- Barre de progression -->
      <div class="relative h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
        <div 
          class="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
          :class="isComplete ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-yellow-500 to-amber-500'"
          :style="{ width: `${currentProgressPercentage}%` }"
        >
          <div 
            v-if="isComplete"
            class="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 animate-shimmer"
          ></div>
        </div>
      </div>

      <!-- Texte et compteur -->
      <div class="flex items-center justify-between text-xs">
        <p 
          class="text-slate-400 font-medium transition-colors duration-300"
          :class="isComplete ? 'text-green-400' : ''"
        >
          <span v-if="!isComplete">
            Aidez-nous à concevoir l'outil parfait : <strong class="text-yellow-400">{{ currentTotalResponses }}/{{ TOTAL_STEPS }}</strong> avis donnés
          </span>
          <span v-else class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400">
              ✓
            </span>
            <strong class="text-green-400">Parfait ! Merci pour votre contribution !</strong>
          </span>
        </p>
        
        <!-- Pourcentage -->
        <span 
          class="text-slate-500 font-mono transition-colors duration-300"
          :class="isComplete ? 'text-green-400' : ''"
        >
          {{ currentProgressPercentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { totalResponses, progressPercentage, TOTAL_STEPS } from '@/composables/useUserPreferences'

// Créer des computed locaux pour garantir la réactivité dans le template
const currentTotalResponses = computed(() => totalResponses.value)
const currentProgressPercentage = computed(() => progressPercentage.value)
const isComplete = computed(() => currentProgressPercentage.value >= 100)
</script>

<style scoped>
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 2s linear infinite;
}
</style>
