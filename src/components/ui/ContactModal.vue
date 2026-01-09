<template>
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="$emit('close')"></div>
        
        <div class="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden animate-slide-up">
          
          <button @click="$emit('close')" class="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
            <X class="w-6 h-6" />
          </button>
  
          <div v-if="isSuccess" class="text-center py-10">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
              <Check class="w-8 h-8 text-green-500" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
            <p class="text-slate-400">Je reviens vers vous sous 24h.</p>
            <button @click="$emit('close')" class="mt-8 text-sm text-slate-500 hover:text-white underline">
              Fermer
            </button>
          </div>
  
          <div v-else>
            <h3 class="text-2xl font-bold text-white mb-2">Me contacter</h3>
            <p class="text-slate-400 mb-6">Décrivez votre projet brièvement.</p>
  
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1">Votre Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  name="email" 
                  required
                  class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="nom@entreprise.com"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1">Votre Téléphone (Optionnel)</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  name="phone" 
                  class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea 
                  v-model="form.message"
                  name="message" 
                  rows="4" 
                  required
                  class="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Bonjour Gabin, j'aimerais discuter de..."
                ></textarea>
              </div>
  
              <div class="pt-2">
                <CallButton 
                  type="submit" 
                  :disabled="isLoading"
                  class="w-full"
                >
                  <div class="flex items-center gap-2">
                    <span v-if="isLoading">Envoi en cours...</span>
                    <span v-else>Envoyer le message</span>
                    <Send v-if="!isLoading" class="w-4 h-4" />
                  </div>
                </CallButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { X, Send, Check } from 'lucide-vue-next'
  import CallButton from '@/components/ui/CallButton.vue'
  
  defineProps({
    isOpen: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const form = reactive({
    email: '',
    phone: '',
    message: ''
  })
  
  const handleSubmit = async () => {
    isLoading.value = true
    
    try {
      const response = await fetch("https://formspree.io/f/xbddrjaw", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
  
      if (response.ok) {
        isSuccess.value = true
        form.email = ''
        form.phone = ''
        form.message = ''
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