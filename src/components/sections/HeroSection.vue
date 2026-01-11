<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
    
    <div class="absolute inset-0 z-0 opacity-40">
      <TerminalBackground />
    </div>

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      
      <div class="mb-8 inline-flex justify-center animate-fade-in-down">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md shadow-2xl shadow-indigo-500/10 group hover:border-indigo-500/30 transition-all duration-500">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-mono font-medium text-slate-300 tracking-wider">
            <TypewriterEffect 
              :words="['SYSTEM: ONLINE', 'INFRA: LOCAL FIRST', 'DATA: SECURED', 'AVAILABILITY: Q1 2026']"
              :typing-speed="50"
              :deleting-speed="30"
              :pause-for="2000"
            />
          </span>
        </div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
        Ingénieur IA & Développeur IA <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-text-gradient font-extrabold">
          Solutions Local First.
        </span>
      </h1>

      <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Studio d'ingénierie spécialisé en <span class="text-white font-medium">solutions IA souveraines</span> et <span class="text-white font-medium">agents IA autonomes</span> pour la finance, la santé et le juridique. 
        <br class="hidden md:block" />
        <span class="text-white font-medium">IA sécurisée Local First</span> : vos données sensibles restent sur vos serveurs, avec <span class="text-white font-medium">API françaises</span> et protection maximale.
      </p>

      <div class="flex justify-center mt-10">
        <button 
          @click="scrollToPricing"
          class="relative inline-flex group"
        >
          <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          
          <div class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-slate-800 hover:bg-slate-800">
            <span class="mr-3">Configurer mon Infra</span>
            <ArrowRight class="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </button>
      </div>

      

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import TerminalBackground from '@/components/ui/TerminalBackground.vue'
import TypewriterEffect from '@/components/ui/TypewriterEffect.vue'

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Animation légère pour le dégradé du texte */
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-shimmer {
  animation: shimmer 5s infinite linear;
}

/* Apparition douce */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>