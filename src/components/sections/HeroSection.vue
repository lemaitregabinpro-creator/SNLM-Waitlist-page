<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 py-12 md:py-24">
    
    <div class="absolute inset-0 z-0 opacity-40">
      <TerminalBackground />
    </div>

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      
      <div class="mb-8 inline-flex justify-center animate-fade-in-down">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-500/20 backdrop-blur-md shadow-2xl shadow-yellow-500/5">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          <span class="text-xs font-mono font-medium text-yellow-100/80 tracking-wider uppercase">
            Compatible Google NotebookLM
          </span>
        </div>
      </div>

      <h1 class="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight break-words">
        Donnez à vos idées l'écrin <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 animate-shimmer">
          qu'elles méritent.
        </span>
      </h1>

      <div class="text-xl md:text-2xl text-slate-400 font-light mb-8 h-8">
        SmartBookLM apporte
        <span class="text-white font-semibold">
            <TypewriterEffect 
              :words="['la Clarté Absolue.', 'la Pureté Visuelle.', 'le Design Studio.']"
              :typing-speed="50"
              :deleting-speed="30"
              :pause-for="2000"
            />
        </span>
      </div>

      <p class="text-base md:text-lg text-slate-400 w-full max-w-2xl mx-auto mb-12 leading-relaxed break-words px-6 md:px-0">
        NotebookLM est votre cerveau, <strong class="text-white">SmartBookLM</strong> est votre designer. 
        Importez vos notes et diapositives brutes. Notre moteur "Magic Clean" élimine le bruit visuel pour ne garder que l'essentiel.
        <br/><span class="text-yellow-500/80 italic text-sm mt-2 block">100% Local First. Vos données ne quittent jamais votre machine.</span>
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-10">
        <button 
          @click="scrollToWaitlist"
          class="relative inline-flex group w-full max-w-xs md:w-auto"
        >
          <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          
          <div class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl border border-slate-800 hover:bg-slate-800 w-full">
            <span class="mr-3">Remplire le formulaire d'avis</span>
            <ArrowRight class="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:translate-x-1" />
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

const scrollToWaitlist = () => {
  document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  to { background-position: 200% center; }
}
/* Réutilisation de tes animations existantes */
.animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
