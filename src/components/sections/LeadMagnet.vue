<template>
  <section class="py-16 px-6">
    <FadeInSection>
      <div class="max-w-5xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]"></div>
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 text-cyan-400 font-bold mb-4 uppercase text-sm tracking-wider">
            <FileText class="w-4 h-4" /> Ressource Gratuite
          </div>
          <h3 class="text-3xl font-bold text-white mb-4">Votre entreprise est-elle prête pour l'IA ?</h3>
          <p class="text-slate-300 mb-6">
            Téléchargez ma <strong>Checklist de Sécurité IA & Audit Flash</strong>. 15 points de contrôle pour savoir si vous pouvez automatiser sans risque.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              v-model="email"
              placeholder="Votre email pro"
              class="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 flex-grow"
            />
            <Button primary :icon="Download" class="whitespace-nowrap" @click="handleSubmit">
              Recevoir la checklist
            </Button>
          </div>
          <p class="text-xs text-slate-500 mt-3">Pas de spam. Juste de la valeur.</p>
        </div>
        <div class="w-full md:w-1/3 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-500 group">
          <div class="flex items-center gap-3 mb-4 border-b border-slate-800 pb-2">
            <CheckCircle class="text-green-500 w-5 h-5" />
            <span class="font-bold text-white">Audit Result_Final.pdf</span>
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FileText, Download, CheckCircle } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import Button from '@/components/ui/Button.vue'

const email = ref('')

const handleSubmit = () => {
  // TODO: Implémenter la logique de soumission
  console.log('Email soumis:', email.value)
}
</script>
