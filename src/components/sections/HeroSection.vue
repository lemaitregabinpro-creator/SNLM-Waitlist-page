<template>
  <section class="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
    <div class="absolute top-24 md:top-32 left-0 w-full flex justify-center pointer-events-none z-20">
      <div class="bg-red-500/10 border border-red-500/50 px-4 py-1 rounded-full flex items-center gap-2 animate-pulse backdrop-blur-sm">
        <AlertTriangle class="w-4 h-4 text-red-400" />
        <span class="text-red-300 text-xs font-bold uppercase tracking-wide"
          >2 places disponibles pour Février</span
        >
      </div>
    </div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px]"></div>
    </div>
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div class="text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold tracking-wide mb-6 mt-8 md:mt-0">
          <ShieldCheck class="w-4 h-4 text-green-400 animate-pulse" />
          CONFIDENTIALITÉ 100% LOCALE
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
          Votre Intelligence Artificielle sera <br />
          <TypewriterEffect :words="['Sécurisée.', 'Souveraine.', 'Locale.', 'Rentable.']" />
        </h1>
        <p class="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
          Ne confiez pas vos secrets industriels au Cloud. <br />
          Je conçois des solutions d'IA qui tournent <strong>sur vos serveurs</strong>, avec des
          technologies françaises.
        </p>
        <div class="flex flex-col sm:flex-row items-start gap-4">
          <Button primary @click="openCalendly" :icon="Calendar">
            Réserver un appel découverte
          </Button>
          <Button @click="scrollToSection('services')" :icon="ArrowRight">
            Voir mes solutions
          </Button>
        </div>
      </div>
      <div class="relative hidden lg:block flex justify-center items-center" style="perspective: 1000px;">
        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 animate-pulse"></div>
        <div class="relative w-full flex justify-center">
          <InteractiveShowcase />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AlertTriangle, Calendar, ArrowRight, ShieldCheck } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import TypewriterEffect from '@/components/ui/TypewriterEffect.vue'
import InteractiveShowcase from '@/components/ui/InteractiveShowcase.vue'

const openCalendly = () => {
  window.open('https://calendly.com/', '_blank')
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

