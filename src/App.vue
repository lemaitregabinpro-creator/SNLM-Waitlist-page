<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
    <div class="relative z-10">
      <NavBar />
      <HeroSection />
      <SocialProof />
      <ExpertiseSection />
      <section id="roi" class="py-20 px-6">
        <FadeInSection>
          <RoiCalculator />
        </FadeInSection>
      </section>
      <PricingSection />
      <FaqSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import NavBar from '@/components/sections/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import SocialProof from '@/components/sections/SocialProof.vue'
import ExpertiseSection from '@/components/sections/ExpertiseSection.vue'
import RoiCalculator from '@/components/sections/RoiCalculator.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/sections/Footer.vue'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import ContactModal from '@/components/ui/ContactModal.vue'

const isContactOpen = ref(false)
const openContactModal = () => {
  isContactOpen.value = true
}
provide('openContactModal', openContactModal)
</script>
