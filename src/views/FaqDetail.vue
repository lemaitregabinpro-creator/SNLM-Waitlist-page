<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 font-sans">
    <NavBar />
    
    <div v-if="faq" class="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <nav class="mb-6 md:mb-8 text-xs md:text-sm text-slate-400 break-words">
        <router-link to="/" class="hover:text-yellow-400 transition-colors">Accueil</router-link>
        <span class="mx-2">/</span>
        <router-link to="/#faq" class="hover:text-yellow-400 transition-colors">FAQ</router-link>
        <span class="mx-2">/</span>
        <span class="text-slate-300">{{ faq.question }}</span>
      </nav>

      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight break-words">
        {{ faq.question }}
      </h1>

      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
        <p class="text-base md:text-lg text-slate-300 leading-relaxed break-words">
          {{ faq.shortAnswer }}
        </p>
      </div>

      <!-- Diaporama -->
      <div v-if="faq.slides && faq.slides.length > 0" class="mb-8 md:mb-12">
        <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-4 md:p-6">
          <div class="relative">
            <!-- Image actuelle -->
            <div class="relative group">
              <img 
                :src="faq.slides[currentSlideIndex].image" 
                :alt="faq.slides[currentSlideIndex].alt" 
                class="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                @click="openImageModal(currentSlideIndex)"
              />
              <!-- Bouton Agrandir -->
              <button
                @click="openImageModal(currentSlideIndex)"
                class="absolute top-2 right-2 md:top-4 md:right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-1.5 md:p-2 hover:bg-slate-800 hover:border-yellow-500/50 transition-all group"
                aria-label="Agrandir l'image"
              >
                <ZoomIn class="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-yellow-400 transition-colors" />
              </button>
            </div>

            <!-- Navigation -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <button
                @click="previousSlide"
                :disabled="currentSlideIndex === 0"
                class="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base w-full sm:w-auto justify-center"
                :class="currentSlideIndex === 0 ? '' : 'hover:bg-slate-700'"
              >
                <ChevronLeft class="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
                <span class="text-xs md:text-sm text-slate-300">Précédent</span>
              </button>

              <!-- Indicateurs de slides -->
              <div class="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center">
                <span 
                  v-for="(slide, index) in faq.slides" 
                  :key="index"
                  @click="currentSlideIndex = index"
                  class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full cursor-pointer transition-all"
                  :class="currentSlideIndex === index ? 'bg-yellow-500 w-6 md:w-8' : 'bg-slate-600 hover:bg-slate-500'"
                  :aria-label="`Aller à la slide ${index + 1}`"
                ></span>
              </div>

              <button
                @click="nextSlide"
                :disabled="currentSlideIndex === faq.slides.length - 1"
                class="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base w-full sm:w-auto justify-center"
                :class="currentSlideIndex === faq.slides.length - 1 ? '' : 'hover:bg-slate-700'"
              >
                <span class="text-xs md:text-sm text-slate-300">Suivant</span>
                <ChevronRight class="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
              </button>
            </div>

            <!-- Compteur -->
            <p class="text-center text-xs md:text-sm text-slate-400 mt-3">
              {{ currentSlideIndex + 1 }} / {{ faq.slides.length }}
            </p>
          </div>
        </div>
      </div>

      <div class="prose prose-invert max-w-none mb-12">
        <div 
          class="text-slate-300 leading-relaxed space-y-4"
          v-html="faq.detailedAnswer"
        ></div>
      </div>

      <div class="border-t border-slate-800 pt-6 md:pt-8 mt-8 md:mt-12">
        <h3 class="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 break-words">Explorer les autres sujets</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <router-link
            v-for="otherFaq in otherFaqs"
            :key="otherFaq.id"
            :to="`/faq/${otherFaq.slug}`"
            class="block p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-yellow-500/50 hover:bg-slate-900 transition-all group h-full"
          >
            <h4 class="text-white font-medium mb-2 group-hover:text-yellow-400 transition-colors text-sm md:text-base">
              {{ otherFaq.question }}
            </h4>
            <p class="text-xs text-slate-400 line-clamp-2">
              {{ otherFaq.shortAnswer }}
            </p>
          </router-link>
        </div>
      </div>

      <div class="mt-8 md:mt-16 text-center">
        <p class="text-slate-400 mb-4 md:mb-6 break-words">Partagez votre avis et aidez-nous à améliorer SmartBookLM</p>
        <CallButton @click="openFeedbackModal" class="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
          <div class="flex items-center justify-center gap-3">
            <FileText class="w-5 h-5" />
            <span>Remplir le formulaire d'avis</span>
          </div>
        </CallButton>
      </div>

      <div class="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-800 text-center">
        <router-link
          to="/"
          class="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all font-medium text-white group w-full md:w-auto"
        >
          <ArrowLeft class="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          <span class="text-sm md:text-base">Retour à l'accueil</span>
        </router-link>
      </div>
    </div>

    <div v-else class="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4 break-words">Question non trouvée</h1>
      <router-link 
        to="/#faq" 
        class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors w-full md:w-auto"
      >
        <ArrowLeft class="w-4 h-4 md:w-5 md:h-5" />
        <span class="text-sm md:text-base">Retour à la FAQ</span>
      </router-link>
    </div>

    <Footer />

    <!-- Modal de formulaire d'avis -->
    <FeedbackModal :is-open="isFeedbackModalOpen" @close="closeFeedbackModal" />

    <!-- Modal Image Fullscreen -->
    <Transition name="modal">
      <div
        v-if="isImageModalOpen && faq?.slides"
        class="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        @click.self="closeImageModal"
      >
        <button
          @click="closeImageModal"
          class="absolute top-4 right-4 bg-slate-900/90 border border-slate-700 rounded-lg p-2 hover:bg-slate-800 hover:border-yellow-500/50 transition-all z-10"
          aria-label="Fermer"
        >
          <X class="w-6 h-6 text-slate-300 hover:text-white" />
        </button>

        <div class="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
          <img 
            :src="faq.slides[modalImageIndex].image" 
            :alt="faq.slides[modalImageIndex].alt" 
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />

          <!-- Navigation dans la modal -->
          <button
            v-if="modalImageIndex > 0"
            @click.stop="previousModalImage"
            class="absolute left-4 bg-slate-900/90 border border-slate-700 rounded-lg p-3 hover:bg-slate-800 hover:border-cyan-500/50 transition-all"
            aria-label="Image précédente"
          >
            <ChevronLeft class="w-6 h-6 text-slate-300 hover:text-cyan-400" />
          </button>

          <button
            v-if="faq.slides && modalImageIndex < faq.slides.length - 1"
            @click.stop="nextModalImage"
            class="absolute right-4 bg-slate-900/90 border border-slate-700 rounded-lg p-3 hover:bg-slate-800 hover:border-yellow-500/50 transition-all"
            aria-label="Image suivante"
          >
            <ChevronRight class="w-6 h-6 text-slate-300 hover:text-yellow-400" />
          </button>

          <!-- Compteur modal -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-2">
            <p class="text-sm text-slate-300">
              {{ modalImageIndex + 1 }} / {{ faq.slides.length }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { faqData } from '@/data/faqData'
import NavBar from '@/components/sections/NavBar.vue'
import Footer from '@/components/sections/Footer.vue'
import CallButton from '@/components/ui/CallButton.vue'
import FeedbackModal from '@/components/ui/FeedbackModal.vue'
import { FileText, ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-vue-next'

const route = useRoute()

const faq = computed(() => {
  return faqData.find(f => f.slug === route.params.slug)
})

// MODIFICATION ICI : On enlève le .slice(0,3) pour tout montrer
const otherFaqs = computed(() => {
  // On filtre juste la question courante pour ne pas l'afficher en double
  return faqData.filter(f => f.id !== faq.value?.id)
})

// Modal de formulaire d'avis
const isFeedbackModalOpen = ref(false)

const openFeedbackModal = () => {
  isFeedbackModalOpen.value = true
}

const closeFeedbackModal = () => {
  isFeedbackModalOpen.value = false
}

// Diaporama
const currentSlideIndex = ref(0)
const isImageModalOpen = ref(false)
const modalImageIndex = ref(0)

const nextSlide = () => {
  if (faq.value?.slides && currentSlideIndex.value < faq.value.slides.length - 1) {
    currentSlideIndex.value++
  }
}

const previousSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  }
}

const openImageModal = (index) => {
  modalImageIndex.value = index
  isImageModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  isImageModalOpen.value = false
  document.body.style.overflow = ''
}

const nextModalImage = () => {
  if (faq.value?.slides && modalImageIndex.value < faq.value.slides.length - 1) {
    modalImageIndex.value++
  }
}

const previousModalImage = () => {
  if (modalImageIndex.value > 0) {
    modalImageIndex.value--
  }
}

// Réinitialiser l'index du slide quand on change de FAQ
watch(() => faq.value?.id, () => {
  currentSlideIndex.value = 0
})

// Navigation clavier dans la modal
const handleKeydown = (e) => {
  if (!isImageModalOpen.value) return
  if (e.key === 'Escape') closeImageModal()
  if (e.key === 'ArrowLeft') previousModalImage()
  if (e.key === 'ArrowRight') nextModalImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

watch(() => isImageModalOpen.value, (isOpen) => {
  if (isOpen) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

// SEO Meta tags
const updateMetaTags = () => {
  if (faq.value) {
    document.title = faq.value.seoTitle || faq.value.question
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', faq.value.seoDescription || faq.value.shortAnswer)
  }
}

watch(() => faq.value, updateMetaTags, { immediate: true })
onMounted(updateMetaTags)
</script>

<style scoped>
.prose :deep(h3) {
  @apply text-xl font-bold text-white mb-3 mt-6;
}

.prose :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4 text-slate-300;
}

.prose :deep(strong) {
  @apply text-white font-semibold;
}

.prose :deep(p) {
  @apply mb-4;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>