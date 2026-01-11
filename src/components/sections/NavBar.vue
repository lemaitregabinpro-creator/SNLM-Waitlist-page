<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
        <img :src="logoSrc" alt="SmartUnityIA - Logo ingénieur IA spécialisé solutions Local First et agents IA autonomes" class="h-10 w-auto object-contain" />
        <span class="flex flex-col leading-none ml-2">
          <span class="font-bold text-xl tracking-tighter text-white">
            SmartUnity<span class="text-cyan-500">IA</span>
          </span>
        </span>
      </div>
      <div class="hidden lg:flex flex-1 mx-8 overflow-hidden relative max-w-xl h-8 items-center mask-linear">
        <div class="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div class="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        
        <div class="flex animate-infinite-scroll hover:pause whitespace-nowrap">
          <div class="flex items-center gap-6 mx-4">
            <span v-for="(word, index) in techWords" :key="index" class="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">
              <span class="w-1 h-1 rounded-full bg-cyan-500/40"></span>
              {{ word }}
            </span>
          </div>
          <div class="flex items-center gap-6 mx-4">
            <span v-for="(word, index) in techWords" :key="'copy-' + index" class="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">
              <span class="w-1 h-1 rounded-full bg-cyan-500/40"></span>
              {{ word }}
            </span>
          </div>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <button
          @click="scrollToSection('expertise')"
          class="hover:text-cyan-400 transition-colors"
        >
          Expertise
        </button>
        <button
          @click="scrollToSection('roi')"
          class="hover:text-cyan-400 transition-colors"
        >
          Rentabilité
        </button>
        <button
          @click="scrollToSection('pricing')"
          class="hover:text-cyan-400 transition-colors"
        >
          Offres
        </button>
        <CallButton @click="openCal" class="px-4 py-2 text-sm font-bold flex items-center gap-2">
          <Calendar class="w-4 h-4" />
          Réserver un appel
        </CallButton>
      </div>
      <button
        class="md:hidden text-white"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <X v-if="mobileMenuOpen" />
        <Menu v-else />
      </button>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl"
    >
      <button
        @click="scrollToSection('expertise')"
        class="text-left py-2 hover:text-cyan-400"
      >
        Expertise
      </button>
      <button
        @click="scrollToSection('pricing')"
        class="text-left py-2 hover:text-cyan-400"
      >
        Offres
      </button>
      <CallButton @click="openCal" class="w-full justify-center flex items-center gap-2">
        <Calendar class="w-4 h-4" />
        Réserver un appel
      </CallButton>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, Calendar } from 'lucide-vue-next'
import { useScroll } from '@/composables/useScroll'
import CallButton from '@/components/ui/CallButton.vue'

const { isScrolled } = useScroll()
const mobileMenuOpen = ref(false)

// Référence à l'image dans /public - les fichiers dans /public sont servis à la racine
const logoSrc = '/logo.png'

const techWords = [
  'LOCAL-FIRST', 'SÉCURISÉ', 'SCALABLE', 'PERSONNALISABLE', 
  'ECO-RESPONSABLE', 'RGPD', 'SOUVERAINETÉ', 'NO-LOG', 
  'CHIFFREMENT MILITAIRE', 'OFFLINE-READY'
]

const scrollToSection = (id) => {
  mobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openCal = () => {
  window.open('https://app.cal.eu/smartunityia/30min', '_blank')
}

defineExpose({
  scrollToSection,
  openCal,
})
</script>

<style scoped>
.mask-linear {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.hover\:pause:hover {
  animation-play-state: paused;
}
</style>
