<template>
  <FadeInSection :delay="delay">
    <div
      :class="[
        'relative p-1 rounded-2xl h-full transition-all duration-300 group',
        recommended ? 'transform md:-translate-y-4' : ''
      ]"
    >
      <div
        :class="[
          'absolute inset-0 rounded-2xl bg-gradient-to-b transition-opacity duration-300',
          recommended
            ? 'from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-sm'
            : 'from-slate-700 to-slate-800 opacity-50 group-hover:opacity-100 group-hover:from-cyan-500/50 group-hover:to-slate-800'
        ]"
      ></div>

      <div class="relative bg-slate-900/90 backdrop-blur-xl rounded-xl p-8 h-full flex flex-col border border-slate-800 group-hover:border-gold-500/50 transition-all duration-300">
        <div
          v-if="recommended"
          class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg shadow-cyan-500/30"
        >
          Recommandé
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-white mb-1">{{ title }}</h3>
          <p v-if="subtitle" class="text-xs text-cyan-400 uppercase tracking-wider font-medium">
            {{ subtitle }}
          </p>
        </div>
        <div class="mb-6 pb-6 border-b border-slate-800">
          <span class="text-3xl md:text-4xl font-bold text-white tracking-tight">{{ price }}</span>
          <span v-if="price !== 'Sur devis'" class="text-slate-500 text-sm font-medium"> HT</span>
          <p v-if="disclaimer" class="mt-3 text-[10px] text-slate-500 leading-tight italic">
            {{ disclaimer }}
          </p>
        </div>
        <ul class="space-y-4 mb-8 flex-grow">
          <li v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3 text-sm text-slate-300">
            <CheckCircle
              :class="[
                'w-5 h-5 shrink-0',
                recommended
                  ? 'text-cyan-400'
                  : 'text-slate-500 group-hover:text-cyan-400 transition-colors'
              ]"
            />
            <span>{{ feature }}</span>
          </li>
        </ul>
        <CallButton class="w-full" @click="cta">
          {{ buttonText || 'Me contacter' }}
        </CallButton>
      </div>
    </div>
  </FadeInSection>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import CallButton from '@/components/ui/CallButton.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  recommended: {
    type: Boolean,
    default: false,
  },
  cta: {
    type: Function,
    default: () => {},
  },
  delay: {
    type: String,
    default: '0ms',
  },
  buttonText: {
    type: String,
    default: '',
  },
  disclaimer: {
    type: String,
    default: '',
  },
})
</script>
