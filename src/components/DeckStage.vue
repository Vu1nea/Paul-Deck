<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { slides } from '../slides'
import { useDeck } from '../composables/useDeck'

const { current, scale, next } = useDeck(slides.length)
const presenter = ref(false)

function enterPresenter() {
  presenter.value = true
  document.documentElement.requestFullscreen?.().catch(() => {})
}

function exitPresenter() {
  presenter.value = false
  if (document.fullscreenElement) document.exitFullscreen?.()
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && presenter.value) exitPresenter()
}

function onFullscreenChange() {
  if (!document.fullscreenElement && presenter.value) presenter.value = false
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  document.addEventListener('fullscreenchange', onFullscreenChange)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
})
</script>

<template>
  <div class="deck-outer" :class="{ 'is-presenter': presenter }" @click="next">
    <div class="deck-stage" :style="{ transform: `scale(${scale})` }">
      <component :is="slides[current]" :key="current" />
    </div>
    <div class="deck-ui">
      <div class="deck-counter">{{ current + 1 }} / {{ slides.length }}</div>
    </div>
    <button
      v-if="!presenter"
      class="present-btn"
      @click.stop="enterPresenter"
      title="Enter presenter mode"
    >
      Present
    </button>
  </div>
</template>

<style scoped>
.present-btn {
  position: fixed;
  bottom: 20px;
  left: 24px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.28);
  background: rgba(0,0,0,.5);
  /* background-color: red; */
  border: 1px solid rgba(255,255,255,.1);
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 100;
  transition: color .2s, border-color .2s;
}
.present-btn:hover {
  color: rgba(255,255,255,.7);
  border-color: rgba(255,255,255,.25);
}

.is-presenter .deck-ui {
  display: none;
}
</style>
