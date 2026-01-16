<template>
    <div class="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800/50">
      <p class="text-[10px] text-slate-500 font-mono uppercase mr-auto">Votre avis ?</p>
      
      <button 
        @click="updatePreference('like')"
        :class="['p-1.5 rounded-md transition-all', currentChoice === 'like' ? 'bg-green-500/20 text-green-400' : 'text-slate-600 hover:text-green-400']"
        title="Intéressant"
      >
        <ThumbsUp class="w-4 h-4" />
      </button>
  
      <button 
        @click="updatePreference('indifferent')"
        :class="['p-1.5 rounded-md transition-all', currentChoice === 'indifferent' ? 'bg-slate-700 text-slate-300' : 'text-slate-600 hover:text-slate-300']"
        title="Indifférent"
      >
        <Minus class="w-4 h-4" />
      </button>
  
      <button 
        @click="updatePreference('dislike')"
        :class="['p-1.5 rounded-md transition-all', currentChoice === 'dislike' ? 'bg-red-500/20 text-red-400' : 'text-slate-600 hover:text-red-400']"
        title="Pas pour moi"
      >
        <ThumbsDown class="w-4 h-4" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { ThumbsUp, ThumbsDown, Minus } from 'lucide-vue-next'
  import { userPreferences, setPreference } from '@/composables/useUserPreferences'
  
  const props = defineProps({
    category: { type: String, required: true }, // 'pricing' ou 'features'
    itemId: { type: String, required: true }    // Le nom de l'élément (ex: "Professionnel")
  })
  
  // Récupère la valeur actuelle depuis le store global
  const currentChoice = computed(() => userPreferences[props.category]?.[props.itemId])
  
  const updatePreference = (value) => {
    // Si on clique sur la même valeur, on la décoche (null), sinon on la met
    const newValue = currentChoice.value === value ? null : value
    setPreference(props.category, props.itemId, newValue)
  }
  </script>