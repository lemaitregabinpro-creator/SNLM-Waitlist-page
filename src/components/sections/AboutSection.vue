<template>
  <section class="py-20 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="relative w-32 h-32 mx-auto mb-6 bg-slate-800 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg shadow-gold-500/20 group hover:scale-105 transition-transform">
        <img 
          :src="imageSrc" 
          alt="Gabin Lemaitre - Fondateur SmartUnityIA" 
          class="w-full h-full object-cover"
        />
      </div>
      <h2 class="text-3xl font-bold text-white mb-2">Le Studio d'Ingénierie SmartUnityIA</h2>
      <p class="text-gold-400 font-mono text-sm mb-8">L'alliance de la puissance brute et de la confidentialité absolue.</p>
      <div class="text-left space-y-6 text-slate-300 leading-relaxed">
        <p class="text-lg">
          Fondé par Gabin Lemaitre, ingénieur expert, SmartUnityIA est un studio de développement spécialisé dans les architectures IA souveraines (Local First).
        </p>
        <p class="text-lg">
          Nous refusons le compromis entre performance et sécurité. C'est pourquoi nous développons des solutions hybrides : des 'Private Brains' installés physiquement chez vous (Mac Mini/GPU) pour le secret absolu, couplés à des API suisses (Euria) ou françaises pour la puissance éco-responsable.
        </p>
        <p class="text-lg">
          Notre mission est claire : doter les entreprises françaises (Avocats, Santé, Industries) d'une intelligence artificielle qui leur appartient, sans jamais céder leurs données aux géants américains.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Référence à l'image dans /public - les fichiers dans /public sont servis à la racine
const imageSrc = '/Perso.JPG'
</script>
