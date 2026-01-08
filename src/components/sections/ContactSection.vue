<template>
  <section id="contact" class="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
    <div class="max-w-5xl mx-auto">
      <div class="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:h-2 transition-all duration-500"></div>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">On commence quand ?</h2>
        <p class="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Votre concurrence utilise probablement déjà l'IA. <br />
          Prenez de l'avance en la maîtrisant totalement.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <Button primary @click="openCalendly" class="text-lg px-8 py-4" :icon="Calendar">
            Réserver mon audit gratuit (30 min)
          </Button>
          <Button @click="openEmail" class="text-lg px-8 py-4" :icon="Mail">
            contact@smartunityia.fr
          </Button>
        </div>
        <div class="mt-12 flex justify-center gap-6 text-slate-600">
          <Linkedin class="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
          <span class="text-sm">Basé en France 🇫🇷</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Calendar, Mail, Linkedin } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const openCalendly = () => {
  window.open('https://calendly.com/', '_blank')
}

const openEmail = () => {
  window.location.href = 'mailto:contact@smartunityia.fr'
}
</script>
