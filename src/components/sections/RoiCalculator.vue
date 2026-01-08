<template>
  <div class="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
    <div class="absolute top-0 right-0 p-3 opacity-10">
      <Calculator class="w-32 h-32 text-cyan-500" />
    </div>

    <div class="p-8 md:p-12">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-white mb-2">Le Coût de l'Inaction</h2>
        <p class="text-slate-400">Combien vous coûte l'absence d'IA chaque année ?</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
          <RangeSlider
            label="Nombre de collaborateurs"
            :value="employees"
            :min="1"
            :max="50"
            :step="1"
            unit="pers"
            @update:value="employees = $event"
          />
          <RangeSlider
            label="Temps perdu / jour (tâches répétitives)"
            :value="minutes"
            :min="10"
            :max="180"
            :step="5"
            unit="min"
            @update:value="minutes = $event"
          />
          <RangeSlider
            label="Coût horaire moyen (chargé)"
            :value="rate"
            :min="25"
            :max="150"
            :step="5"
            unit="€/h"
            @update:value="rate = $event"
          />
        </div>

        <div class="text-center lg:text-left">
          <p class="text-slate-500 font-medium mb-2 uppercase tracking-wide text-xs">
            Perte annuelle estimée
          </p>
          <div class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-6">
            <AnimatedCounter :value="annualLoss" :currency="true" />
          </div>

          <div class="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4 inline-block text-left">
            <div class="flex items-center gap-3 mb-1">
              <TrendingUp class="text-cyan-400 w-5 h-5" />
              <span class="text-white font-bold">Retour sur investissement</span>
            </div>
            <p class="text-slate-300 text-sm">
              Avec un MVP à 3 500€, votre solution SmartUnityIA est rentabilisée en seulement
              <span class="text-cyan-400 font-bold text-lg">{{ paybackDays }} jours</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Calculator, TrendingUp } from 'lucide-vue-next'
import RangeSlider from '@/components/ui/RangeSlider.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'

const employees = ref(5)
const minutes = ref(45)
const rate = ref(45)

const hoursLostPerDay = computed(() => minutes.value / 60)
const dailyLoss = computed(() => employees.value * hoursLostPerDay.value * rate.value)
const annualLoss = computed(() => dailyLoss.value * 220) // 220 jours ouvrés
const mvpPrice = 3500
const paybackDays = computed(() =>
  dailyLoss.value > 0 ? Math.ceil(mvpPrice / dailyLoss.value) : 0
)
</script>
