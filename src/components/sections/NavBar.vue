<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
          <span class="text-slate-900 font-bold text-lg">S</span>
        </div>
        SmartBook<span class="text-yellow-500">LM</span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#services" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">Fonctionnalités</a>
        <a href="#pricing" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">Tarifs</a>
        <a href="#faq" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">FAQ</a>
      </div>

      <div class="hidden md:flex items-center gap-4">
        <!-- Réseaux sociaux -->
        <div class="flex items-center gap-3">
          <a 
            href="https://www.linkedin.com/in/smartunityia-gabin-lemaitre-7b39a5354/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin class="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/smartunityia/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Instagram"
          >
            <Instagram class="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@smartunityia" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="TikTok"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
        
        <button @click="scrollToWaitlist" class="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all border border-white/10 backdrop-blur-sm">
          donne ton avis
        </button>
      </div>

      <button class="md:hidden text-white">
        <span class="sr-only">Menu</span>
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Linkedin, Instagram } from 'lucide-vue-next'

const isScrolled = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToWaitlist = () => {
  document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))
</script>
