import { ref, onMounted, onUnmounted } from 'vue'

export function useDeck(total: number) {
  const current = ref(0)

  function next() { if (current.value < total - 1) current.value++ }
  function prev() { if (current.value > 0) current.value-- }
  function goto(i: number) { current.value = Math.max(0, Math.min(total - 1, i)) }

  function onKey(e: KeyboardEvent) {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next() }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
  }

  onMounted(() => window.addEventListener('keydown', onKey))
  onUnmounted(() => window.removeEventListener('keydown', onKey))

  return { current, next, prev, goto }
}
