<template>
  <section id="services" class="py-12 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 break-words">Workflow Intelligent</h2>
        <p class="text-slate-400 break-words">De l'import brut à l'export professionnel, en quelques clics.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeInSection v-for="(service, index) in services" :key="index" :delay="`${index * 100}ms`">
          <div class="border border-slate-800 p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-300 group h-full flex flex-col">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/10 transition-colors">
              <component :is="service.icon" class="text-yellow-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
            <p class="text-slate-400 mb-4 text-sm flex-grow">
              <span v-html="service.description"></span>
            </p>
            
            <PreferenceFeedback category="features" :item-id="service.title" />
            
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Upload, Sparkles, WifiOff, FileText, Layout, Rocket } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import PreferenceFeedback from '@/components/ui/PreferenceFeedback.vue'

const services = [
  {
    icon: Upload,
    title: "Import Universel",
    description: "Glissez vos fichiers bruts ou exports <strong class='text-white'>NotebookLM</strong>. SmartBookLM reconnaît automatiquement les formats."
  },
  {
    icon: Sparkles,
    title: "Nettoyage Visuel",
    description: "L'IA supprime les artifacts. Notre moteur <strong class='text-white'>'Magic Clean'</strong> transforme le bruit visuel en clarté absolue."
  },
  {
    icon: WifiOff,
    title: "Mode Déconnecté",
    description: "Travaillez dans le train ou l'avion. Aucune connexion requise, <strong class='text-white'>confidentialité garantie</strong>."
  },
  {
    icon: FileText,
    title: "Export Haute Fidélité",
    description: "Exportez en <strong class='text-white'>PNG, JPEG ou WebP</strong>. Qualité optimale pour le web et les réseaux."
  },
  {
    icon: Layout,
    title: "Smart Layouts",
    description: "Chaque slide devient une image indépendante. Téléchargez le diaporama complet ou une sélection."
  },
  {
    icon: Rocket,
    title: "Mises à jour à vie",
    description: "Une roadmap active. Les <strong class='text-white'>Pionniers</strong> bénéficient de toutes les futures mises à jour v1.x."
  }
]
</script>
