<template>
  <section class="py-10 border-y border-slate-800 bg-slate-950/50 overflow-hidden">
    <p class="text-center text-slate-500 text-sm font-mono mb-6">
      PROPULSÉ PAR DES TECHNOLOGIES ROBUSTES & SOUVERAINES
    </p>
    <div class="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div class="flex w-[200%] animate-scroll">
        <div v-for="i in 2" :key="i" class="flex justify-around w-1/2 min-w-[50%]">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="text-xl font-bold text-gold-400 hover:text-gold-500 transition-colors cursor-default select-none px-4"
            style="text-shadow: 0 0 12px rgba(209, 167, 96, 0.45);"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent"></div>
      <div class="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
const technologies = ['MISTRAL AI', 'PYTHON', 'DOCKER', 'LANGCHAIN', 'Vue.js', 'POSTGRESQL', 'OLLAMA', 'EURIA']
</script>
