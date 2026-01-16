<template>
  <section id="faq" class="py-12 md:py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center break-words">Questions Fréquentes</h2>
    <p class="text-slate-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto break-words">
      Tout ce que vous devez savoir sur SmartBookLM : fonctionnement, confidentialité, compatibilité et workflow avec NotebookLM.
    </p>
    <div class="space-y-2">
      <div
        v-for="faq in featuredFaqs"
        :key="faq.id"
        class="border border-slate-800 rounded-xl hover:border-yellow-500/50 transition-colors"
      >
        <router-link
          :to="`/faq/${faq.slug}`"
          class="block p-6 group"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {{ faq.question }}
              </h3>
              <p class="text-slate-400 text-sm line-clamp-2">
                {{ faq.shortAnswer }}
              </p>
            </div>
            <ArrowRight class="w-5 h-5 text-slate-600 group-hover:text-yellow-400 transition-colors shrink-0 mt-1" />
          </div>
        </router-link>
      </div>
    </div>
    
    <div class="mt-8 md:mt-12 text-center">
      <p class="text-slate-400 mb-4 md:mb-6 break-words">Une question non résolue ?</p>
      <button 
        @click="openFeedbackModal"
        class="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-950 rounded-lg font-bold transition-colors inline-flex items-center gap-3"
      >
        <span>Remplir le formulaire d'avis</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { faqData } from '@/data/faqData'
import { ArrowRight } from 'lucide-vue-next'

const featuredFaqs = computed(() => {
  return faqData.filter(faq => faq.featured === true)
})

// Récupérer la fonction pour ouvrir le modal de formulaire depuis le parent
const openFeedbackModal = inject('openFeedbackModal', () => {
  console.warn('openFeedbackModal not provided')
})
</script>
