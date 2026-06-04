<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { slides } from '../slides'
import { useDeck } from '../composables/useDeck'

const PANEL_W = 220

const { current, next, goto } = useDeck(slides.length)
const presenter = ref(false)
const winW = ref(window.innerWidth)
const winH = ref(window.innerHeight)
const panelRef = ref<HTMLElement>()

function updateWin() { winW.value = window.innerWidth; winH.value = window.innerHeight }

const scale = computed(() => {
  const w = presenter.value ? winW.value : winW.value - PANEL_W
  return Math.min(w / 1920, winH.value / 1080)
})

watch(current, async (i) => {
  await nextTick()
  const el = panelRef.value?.children[i] as HTMLElement
  el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
})

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
  window.addEventListener('resize', updateWin)
  window.addEventListener('keydown', onKey)
  document.addEventListener('fullscreenchange', onFullscreenChange)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWin)
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('fullscreenchange', onFullscreenChange)
})
</script>

<template>
  <div class="deck-root" :class="{ 'is-presenter': presenter }">

    <!-- Slide panel -->
    <aside v-show="!presenter" class="slide-panel" ref="panelRef" @click.stop>
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="thumb-item"
        :class="{ active: current === i }"
        @click="goto(i)"
      >
        <span class="thumb-num">{{ i + 1 }}</span>
        <div class="thumb-wrap">
          <div class="thumb-inner">
            <component :is="slide" />
          </div>
        </div>
      </div>
    </aside>

    <!-- Main stage -->
    <div class="deck-main" @click="next">
      <div class="deck-stage" :style="{ transform: `scale(${scale})` }">
        <component :is="slides[current]" :key="current" />
      </div>

      <div class="deck-ui" v-show="!presenter">
        <div class="deck-counter">{{ current + 1 }} / {{ slides.length }}</div>
      </div>

      <button v-if="!presenter" class="present-btn" @click.stop="enterPresenter">
        Present
      </button>
    </div>

  </div>
</template>

<style scoped>
.deck-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #000;
  overflow: hidden;
}

/* ── Slide panel ── */
.slide-panel {
  width: 220px;
  min-width: 220px;
  background: #08080a;
  border-right: 1px solid #1a1a1f;
  overflow-y: auto;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  scrollbar-width: thin;
  scrollbar-color: #2a2a30 transparent;
}

.thumb-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  border: 1.5px solid transparent;
  transition: border-color .15s;
}
.thumb-item:hover { border-color: #34343b; }
.thumb-item.active { border-color: #d4ff4f; }

.thumb-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #3a3a45;
  letter-spacing: .06em;
  padding-left: 2px;
}
.thumb-item.active .thumb-num { color: #d4ff4f; }

.thumb-wrap {
  width: 196px;
  height: 110px;
  overflow: hidden;
  border-radius: 3px;
  background: #0d0d0f;
  position: relative;
  flex-shrink: 0;
}
.thumb-inner {
  width: 1920px;
  height: 1080px;
  /* 196 / 1920 */
  transform: scale(0.10208);
  transform-origin: top left;
  pointer-events: none;
  user-select: none;
  contain: strict;
}

/* Base slide styles for thumbnail context (sections are child component roots
   and get the scoped attribute, but they're outside .deck-stage here) */
.thumb-inner :deep(section) {
  position: absolute;
  inset: 0;
  width: 1920px;
  height: 1080px;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-display);
  overflow: hidden;
}

/* ── Main stage area ── */
.deck-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.deck-stage {
  width: 1920px;
  height: 1080px;
  position: relative;
  transform-origin: center center;
  flex: none;
  background: #000;
  overflow: hidden;
}

.deck-stage section {
  position: absolute;
  inset: 0;
  width: 1920px;
  height: 1080px;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-display);
  overflow: hidden;
}

/* ── UI overlays ── */
.deck-ui {
  position: absolute;
  bottom: 20px;
  right: 24px;
  pointer-events: none;
  z-index: 100;
}

.deck-counter {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: .08em;
  color: rgba(255,255,255,.28);
  background: rgba(0,0,0,.5);
  padding: 5px 12px;
  border-radius: 20px;
}

.present-btn {
  position: absolute;
  bottom: 20px;
  left: 24px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.28);
  background: rgba(0,0,0,.5);
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
</style>
