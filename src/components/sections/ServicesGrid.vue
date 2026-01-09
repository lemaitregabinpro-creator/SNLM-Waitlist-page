<template>
  <section id="services" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">Studio d'Ingénierie & Développement</h2>
        <p class="text-slate-400">Des solutions concrètes pour des problèmes réels.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeInSection delay="0ms">
          <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-gold-500/50 transition-all duration-300 group h-full">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              <Server class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">RAG & IA Locale</h3>
            <p class="text-slate-400 mb-4 text-sm">
              Chattez avec vos documents (PDF, Excel, Notion) en local. Zéro data dans le cloud.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="100ms">
          <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-gold-500/50 transition-all duration-300 group h-full">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              <MessageSquare class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Mistral Entreprise</h3>
            <p class="text-slate-400 mb-4 text-sm">
              Déploiement de "Le Chat" Mistral dans un environnement isolé pour vos équipes.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="200ms">
          <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-gold-500/50 transition-all duration-300 group h-full">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              <Terminal class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">SaaS & Apps Custom</h3>
            <p class="text-slate-400 mb-4 text-sm">
              Développement complet d'interfaces web modernes et réactives (Vue.js, Tailwind CSS, Python).
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Server, MessageSquare, Terminal } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
</script>
