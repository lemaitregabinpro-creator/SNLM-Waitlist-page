<template>
  <section class="py-20 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="relative w-32 h-32 mx-auto mb-6 bg-slate-800 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg shadow-gold-500/20 group hover:scale-105 transition-transform">
        <img 
          :src="imageSrc" 
          alt="Gabin Lemaitre - Ingénieur IA expert, créateur de SmartBookLM pour la suppression automatique du filigrane NotebookLM" 
          class="w-full h-full object-cover"
        />
      </div>
      <h2 class="text-3xl font-bold text-white mb-2">Ingénieur IA Expert en Solutions Local First</h2>
      <p class="text-gold-400 font-mono text-sm mb-8">L'alliance de la puissance brute et de la confidentialité absolue.</p>
      <div class="text-left space-y-6 text-slate-300 leading-relaxed">
        <p class="text-lg">
          Développé par Gabin Lemaitre, <strong class="text-white">ingénieur IA</strong> expert, SmartBookLM est un outil web conçu pour transformer vos exports NotebookLM en <strong class="text-white">présentations professionnelles</strong> avec une <strong class="text-white">rapidité hors norme</strong>. Supprimez le filigrane NotebookLM sur toutes vos slides en quelques secondes.
        </p>
        <p class="text-lg">
          Nous refusons le compromis entre performance et confidentialité. C'est pourquoi SmartBookLM fonctionne en <strong class="text-white">mode Local First</strong> : tous les traitements se font directement sur votre machine, <strong class="text-white">aucune donnée ne quitte votre ordinateur</strong>. Vos présentations sensibles restent privées, sans upload vers des serveurs distants.
        </p>
        <p class="text-lg">
          Notre mission : offrir aux <strong class="text-white">créateurs de contenu éducatifs</strong> et <strong class="text-white">professionnels</strong> un outil qui automatise la suppression du filigrane NotebookLM, leur faisant gagner des heures de travail tout en préservant leur <strong class="text-white">confidentialité totale</strong>.
        </p>
        <div class="mt-8 p-6 border border-gold-500/30 rounded-xl">
          <p class="text-lg text-slate-300">
            <span class="text-gold-400 font-bold">💚 Engagement Éthique :</span> Une partie de chaque abonnement est reversée à la <strong class="text-white">santé animale</strong>. L'innovation technologique au service du bien-être animal.
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
