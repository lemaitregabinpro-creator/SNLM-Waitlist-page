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
        <Cpu class="text-cyan-500 w-6 h-6" />
        <span>SmartUnity<span class="text-cyan-500">IA</span></span>
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
        <Button primary @click="openCalendly" class="px-4 py-2 text-sm font-bold" :icon="Calendar">
          Réserver un appel
        </Button>
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
      <Button primary @click="openCalendly" class="w-full justify-center" :icon="Calendar">
        Réserver un appel
      </Button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Cpu, Menu, X, Calendar } from 'lucide-vue-next'
import { useScroll } from '@/composables/useScroll'
import Button from '@/components/ui/Button.vue'

const { isScrolled } = useScroll()
const mobileMenuOpen = ref(false)

const scrollToSection = (id) => {
  mobileMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openCalendly = () => {
  window.open('https://calendly.com/', '_blank')
}

defineExpose({
  scrollToSection,
  openCalendly,
})
</script>
