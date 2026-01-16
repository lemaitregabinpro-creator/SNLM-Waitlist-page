<template>
  <div class="relative group">
    <!-- Badge Avant/Après dynamique -->
    <div 
      :class="[
        'absolute -top-4 left-4 px-4 py-2 rounded-lg text-sm font-bold z-10 shadow-lg transition-colors',
        isAfter ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
      ]"
    >
      {{ isAfter ? 'Après' : 'Avant' }}
    </div>

    <!-- Conteneur de comparaison -->
    <div class="relative border border-slate-800 rounded-xl p-4 md:p-6 overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300 flex flex-col">
      <!-- Zone de comparaison interactive -->
      <div 
        class="relative w-full rounded-lg select-none"
        ref="containerRef"
        @mousedown="startDrag"
        @mousemove="onMouseMove"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @touchstart="startDrag"
        @touchmove="onTouchMove"
        @touchend="stopDrag"
      >
        <!-- Conteneur pour les images -->
        <div class="relative w-full" ref="imageContainerRef">
          <!-- Image Avant (arrière-plan) -->
          <img 
            :src="beforeImage" 
            :alt="`Avant - ${label}`"
            class="w-full h-auto block"
            ref="beforeImageRef"
            @load="updateImageHeight"
          />
          
          <!-- Image Après (superposée avec clip-path) -->
          <div 
            class="absolute top-0 left-0 w-full overflow-hidden"
            :style="{ 
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }"
          >
            <img 
              :src="afterImage" 
              :alt="`Après - ${label}`"
              class="w-full h-auto block"
            />
          </div>

          <!-- Handle (ligne de séparation) -->
          <div 
            class="absolute top-0 bottom-0 w-0.5 bg-yellow-500 cursor-ew-resize z-20 pointer-events-none"
            :style="{ 
              left: `${sliderPosition}%`
            }"
          >
            <!-- Cercle du handle -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 rounded-full border-2 border-slate-900 shadow-lg flex items-center justify-center pointer-events-auto">
              <GripVertical class="w-5 h-5 text-slate-900" />
            </div>
          </div>
        </div>
      </div>

      <!-- Label -->
      <p class="text-slate-400 text-sm mt-4 text-center">
        {{ label }}
      </p>

      <!-- Slider pour mobile -->
      <div class="mt-4 md:hidden">
        <input 
          type="range" 
          min="0" 
          max="100" 
          :value="sliderPosition"
          @input="onSliderInput"
          class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { GripVertical } from 'lucide-vue-next'

const props = defineProps({
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Comparaison avant/après'
  }
})

const sliderPosition = ref(50)
const isDragging = ref(false)
const containerRef = ref(null)
const imageContainerRef = ref(null)
const beforeImageRef = ref(null)
const afterImageRef = ref(null)
const imageHeight = ref(null)

const isAfter = computed(() => sliderPosition.value > 50)

const updateImageHeight = () => {
  if (beforeImageRef.value) {
    imageHeight.value = beforeImageRef.value.offsetHeight
  }
}

const startDrag = (e) => {
  isDragging.value = true
  e.preventDefault()
  updatePosition(e)
}

const stopDrag = () => {
  isDragging.value = false
}

const onMouseMove = (e) => {
  if (!isDragging.value) return
  updatePosition(e)
}

const onTouchMove = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const touch = e.touches[0]
  if (containerRef.value) {
    updatePosition({ clientX: touch.clientX, currentTarget: containerRef.value })
  }
}

const updatePosition = (e) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPosition.value = percentage
}

const onSliderInput = (e) => {
  sliderPosition.value = parseInt(e.target.value)
}

// Gestion globale du mouseup pour éviter les bugs
onMounted(() => {
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
/* Style pour le slider range sur mobile */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #eab308;
  cursor: pointer;
  border: 2px solid #0f172a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #eab308;
  cursor: pointer;
  border: 2px solid #0f172a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
