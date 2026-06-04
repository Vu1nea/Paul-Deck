import { ref, onMounted, onUnmounted } from 'vue'

export function useDeck(total: number) {
  const current = ref(0)
  const scale = ref(1)

  function updateScale() {
    scale.value = Math.min(window.innerWidth / 1920, window.innerHeight / 1080)
  }

  function next() { if (current.value < total - 1) current.value++ }
  function prev() { if (current.value > 0) current.value-- }

  function onKey(e: KeyboardEvent) {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next() }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
  }

  onMounted(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    window.addEventListener('keydown', onKey)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScale)
    window.removeEventListener('keydown', onKey)
  })

  return { current, scale, next, prev }
}
