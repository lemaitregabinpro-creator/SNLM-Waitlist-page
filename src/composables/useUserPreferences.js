import { reactive, computed } from 'vue'

// Nombre total de composants PreferenceFeedback sur la page d'accueil
export const TOTAL_STEPS = 12 // 4 cartes prix + 6 services + 2 avant/après (ou ajustez selon vos besoins)

// Cet objet gardera en mémoire les choix de l'utilisateur tant qu'il navigue
export const userPreferences = reactive({
  pricing: {},   // Ex: { "Professionnel": "like", "Essentiel": "dislike" }
  features: {},   // Ex: { "Import Universel": "indifferent" }
  beforeafter: {} // Ex: { "Avant-1": "like", "Après-1": "like" }
})

// Fonction pour mettre à jour une préférence
export const setPreference = (category, itemId, value) => {
  if (!userPreferences[category]) {
    userPreferences[category] = {}
  }
  userPreferences[category][itemId] = value
}

// Compte le nombre total de réponses données (clés non nulles)
export const getTotalResponses = () => {
  let count = 0
  
  // Compter les réponses dans pricing
  Object.values(userPreferences.pricing || {}).forEach(value => {
    if (value !== null && value !== undefined) count++
  })
  
  // Compter les réponses dans features
  Object.values(userPreferences.features || {}).forEach(value => {
    if (value !== null && value !== undefined) count++
  })
  
  // Compter les réponses dans beforeafter
  Object.values(userPreferences.beforeafter || {}).forEach(value => {
    if (value !== null && value !== undefined) count++
  })
  
  return count
}

// Calcule le pourcentage de progression
export const getProgressPercentage = () => {
  const responses = getTotalResponses()
  return Math.min(100, Math.round((responses / TOTAL_STEPS) * 100))
}

// Propriété calculée réactive pour le nombre de réponses
export const totalResponses = computed(() => getTotalResponses())

// Propriété calculée réactive pour le pourcentage
export const progressPercentage = computed(() => getProgressPercentage())