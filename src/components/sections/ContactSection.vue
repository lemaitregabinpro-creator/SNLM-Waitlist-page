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
          <CallButton @click="openCal" class="text-lg px-8 py-4">
            <div class="flex items-center gap-3">
              <Calendar class="w-5 h-5" />
              <span>Réserver mon audit gratuit (30 min)</span>
            </div>
          </CallButton>
          <Button @click="openContactModal" class="text-lg px-8 py-4" :icon="Mail">
            M'envoyer un message
          </Button>
        </div>
        <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600">
          
          <div class="flex items-center gap-6">
            
            <a href="https://www.linkedin.com/in/gabin-lemaitre-7b39a5354/" target="_blank" class="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
              <Linkedin class="w-6 h-6" />
            </a>

            <a href="https://www.instagram.com/smartunityia/" target="_blank" class="hover:text-fuchsia-500 transition-colors transform hover:scale-110 duration-300">
              <Instagram class="w-6 h-6" />
            </a>
          </div>

          <div class="hidden md:block w-px h-6 bg-slate-800"></div>

          <span class="text-sm font-medium tracking-wide">Basé en France 🇫🇷</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import { Calendar, Mail, Linkedin, Instagram } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import CallButton from '@/components/ui/CallButton.vue'

const openCal = () => {
  window.open('https://app.cal.eu/smartunityia/30min', '_blank')
}

const openContactModal = inject('openContactModal')
</script>
