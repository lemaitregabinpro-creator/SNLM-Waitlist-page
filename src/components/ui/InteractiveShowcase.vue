<template>
  <div class="relative w-full max-w-lg mx-auto flex flex-col h-[550px] md:h-[600px] font-sans">
    
    <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      <div class="absolute inset-0 bg-slate-900/20 rounded-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center pt-4 pb-6 shrink-0">
      <div class="relative mb-3 group cursor-default">
        <div class="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-[spin_10s_linear_infinite] opacity-50"></div>
        
        <div class="relative w-20 h-20 rounded-full bg-slate-950 border border-slate-800 p-1 shadow-2xl shadow-cyan-900/20 overflow-hidden">
          <img
            :src="avatarUrl"
            class="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Interface agent IA autonome - Solutions IA souveraines Local First pour finance, santé et juridique"
          />
          <div class="absolute bottom-1 right-1 w-3 h-3 bg-cyan-500 border-2 border-slate-950 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div class="text-center">
        <h3 class="text-white font-bold text-lg tracking-tight">SmartUnity Assistant</h3>
        <div class="flex items-center justify-center gap-2 mt-1">
          <ShieldCheck class="w-3 h-3 text-cyan-400" />
          <span class="text-xs text-slate-400 font-mono uppercase tracking-wider">Environnement Local Sécurisé</span>
        </div>
      </div>
    </div>

    <div class="relative z-10 flex-1 overflow-y-auto px-4 py-2 space-y-4 scrollbar-hide mask-gradient">
      <TransitionGroup 
        name="list" 
        tag="div" 
        class="flex flex-col gap-3 pb-4"
      >
        <div 
          v-for="(element, index) in activeElements" 
          :key="element.id || index"
          :class="[
            'max-w-[95%] transition-all duration-500',
            element.type === 'bubble' ? 'self-start' : 'self-stretch'
          ]"
        >
          <div 
            v-if="element.type === 'bubble'"
            class="bg-slate-800/50 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed shadow-sm backdrop-blur-sm"
          >
            {{ element.content }}
          </div>

          <div 
            v-if="element.type === 'card'"
            class="group bg-slate-950 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-4 flex items-start gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10"
          >
            <div class="shrink-0 w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
              <component :is="getIcon(element.icon)" class="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 class="text-white font-bold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                {{ element.title }}
              </h4>
              <p class="text-slate-400 text-xs leading-relaxed">
                {{ element.content }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="isTyping" class="self-start bg-slate-800/30 border border-slate-800/50 px-4 py-3 rounded-2xl rounded-tl-sm w-16 flex items-center justify-center gap-1">
          <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-0"></span>
          <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></span>
          <span class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </TransitionGroup>
    </div>

    <div class="relative z-20 px-2 pb-4 pt-2">
      <div 
        class="relative flex items-center bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full p-1 pl-4 shadow-2xl transition-all duration-300 focus-within:border-cyan-500/50 focus-within:shadow-cyan-500/10 focus-within:bg-slate-900"
      >
        <span class="text-cyan-500 mr-2 animate-pulse">
          <Terminal class="w-4 h-4" />
        </span>
        
        <input
          v-model="userInput"
          type="text"
          placeholder="Posez une question (ex: sécurité, prix)..."
          class="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-500 text-sm h-10"
          @keyup.enter="handleSubmit"
          :disabled="isTyping"
        />

        <button 
          @click="handleSubmit"
          :disabled="!userInput.trim() || isTyping"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-1"
          :class="userInput.trim() && !isTyping ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400' : 'bg-slate-800 text-slate-600 cursor-not-allowed'"
        >
          <ArrowUp class="w-5 h-5" />
        </button>
      </div>
      
      <div class="flex justify-center gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide opacity-70">
        <button 
          v-for="kw in ['Sécurité', 'Local First', 'Prix', 'RGPD']" 
          :key="kw"
          @click="runQuickAction(kw)"
          class="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all whitespace-nowrap"
        >
          {{ kw }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { 
  ShieldCheck, Terminal, ArrowUp, 
  Lock, Database, Euro, TrendingUp, Zap, Server, CheckCircle 
} from 'lucide-vue-next'

// --- STATE ---
const mood = ref('idle')
const activeElements = ref([]) // Stores the chat history
const isTyping = ref(false)
const userInput = ref('')

// --- CONFIG ---
const avatarUrl = computed(() => {
  // Utilisation de l'image locale depuis le dossier public
  return '/avatars/dev.jpg'
})

// Helper icons
const getIcon = (name) => {
  const icons = { Shield: ShieldCheck, Lock, Database, Euro, TrendingUp, Zap, Server, CheckCircle }
  return icons[name] || CheckCircle
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// --- SCENARIOS (Data Logic) ---
const scenarios = {
  default: {
    mood: 'idle',
    sequence: [
      { type: 'bubble', content: "Bonjour. Je suis l'assistant SmartUnity. Je tourne en local sur votre navigateur.", delay: 500 },
      { type: 'bubble', content: "Je peux vous renseigner sur la sécurité de vos données, l'infrastructure locale ou nos tarifs.", delay: 1000 },
    ]
  },
  securite: {
    mood: 'focused',
    sequence: [
      { type: 'bubble', content: "La sécurité est notre priorité absolue.", delay: 500 },
      { type: 'card', title: "Zéro Fuite de Données", content: "Vos données ne quittent jamais votre infrastructure. Aucun tiers n'y a accès.", icon: 'Shield', delay: 1000 },
      { type: 'card', title: "Chiffrement Total", content: "Architecture 'Zero Trust' avec chiffrement de bout en bout.", icon: 'Lock', delay: 1500 },
      { type: 'bubble', content: "C'est la garantie d'une souveraineté totale sur votre propriété intellectuelle.", delay: 2000 },
    ]
  },
  prix: {
    mood: 'happy',
    sequence: [
      { type: 'bubble', content: "Notre modèle économique est simple : vous achetez un actif, vous ne louez pas un service.", delay: 500 },
      { type: 'card', title: "Investissement Unique (CAPEX)", content: "Pas d'abonnement mensuel à vie. Vous payez le développement une fois.", icon: 'Euro', delay: 1000 },
      { type: 'card', title: "ROI Rapide", content: "Rentabilité moyenne constatée en 45 jours grâce aux gains de productivité.", icon: 'TrendingUp', delay: 1500 },
    ]
  },
  local: {
    mood: 'focused',
    sequence: [
      { type: 'bubble', content: "Le 'Local First', c'est l'avenir de l'IA en entreprise.", delay: 500 },
      { type: 'card', title: "Performance Native", content: "Latence minimale. Vos GPU traitent les requêtes en interne instantanément.", icon: 'Zap', delay: 1000 },
      { type: 'card', title: "Indépendance", content: "Vous ne dépendez pas des API américaines (OpenAI, Anthropic) qui peuvent changer leurs prix.", icon: 'Server', delay: 1500 },
    ]
  },
  fallback: {
    mood: 'idle',
    sequence: [
      { type: 'bubble', content: "Je suis un assistant de démonstration scripté pour la sécurité. Essayez les mots-clés : 'sécurité', 'prix' ou 'local'.", delay: 500 },
    ]
  }
}

// --- LOGIC ---

// Detect intent using simple keywords
const detectScenario = (input) => {
  const txt = input.toLowerCase()
  if (txt.match(/s[ée]curit[ée]|rgpd|data|donn[ée]es/)) return 'securite'
  if (txt.match(/prix|tarif|co[uû]t|roi|payer/)) return 'prix'
  if (txt.match(/local|serveur|infra|cloud/)) return 'local'
  return 'fallback'
}

// Play a sequence of messages
const playSequence = async (key) => {
  isTyping.value = true
  const scenario = scenarios[key] || scenarios.fallback
  mood.value = scenario.mood

  for (const step of scenario.sequence) {
    await sleep(step.delay)
    // Add unique ID for Vue transitions
    activeElements.value.push({ ...step, id: Date.now() + Math.random() })
    scrollToBottom()
  }

  isTyping.value = false
  mood.value = 'idle'
}

// Handle User Input
const handleSubmit = async () => {
  if (!userInput.value.trim() || isTyping.value) return

  const text = userInput.value.trim()
  userInput.value = ''

  // Add User Message immediately
  activeElements.value.push({ type: 'bubble', content: text, id: Date.now(), isUser: true }) // Note: UI doesn't visually distinguish user right now to keep "feed" clean, but we could add class if needed.
  
  // Actually, let's just clear logic and reply. 
  // For a showcase, we often clear previous context to avoid clutter or keep it. 
  // Let's keep it to simulate a chat.
  
  scrollToBottom()
  await sleep(600) // fake thinking time
  
  const key = detectScenario(text)
  await playSequence(key)
}

const runQuickAction = (keyword) => {
  userInput.value = keyword
  handleSubmit()
}

// Auto-scroll utility
const scrollToBottom = () => {
  nextTick(() => {
    const container = document.querySelector('.overflow-y-auto')
    if (container) container.scrollTop = container.scrollHeight
  })
}

// Initialize
onMounted(async () => {
  await sleep(800)
  playSequence('default')
})
</script>

<style scoped>
/* Custom Scrollbar hiding */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Mask for fade effect on top of chat */
.mask-gradient {
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 100%);
}

/* List Transitions (Vue) */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>