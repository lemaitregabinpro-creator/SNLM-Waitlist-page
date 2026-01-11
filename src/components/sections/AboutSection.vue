<template>
  <section class="py-20 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="relative w-32 h-32 mx-auto mb-6 bg-slate-800 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg shadow-gold-500/20 group hover:scale-105 transition-transform">
        <img 
          :src="imageSrc" 
          alt="Gabin Lemaitre - Ingénieur IA expert en solutions Local First et agents IA autonomes pour finance, santé et juridique" 
          class="w-full h-full object-cover"
        />
      </div>
      <h2 class="text-3xl font-bold text-white mb-2">Ingénieur IA Expert en Solutions Local First</h2>
      <p class="text-gold-400 font-mono text-sm mb-8">L'alliance de la puissance brute et de la confidentialité absolue.</p>
      <div class="text-left space-y-6 text-slate-300 leading-relaxed">
        <p class="text-lg">
          Fondé par Gabin Lemaitre, <strong class="text-white">ingénieur IA</strong> expert, SmartUnityIA est un studio de développement spécialisé dans les <strong class="text-white">solutions IA souveraines</strong> et architectures <strong class="text-white">Local First</strong> pour les secteurs sensibles (finance, santé, juridique).
        </p>
        <p class="text-lg">
          Nous refusons le compromis entre performance et sécurité. C'est pourquoi nous développons des <strong class="text-white">agents IA autonomes</strong> et solutions hybrides : des 'Private Brains' installés physiquement chez vous (Mac Mini/GPU) pour la <strong class="text-white">protection des données sensibles</strong>, couplés à des <strong class="text-white">API françaises</strong> (Mistral) ou suisses (Euria) pour la puissance éco-responsable. Chaque Mac Mini configuré génère un don de 100€ à la santé animale.
        </p>
        <p class="text-lg">
          Notre mission : doter les entreprises françaises (<strong class="text-white">IA pour la finance</strong>, <strong class="text-white">IA pour la santé</strong>, <strong class="text-white">conformité juridique</strong>) d'une <strong class="text-white">IA sécurisée</strong> qui leur appartient, sans jamais céder leurs données aux géants américains.
        </p>
        <div class="mt-8 p-6 bg-slate-800/50 border border-gold-500/30 rounded-xl">
          <p class="text-lg text-slate-300">
            <span class="text-gold-400 font-bold">💚 Engagement Éthique :</span> Pour chaque Mac Mini configuré et vendu, nous reversons <strong class="text-white">100€ à la santé animale</strong>. L'innovation technologique au service du bien-être animal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Référence à l'image dans /public - les fichiers dans /public sont servis à la racine
const imageSrc = '/Perso.JPG'
</script>
