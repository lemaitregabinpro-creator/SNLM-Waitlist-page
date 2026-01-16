<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <div class="relative w-full max-w-2xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up flex flex-col">
        
        <button 
          @click.stop="$emit('close')" 
          class="absolute top-4 right-4 z-50 text-slate-500 hover:text-white transition-colors bg-slate-900 rounded-full p-1.5 hover:bg-slate-800 shadow-lg"
          aria-label="Fermer"
        >
          <X class="w-6 h-6" />
        </button>

        <!-- Badge de félicitations si progression complète -->
        <div v-if="isProgressComplete" class="relative z-10 border-b border-green-500/20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10">
          <div class="flex items-center justify-center gap-3 px-6 py-4">
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30">
              <Trophy class="w-5 h-5 text-green-400" />
            </div>
            <div class="text-center">
              <p class="text-sm font-bold text-green-400">Félicitations !</p>
              <p class="text-xs text-slate-400">Merci d'avoir contribué au développement de SmartBookLM</p>
            </div>
          </div>
        </div>

        <div class="overflow-y-auto flex-1 p-8">
        <div v-if="isSuccess" class="text-center py-10">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
            <Check class="w-8 h-8 text-green-500" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Formulaire envoyé !</h3>
          <p class="text-slate-400">Merci pour votre retour précieux.</p>
          <button @click="$emit('close')" class="mt-8 text-sm text-slate-500 hover:text-white underline">
            Fermer
          </button>
        </div>

        <div v-else>
          <h3 class="text-2xl font-bold text-white mb-2">Partagez votre avis</h3>
          <p class="text-slate-400 mb-6">Vos préférences nous aident à améliorer SmartBookLM.</p>

          <!-- Affichage des choix sur les cartes -->
          <div v-if="hasPreferences" class="mb-6 space-y-4">
            <div v-if="Object.keys(preferences.pricing).length > 0" class="bg-slate-950/50 border border-slate-800 rounded-lg p-4">
              <h4 class="text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wider">Vos préférences de tarification</h4>
              <div class="space-y-2">
                <div v-for="(value, item) in preferences.pricing" :key="item" class="flex items-center justify-between text-sm">
                  <span class="text-slate-300">{{ item }}</span>
                  <span :class="[
                    'px-2 py-1 rounded text-xs font-medium',
                    value === 'like' ? 'bg-green-500/20 text-green-400' : 
                    value === 'dislike' ? 'bg-red-500/20 text-red-400' : 
                    'bg-slate-700 text-slate-300'
                  ]">
                    {{ value === 'like' ? '✓ Intéressant' : value === 'dislike' ? '✗ Pas pour moi' : '○ Indifférent' }}
                  </span>
                </div>
              </div>
            </div>

            <div v-if="Object.keys(preferences.features).length > 0" class="bg-slate-950/50 border border-slate-800 rounded-lg p-4">
              <h4 class="text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wider">Vos préférences de fonctionnalités</h4>
              <div class="space-y-2">
                <div v-for="(value, item) in preferences.features" :key="item" class="flex items-center justify-between text-sm">
                  <span class="text-slate-300">{{ item }}</span>
                  <span :class="[
                    'px-2 py-1 rounded text-xs font-medium',
                    value === 'like' ? 'bg-green-500/20 text-green-400' : 
                    value === 'dislike' ? 'bg-red-500/20 text-red-400' : 
                    'bg-slate-700 text-slate-300'
                  ]">
                    {{ value === 'like' ? '✓ Intéressant' : value === 'dislike' ? '✗ Pas pour moi' : '○ Indifférent' }}
                  </span>
                </div>
              </div>
            </div>

            <div v-if="Object.keys(preferences.beforeafter).length > 0" class="bg-slate-950/50 border border-slate-800 rounded-lg p-4">
              <h4 class="text-sm font-bold text-yellow-400 mb-3 uppercase tracking-wider">Vos préférences avant/après</h4>
              <div class="space-y-2">
                <div v-for="(value, item) in preferences.beforeafter" :key="item" class="flex items-center justify-between text-sm">
                  <span class="text-slate-300">{{ item }}</span>
                  <span :class="[
                    'px-2 py-1 rounded text-xs font-medium',
                    value === 'like' ? 'bg-green-500/20 text-green-400' : 
                    value === 'dislike' ? 'bg-red-500/20 text-red-400' : 
                    'bg-slate-700 text-slate-300'
                  ]">
                    {{ value === 'like' ? '✓ Intéressant' : value === 'dislike' ? '✗ Pas pour moi' : '○ Indifférent' }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Nom et Prénom -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1">Prénom *</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  name="firstName" 
                  required
                  class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jean"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1">Nom *</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  name="lastName" 
                  required
                  class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1">Email *</label>
              <input 
                v-model="form.email"
                type="email" 
                name="email" 
                required
                class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                placeholder="jean.dupont@exemple.com"
              />
            </div>

            <!-- Intérêt -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-3">Votre niveau d'intérêt *</label>
              <div class="space-y-2">
                <label class="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer hover:border-yellow-500/50 transition-all">
                  <input 
                    v-model="form.interest"
                    type="radio" 
                    name="interest" 
                    value="je-veux-l-outil"
                    required
                    class="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
                  />
                  <div class="flex-1">
                    <span class="text-white font-medium">Je veux l'outil</span>
                    <p class="text-xs text-slate-400">Je suis prêt à utiliser SmartBookLM dès maintenant</p>
                  </div>
                </label>

                <label class="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer hover:border-yellow-500/50 transition-all">
                  <input 
                    v-model="form.interest"
                    type="radio" 
                    name="interest" 
                    value="je-testerais-peut-etre"
                    required
                    class="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
                  />
                  <div class="flex-1">
                    <span class="text-white font-medium">Je testerais peut-être</span>
                    <p class="text-xs text-slate-400">Je suis intéressé mais pas encore décidé</p>
                  </div>
                </label>

                <label class="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer hover:border-yellow-500/50 transition-all">
                  <input 
                    v-model="form.interest"
                    type="radio" 
                    name="interest" 
                    value="pas-interesse-pour-l-instant"
                    required
                    class="w-4 h-4 text-yellow-500 focus:ring-yellow-500"
                  />
                  <div class="flex-1">
                    <span class="text-white font-medium">Pas intéressé pour l'instant</span>
                    <p class="text-xs text-slate-400">Je préfère attendre ou ce n'est pas pour moi</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Commentaires supplémentaires -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1">Commentaires supplémentaires (optionnel)</label>
              <textarea 
                v-model="form.additionalComments"
                name="additionalComments" 
                rows="4" 
                class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Dites-nous ce que vous pensez, vos suggestions, vos questions..."
              ></textarea>
            </div>

            <!-- Case à cocher pour notification de sortie -->
            <div class="pt-2">
              <label class="flex items-start gap-3 cursor-pointer group">
                <input 
                  v-model="form.notifyOnLaunch"
                  type="checkbox" 
                  name="notifyOnLaunch"
                  class="mt-1 w-4 h-4 text-yellow-500 bg-slate-950 border-slate-700 rounded focus:ring-yellow-500 focus:ring-2"
                />
                <div class="flex-1">
                  <span class="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Je souhaite recevoir un email le jour de la sortie de SmartBookLM
                  </span>
                </div>
              </label>
            </div>

            <!-- Texte de confidentialité -->
            <div class="pt-2 pb-4">
              <p class="text-xs text-slate-500 leading-relaxed">
                🔒 <strong class="text-slate-400">Vos données sont protégées :</strong> Vos données ne seront jamais vendues à des tiers. 
                Elles seront uniquement utilisées pour vous envoyer des codes promo et des notifications sur les nouvelles sorties de SmartUnityIA.
              </p>
            </div>

            <div class="pt-2">
              <button 
                type="submit" 
                :disabled="isLoading"
                class="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span v-if="isLoading">Envoi en cours...</span>
                <span v-else>Envoyer le formulaire</span>
                <Send v-if="!isLoading" class="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { X, Send, Check, Trophy } from 'lucide-vue-next'
import { userPreferences, progressPercentage } from '@/composables/useUserPreferences'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const isLoading = ref(false)
const isSuccess = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  interest: '',
  additionalComments: '',
  notifyOnLaunch: false
})

const preferences = computed(() => userPreferences)

const hasPreferences = computed(() => {
  return Object.keys(userPreferences.pricing).length > 0 || 
         Object.keys(userPreferences.features).length > 0 ||
         Object.keys(userPreferences.beforeafter).length > 0
})

// Vérifie si la progression est complète (100%)
const isProgressComplete = computed(() => progressPercentage.value >= 100)

const handleSubmit = async () => {
  isLoading.value = true
  
  // Préparation des données complètes
  const formData = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    interest: form.interest,
    additionalComments: form.additionalComments || '',
    notifyOnLaunch: form.notifyOnLaunch,
    // Préférences de tarification
    preferences_pricing: JSON.stringify(userPreferences.pricing, null, 2),
    preferences_features: JSON.stringify(userPreferences.features, null, 2),
    preferences_beforeafter: JSON.stringify(userPreferences.beforeafter, null, 2)
  }
  
  try {
    const response = await fetch("https://formspree.io/f/xkooondd", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      isSuccess.value = true
      // Reset du form
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.interest = ''
      form.additionalComments = ''
      form.notifyOnLaunch = false
    } else {
      alert("Une erreur est survenue. Merci de réessayer.")
    }
  } catch (error) {
    alert("Erreur de connexion.")
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
