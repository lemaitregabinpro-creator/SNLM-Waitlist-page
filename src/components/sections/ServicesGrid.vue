<template>
  <section id="services" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">Solutions IA Souveraines & Agents IA Autonomes</h2>
        <p class="text-slate-400">Ingénieur IA et développeur IA spécialisé en Local First pour finance, santé, juridique.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeInSection delay="0ms">
          <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-gold-500/50 transition-all duration-300 group h-full">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              <Server class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">RAG & IA Locale Sécurisée</h3>
            <p class="text-slate-400 mb-4 text-sm">
              <strong class="text-white">IA sécurisée</strong> : chattez avec vos documents sensibles (PDF, Excel, Notion) en local. <strong class="text-white">Protection des données</strong> garantie, zéro data dans le cloud. Idéal pour <strong class="text-white">IA pour la finance</strong> et <strong class="text-white">IA pour la santé</strong>.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="100ms">
          <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-gold-500/50 transition-all duration-300 group h-full">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
              <MessageSquare class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Agents IA Autonomes avec API Françaises</h3>
            <p class="text-slate-400 mb-4 text-sm">
              Déploiement d'<strong class="text-white">agents IA autonomes</strong> avec <strong class="text-white">API françaises</strong> (Mistral) dans un environnement isolé <strong class="text-white">Local First</strong> pour vos équipes. <strong class="text-white">Conformité juridique</strong> assurée.
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
