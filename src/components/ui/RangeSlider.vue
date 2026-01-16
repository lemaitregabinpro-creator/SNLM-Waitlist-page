<template>
  <div class="mb-6">
    <div class="flex justify-between items-center mb-2">
      <label class="text-slate-300 font-medium text-sm">{{ label }}</label>
      <span class="text-yellow-400 font-mono font-bold">
        {{ value }} <span class="text-slate-500 text-xs">{{ unit }}</span>
      </span>
    </div>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @input="handleInput"
      class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500 hover:accent-yellow-400 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:value'])

const handleInput = (event) => {
  emit('update:value', Number(event.target.value))
}
</script>
