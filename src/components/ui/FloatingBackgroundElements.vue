<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Élément Gauche -->
    <img 
      src="/effect/logo.png" 
      alt="Element décoratif IA" 
      class="absolute -top-20 -left-20 md:top-1/4 md:-left-24 w-64 h-64 md:w-96 md:h-96 object-contain opacity-20 blur-sm animate-spin-slow"
    />
    
    <!-- Élément Droite -->
    <img 
      src="/effect/logo.png" 
      alt="Element décoratif IA" 
      class="absolute -bottom-20 -right-20 md:bottom-1/4 md:-right-24 w-64 h-64 md:w-96 md:h-96 object-contain opacity-20 blur-sm animate-spin-reverse-slow"
    />
  </div>
</template>

<script setup>
// Composant purement visuel, pas de logique nécessaire
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 80s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 80s linear infinite;
}
</style>
