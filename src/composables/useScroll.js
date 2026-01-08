import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour détecter le scroll de la page
 * 
 * @returns {Object} { isScrolled }
 */
export function useScroll() {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}
