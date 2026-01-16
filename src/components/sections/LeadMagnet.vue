<template>
  <section id="lead-magnet" class="py-16 px-6">
    <FadeInSection>
      <div class="max-w-5xl mx-auto bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px]"></div>
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 text-yellow-400 font-bold mb-4 uppercase text-sm tracking-wider">
            <Rocket class="w-4 h-4" /> Partagez votre avis
          </div>
          <h3 class="text-3xl font-bold text-white mb-4">Votre opinion compte pour nous</h3>
          <p class="text-slate-300 mb-6">
            Vous avez partagé vos préférences sur nos tarifs et fonctionnalités. 
            Complétez le formulaire d'avis pour nous aider à améliorer SmartBookLM selon vos besoins.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <Button primary :icon="ArrowRight" class="whitespace-nowrap" @click="openFeedbackModal">
              Remplir le formulaire d'avis
            </Button>
          </div>
          <p class="text-xs text-slate-500 mt-3">Vos données sont sécurisées et utilisées uniquement pour améliorer notre produit.</p>
        </div>
        <div class="w-full md:w-1/3 p-6 rounded-xl border border-slate-800 shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-500 group">
          <div class="flex items-center gap-3 mb-4 border-b border-slate-800 pb-2">
            <CheckCircle class="text-yellow-500 w-5 h-5" />
            <span class="font-bold text-white">Formulaire d'avis</span>
          </div>
          <div class="space-y-3 opacity-50 group-hover:opacity-100 transition-opacity">
            <div class="h-2 bg-slate-700 rounded w-3/4"></div>
            <div class="h-2 bg-slate-700 rounded w-full"></div>
            <div class="h-2 bg-slate-700 rounded w-5/6"></div>
            <div class="h-2 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </FadeInSection>

    <!-- Modal de formulaire d'avis -->
    <FeedbackModal :is-open="isFeedbackModalOpen" @close="closeFeedbackModal" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Rocket, ArrowRight, CheckCircle } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import Button from '@/components/ui/Button.vue'
import FeedbackModal from '@/components/ui/FeedbackModal.vue'

const isFeedbackModalOpen = ref(false)

const openFeedbackModal = () => {
  isFeedbackModalOpen.value = true
}

const closeFeedbackModal = () => {
  isFeedbackModalOpen.value = false
}
</script>
