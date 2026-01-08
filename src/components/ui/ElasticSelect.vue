<template>
  <div class="mb-6">
    <div class="flex justify-between items-center mb-3">
      <label class="text-slate-300 font-medium text-sm">{{ label }}</label>
      <span class="text-cyan-400 font-mono font-bold text-lg">
        {{ displayValue }} <span class="text-slate-500 text-xs">{{ unit }}</span>
      </span>
    </div>
    
    <div class="relative bg-slate-950/50 rounded-xl border border-slate-800 p-4 overflow-hidden">
      <!-- Navigation Buttons -->
      <button
        @click="goToPrev"
        :disabled="currentIndex === 0"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft class="w-4 h-4" />
      </button>
      
      <button
        @click="goToNext"
        :disabled="currentIndex === options.length - 1"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight class="w-4 h-4" />
      </button>

      <!-- Scrollable Container -->
      <div
        ref="containerRef"
        class="flex items-center justify-center gap-4 overflow-x-hidden scrollbar-hide transition-transform duration-300 ease-out"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          :ref="(el) => setItemRef(el, index)"
          @click="selectOption(index)"
          :class="[
            'flex-shrink-0 px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 select-none',
            index === currentIndex
              ? 'text-cyan-400 font-bold scale-110 bg-slate-900/50 border border-cyan-500/30'
              : 'text-slate-500 scale-90 hover:text-slate-400 hover:scale-95'
          ]"
        >
          {{ formatOption(option) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [Number, String],
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  unit: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const containerRef = ref(null)
const itemRefs = ref([])
const currentIndex = ref(0)
const translateX = ref(0)

const displayValue = computed(() => {
  return formatOption(props.options[currentIndex.value])
})

const formatOption = (option) => {
  if (typeof option === 'object' && option !== null) {
    return option.label || option.value
  }
  return option
}

const setItemRef = (el, index) => {
  if (el) {
    itemRefs.value[index] = el
  }
}

const selectOption = (index) => {
  currentIndex.value = index
  emit('update:modelValue', getOptionValue(props.options[index]))
  centerSelectedItem()
}

const getOptionValue = (option) => {
  if (typeof option === 'object' && option !== null) {
    return option.value !== undefined ? option.value : option
  }
  return option
}

const centerSelectedItem = () => {
  nextTick(() => {
    if (!containerRef.value || !itemRefs.value[currentIndex.value]) return

    const container = containerRef.value
    const selectedItem = itemRefs.value[currentIndex.value]
    const containerRect = container.getBoundingClientRect()
    const itemRect = selectedItem.getBoundingClientRect()
    
    const containerWidth = containerRect.width
    const itemWidth = itemRect.width
    const itemLeft = itemRect.left - containerRect.left

    // Calculate the center position
    const centerOffset = containerWidth / 2 - itemWidth / 2
    translateX.value = centerOffset - itemLeft
  })
}

const goToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    emit('update:modelValue', getOptionValue(props.options[currentIndex.value]))
    centerSelectedItem()
  }
}

const goToNext = () => {
  if (currentIndex.value < props.options.length - 1) {
    currentIndex.value++
    emit('update:modelValue', getOptionValue(props.options[currentIndex.value]))
    centerSelectedItem()
  }
}

// Sync with external modelValue changes
watch(
  () => props.modelValue,
  (newValue) => {
    const index = props.options.findIndex(
      (opt) => getOptionValue(opt) === newValue
    )
    if (index !== -1 && index !== currentIndex.value) {
      currentIndex.value = index
      centerSelectedItem()
    }
  },
  { immediate: true }
)

// Initialize currentIndex based on modelValue
onMounted(() => {
  const index = props.options.findIndex(
    (opt) => getOptionValue(opt) === props.modelValue
  )
  if (index !== -1) {
    currentIndex.value = index
  }
  centerSelectedItem()
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
