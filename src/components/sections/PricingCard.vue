<template>
  <FadeInSection :delay="delay">
    <div
      :class="[
        'relative p-1 rounded-3xl h-full transition-all duration-300 group flex flex-col',
        recommended ? 'transform md:scale-110 z-20' : '',
        lifetime ? 'bg-gradient-to-b from-slate-800 to-slate-900' : 'bg-slate-900/50 backdrop-blur-sm'
      ]"
    >
      <!-- Gradient pour PRO -->
      <div
        v-if="recommended"
        :class="[
          'absolute inset-0 rounded-3xl bg-gradient-to-b transition-opacity duration-300',
          'from-yellow-500 via-amber-500 to-yellow-600 opacity-60 group-hover:opacity-100 blur-sm'
        ]"
      ></div>

      <div 
        :class="[
          'relative rounded-3xl p-8 h-full flex flex-col border transition-all duration-300',
          recommended 
            ? 'bg-slate-900 border-2 border-yellow-500 shadow-2xl shadow-yellow-500/20' 
            : (lifetime
            ? 'border-amber-500/50 hover:border-amber-500'
            : 'border-slate-800 hover:border-slate-600')
        ]"
      >
        <!-- Badge "Meilleur Choix" pour PRO -->
        <div
          v-if="recommended"
          class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap"
        >
          Meilleur Choix
        </div>
        
        <!-- Badge "-85% vs 2 ans" pour Lifetime -->
        <div
          v-if="lifetime"
          class="absolute top-0 right-0 m-4 bg-amber-500/10 text-amber-500 text-[9px] font-black px-2 py-1 rounded border border-amber-500/20"
        >
          -85% vs 2 ans
        </div>

        <div class="mb-6" :class="{ 'pt-2': recommended }">
          <h3 class="text-sm font-black uppercase tracking-widest mb-4" :class="recommended ? 'text-yellow-500' : (lifetime ? 'text-amber-500' : 'text-slate-400')">
            {{ title }}
          </h3>
          <div class="flex items-baseline mb-2">
            <span :class="[
              'font-black text-white tracking-tighter',
              recommended ? 'text-5xl' : 'text-4xl'
            ]">{{ price }}</span>
            <span v-if="pricePeriod" class="text-slate-400 font-bold text-sm ml-1">{{ pricePeriod }}</span>
            <span v-else-if="!lifetime && price !== '0€'" class="text-slate-500 font-bold text-xs ml-1 uppercase">Une fois</span>
          </div>
          <p v-if="subtitle" :class="[
            'text-xs font-medium',
            lifetime ? 'text-slate-400' : 'text-slate-500'
          ]">
            {{ subtitle }}
          </p>
        </div>

        <!-- Divider pour PRO -->
        <div v-if="recommended" class="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-6"></div>

        <ul class="space-y-4 mb-8 flex-grow">
          <li v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3 text-sm">
            <CheckCircle
              :class="[
                'w-5 h-5 shrink-0',
                isFeatureHighlighted(feature)
                  ? 'text-yellow-400'
                  : 'text-slate-500 group-hover:text-yellow-400 transition-colors'
              ]"
            />
            <span :class="[
              'font-medium',
              isFeatureHighlighted(feature)
                ? 'text-white'
                : 'text-slate-400'
            ]">{{ feature }}</span>
          </li>
        </ul>
        
        <button 
          @click="cta"
          :class="[
            'w-full py-4 px-4 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all',
            recommended
              ? 'bg-yellow-500 text-slate-950 hover:bg-white shadow-lg hover:shadow-yellow-500/25 active:scale-95'
              : (lifetime
              ? 'bg-white text-slate-950 border border-white hover:bg-amber-500 hover:text-white hover:border-amber-500'
              : 'bg-transparent border border-slate-700 text-white hover:bg-slate-800')
          ]"
        >
          {{ buttonText || 'Me contacter' }}
        </button>
        
        <p v-if="recommended" class="text-center mt-4 text-[10px] text-slate-500 font-medium">
          Annulable à tout moment. Satisfait ou remboursé.
        </p>

        <div class="mt-4">
          <PreferenceFeedback category="pricing" :item-id="title" />
        </div>
      </div>
    </div>
  </FadeInSection>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
import PreferenceFeedback from '@/components/ui/PreferenceFeedback.vue'

const props = defineProps({
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
  pricePeriod: {
    type: String,
    default: '',
  },
  features: {
    type: Array,
    required: true,
  },
  recommended: {
    type: Boolean,
    default: false,
  },
  lifetime: {
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

const isFeatureHighlighted = (feature) => {
  if (!feature || typeof feature !== 'string') return false
  if (props.recommended) return true
  const highlightKeywords = ['Suppression', 'Crédits', 'Slides', 'Badge', 'Accès à Vie']
  return highlightKeywords.some(keyword => feature.includes(keyword))
}
</script>
