<template>
  <section class="py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <FadeInSection>
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 break-words">
            Avant / Après
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto break-words">
            Voyez la différence : de la présentation signée NotebookLM à la présentation professionnelle sans filigrane
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <!-- Comparaison 1 -->
          <FadeInSection delay="100ms">
            <div class="flex flex-col">
              <ImageComparison
                before-image="/beforeafter/before.png"
                after-image="/beforeafter/after.png"
                label="Comparaison 1 : Présentation avec et sans filigrane NotebookLM"
              />
              <div class="mt-4">
                <PreferenceFeedback category="beforeafter" item-id="Comparaison-1" />
              </div>
            </div>
          </FadeInSection>

          <!-- Comparaison 2 -->
          <FadeInSection delay="200ms">
            <div class="flex flex-col">
              <ImageComparison
                before-image="/beforeafter/before2.png"
                after-image="/beforeafter/after2.png"
                label="Comparaison 2 : Présentation avec et sans filigrane NotebookLM"
              />
              <div class="mt-4">
                <PreferenceFeedback category="beforeafter" item-id="Comparaison-2" />
              </div>
            </div>
          </FadeInSection>
        </div>

        <div class="mt-8 text-center">
          <p class="text-slate-500 text-sm">
            Suppression automatique du filigrane en <strong class="text-yellow-400">moins de 10 secondes</strong>
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
</template>

<script setup>
import FadeInSection from '@/components/ui/FadeInSection.vue'
import PreferenceFeedback from '@/components/ui/PreferenceFeedback.vue'
import ImageComparison from '@/components/ui/ImageComparison.vue'
</script>
