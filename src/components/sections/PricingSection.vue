<template>
  <section id="pricing" class="py-20 bg-slate-900/30 border-y border-slate-800/50 relative">
    <TerminalBackground />
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">Investissement & Offres</h2>
        <p class="text-slate-400">La sécurité a un prix. L'insécurité en a un plus grand.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        <PricingCard
          title="Architecture & Roadmap IA"
          subtitle="Fondation Stratégique"
          price="650€"
          delay="0ms"
          :features="[
            'Analyse des risques & Sécurité données',
            'Choix infrastructure locale (GPU/CPU)',
            'Roadmap technique détaillée',
            'Livrable : Dossier PDF complet'
          ]"
          button-text="Commander mon plan"
          :cta="openCalendly"
        />
        <PricingCard
          title="MVP / Prototype"
          subtitle="Socle Technique"
          price="3 500€"
          :recommended="true"
          delay="200ms"
          disclaimer="*Prix de départ indicatif pour un socle technique standard. Le budget final s'ajuste selon la complexité des intégrations."
          :features="[
            'Développement React/Python sur mesure',
            'Cession totale du Code Source (IP)',
            'Installation sur votre environnement',
            'Intégration Mistral / Llama 3',
            'Documentation technique complète'
          ]"
          button-text="Démarrer le projet"
          :cta="openCalendly"
        />
        <PricingCard
          title="Solution Custom"
          subtitle="Production & Scale"
          price="Sur devis"
          delay="400ms"
          :features="[
            'Architecture complexe & Agents',
            'Maintenance long terme',
            'SLA & Support prioritaire',
            'Formation des équipes techniques',
            'Audit de conformité continu'
          ]"
          :cta="openCalendly"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TerminalBackground from '@/components/ui/TerminalBackground.vue'
import PricingCard from './PricingCard.vue'

const openCalendly = () => {
  window.open('https://calendly.com/', '_blank')
}
</script>
