<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500/30 overflow-x-hidden">
    <FloatingBackgroundElements />
    <div class="relative z-10">
      <NavBar />
      <HeroSection />
      <SocialProof />
      <BeforeAfterSection />
      <ServicesGrid />
      <PricingSection />
      <LeadMagnet />
      <FaqSection />
      <AboutSection />
      <Footer />
    </div>
    <ContactModal :is-open="isContactOpen" @close="isContactOpen = false" />
    <FeedbackProgressBar />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import NavBar from '@/components/sections/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import SocialProof from '@/components/sections/SocialProof.vue'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection.vue'
import ServicesGrid from '@/components/sections/ServicesGrid.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import LeadMagnet from '@/components/sections/LeadMagnet.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import Footer from '@/components/sections/Footer.vue'
import ContactModal from '@/components/ui/ContactModal.vue'
import FloatingBackgroundElements from '@/components/ui/FloatingBackgroundElements.vue'
import FeedbackProgressBar from '@/components/ui/FeedbackProgressBar.vue'

const isContactOpen = ref(false)
const openContactModal = () => {
  isContactOpen.value = true
}
provide('openContactModal', openContactModal)
</script>
