<template>
  <section id="expertise" class="py-24 px-6 bg-slate-900/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white">Agents IA Sécurisés & Solutions Local First</h2>
        <p class="text-slate-400 mt-2">IA sécurisée pour finance, santé et juridique. Protection des données sensibles garantie.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <FadeInSection delay="0ms">
          <div class="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors h-full">
            <Lock class="text-cyan-400 w-10 h-10 mb-6" />
            <h3 class="text-xl font-bold text-white mb-3">IA Sécurisée & Protection Données Sensibles</h3>
            <p class="text-slate-400 leading-relaxed">
              Zéro fuite vers les USA. Soit tout reste sur votre Mac (Mistral), soit nous utilisons des <strong class="text-white">API françaises</strong> souveraines (Euria) qui garantissent contractuellement la <strong class="text-white">confidentialité</strong> et la <strong class="text-white">protection des données sensibles</strong> pour la finance, la santé et le juridique.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="200ms">
          <div class="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors h-full">
            <Database class="text-purple-400 w-10 h-10 mb-6" />
            <h3 class="text-xl font-bold text-white mb-3">Propriété Intellectuelle</h3>
            <p class="text-slate-400 leading-relaxed">
              Vous possédez le code, les modèles (fine-tunés) et la data. Vous ne payez pas un abonnement à vie pour accéder à votre propre intelligence.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="400ms">
          <div class="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors h-full">
            <Zap class="text-yellow-400 w-10 h-10 mb-6" />
            <h3 class="text-xl font-bold text-white mb-3">Performance & Éco-responsabilité</h3>
            <p class="text-slate-400 leading-relaxed">
              Réduisez votre empreinte carbone. Nos solutions locales et l'IA Euria sont conçues pour être frugales en énergie tout en restant ultra-performantes. Le 'Green IT' par défaut.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Lock, Database, Zap } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
</script>
