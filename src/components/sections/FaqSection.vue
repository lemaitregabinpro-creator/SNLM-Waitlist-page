<template>
  <section id="faq" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Questions Fréquentes</h2>
    <div class="space-y-2">
      <FaqItem
        question="Pourquoi le Local First coûte-t-il plus cher à l'installation ?"
        answer="Contrairement à un abonnement ChatGPT à 20€, nous construisons une infrastructure dédiée. C'est un investissement en capital (CAPEX) plutôt qu'une dépense opérationnelle (OPEX). Vous payez pour construire la maison, pas pour la louer."
      />
      <FaqItem
        question="Suis-je propriétaire du code ?"
        answer="Oui, absolument. C'est le cœur de mon offre. Une fois le projet livré et payé, vous possédez 100% du code source, des bases de données et de la propriété intellectuelle."
      />
      <FaqItem
        question="Quelle est la configuration matérielle requise ?"
        answer="Pour faire tourner des LLM performants (Llama 3, Mistral) en local, un bon GPU est recommandé (type NVIDIA RTX). Si vous n'avez pas de serveurs, je peux configurer un Cloud Privé (OVH, Scaleway) sécurisé."
      />
    </div>
  </section>
</template>

<script setup>
import FaqItem from '@/components/ui/FaqItem.vue'
</script>
