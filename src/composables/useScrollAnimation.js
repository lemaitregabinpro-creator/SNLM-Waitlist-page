import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour détecter la visibilité d'un élément au scroll
 * Équivalent du hook React useScrollAnimation
 * 
 * @returns {Object} { isVisible, domRef }
 */
export function useScrollAnimation() {
  const isVisible = ref(false)
  const domRef = ref(null)

  onMounted(() => {
    if (!domRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    )

    observer.observe(domRef.value)

    onUnmounted(() => {
      if (domRef.value) {
        observer.unobserve(domRef.value)
      }
    })
  })

  return { isVisible, domRef }
}
