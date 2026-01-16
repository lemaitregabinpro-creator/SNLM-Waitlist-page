<template>
  <section class="py-10 border-y border-slate-800 overflow-hidden">
    <p class="text-center text-slate-500 text-sm font-mono mb-6">
      INTÉGRATION NATIVE & TECHNOLOGIES SÉCURISÉES
    </p>
    <div class="relative w-full overflow-hidden">
      <div class="flex animate-scroll-slow" style="width: fit-content;">
        <div class="flex items-center gap-16 px-8 flex-shrink-0">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="text-lg font-semibold text-gold-400 whitespace-nowrap cursor-default select-none flex-shrink-0"
          >
            {{ tech }}
          </span>
        </div>
        <div class="flex items-center gap-16 px-8 flex-shrink-0">
          <span
            v-for="tech in technologies"
            :key="`duplicate-${tech}`"
            class="text-lg font-semibold text-gold-400 whitespace-nowrap cursor-default select-none flex-shrink-0"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = ['INSTANTANÉ • 0 DÉLAI', 'PNG • JPEG • WEBP', 'SANS FILIGRANE NOTEBOOKLM', '10% → ASSOCIATIONS CANINES', 'LOCAL FIRST • 100% PRIVÉ', 'NOTEBOOKLM → DESIGN PRO']
</script>
