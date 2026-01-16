<template>
  <button
    :class="[
      'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group',
      primary
        ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-400 hover:shadow-gold-glow font-bold'
        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 hover:shadow-gold-glow',
      className
    ]"
    @click="onClick"
  >
    <div
      v-if="primary"
      class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"
    ></div>
    <component v-if="icon" :is="icon" class="w-5 h-5 z-10" />
    <span class="z-10"><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    default: null,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
})
</script>
