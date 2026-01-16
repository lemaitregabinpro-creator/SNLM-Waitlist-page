<template>
  <Transition name="slide-up">
    <div 
      v-if="currentProgressPercentage > 0"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
    >
      <div class="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 p-4 md:p-5">
        <!-- Barre de progression -->
        <div class="relative h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
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
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p 
            class="text-slate-300 font-medium transition-colors duration-300 flex-1"
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
          
          <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <!-- Pourcentage -->
            <span 
              class="text-slate-400 font-mono font-semibold transition-colors duration-300"
              :class="isComplete ? 'text-green-400' : ''"
            >
              {{ currentProgressPercentage }}%
            </span>
            
            <!-- Bouton pour ouvrir le formulaire quand complet -->
            <button
              v-if="isComplete"
              @click="$emit('openFeedback')"
              class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-xs font-bold rounded-lg transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 flex items-center gap-2"
            >
              <FileText class="w-3.5 h-3.5" />
              Remplir le formulaire
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { FileText } from 'lucide-vue-next'
import { totalResponses, progressPercentage, TOTAL_STEPS } from '@/composables/useUserPreferences'

// Créer des computed locaux pour garantir la réactivité dans le template
const currentTotalResponses = computed(() => totalResponses.value)
const currentProgressPercentage = computed(() => progressPercentage.value)
const isComplete = computed(() => currentProgressPercentage.value >= 100)

// Émettre un événement pour ouvrir le formulaire
defineEmits(['openFeedback'])
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 100%);
}
</style>
