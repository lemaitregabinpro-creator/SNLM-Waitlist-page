<template>
  <section id="pricing" class="py-12 md:py-24 px-6 border-y border-slate-800/50 relative">
    <TerminalBackground />
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          <span class="text-[10px] font-black uppercase tracking-widest text-yellow-500">
            Karma Positif : 10% reversés aux animaux
          </span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 break-words">
          Investissez dans votre <span class="text-yellow-500">Temps</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed break-words">
          Ne perdez plus jamais une heure à rogner des slides. <br class="hidden md:block"/>
          Choisissez l'outil des professionnels exigeants.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
        <!-- GRATUIT - Découverte -->
        <PricingCard
          title="Découverte"
          subtitle="Sans engagement"
          price="0€"
          delay="0ms"
          :features="[
            'Suppression logo NotebookLM',
            '5 Crédits offerts /mois',
            'Export JPEG uniquement',
            'Export Haute Qualité'
          ]"
          button-text="Tester Gratuitement"
          :cta="scrollToWaitlist"
        />
        
        <!-- ESSENTIEL -->
        <PricingCard
          title="Essentiel"
          subtitle="Idéal pour les étudiants & freelances"
          price="9€"
          price-period="/mois"
          delay="100ms"
          :features="[
            'Suppression logo NotebookLM',
            '100 Crédits / mois',
            'Badge Donateur',
            'Export Haute Qualité',
            'Support par email'
          ]"
          button-text="Choisir Essentiel"
          :cta="scrollToWaitlist"
        />
        
        <!-- PRO - Recommandé -->
        <PricingCard
          title="Professionnel"
          subtitle="La puissance totale, sans contraintes"
          price="19€"
          price-period="/mois"
          :recommended="true"
          delay="200ms"
          :features="[
            'Suppression logo NotebookLM',
            'Slides Illimitées ⚡',
            'Badge Donateur SmartUnityIA',
            'Export Haute Qualité',
            'Code Promo pour chaque nouvel outil',
            'Accès aux avant-premières gratuites',
            'Support par email'
          ]"
          button-text="Devenir Pro - 19€"
          :cta="scrollToWaitlist"
        />
        
        <!-- LIFETIME -->
        <PricingCard
          title="Lifetime"
          subtitle="Une fois"
          price="199€"
          price-period=""
          delay="300ms"
          :lifetime="true"
          :features="[
            'Tous les avantages PRO',
            'Accès à Vie Garanti',
            'Mises à jour futures incluses',
            'Statut Investisseur SmartUnityIA'
          ]"
          button-text="Sécuriser ma place"
          :cta="scrollToWaitlist"
        />
      </div>
      
      <!-- Reassurance Footer -->
      <div class="text-center mt-12 max-w-2xl mx-auto">
        <p class="text-slate-500 text-xs font-medium leading-relaxed">
          Paiement sécurisé par Stripe & Lemon Squeezy. <br/>
          Une partie de vos 19€ finance directement des refuges animaliers certifiés.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import TerminalBackground from '@/components/ui/TerminalBackground.vue'
import PricingCard from './PricingCard.vue'

const scrollToWaitlist = () => {
  document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
