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
        L'Intelligence Artificielle <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-text-gradient font-extrabold">
          Sans Compromis.
        </span>
      </h1>

      <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Studio d'ingénierie spécialisé en architectures 
        <span class="text-white font-medium">Local First</span>. 
        <br class="hidden md:block" />
        Nous déployons vos IA sur vos machines. Vos données ne sortent plus.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        
        <button 
          @click="scrollToPricing"
          class="group relative px-8 py-4 bg-white text-slate-950 font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span class="relative flex items-center gap-2">
            Configurer mon Infra
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <button 
          @click="scrollToDemo"
          class="px-8 py-4 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-900/50 transition-all backdrop-blur-sm"
        >
          Voir la démo
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

const scrollToDemo = () => {
  document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
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