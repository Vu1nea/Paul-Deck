<script setup lang="ts">
import { slides } from '../slides'
import { useDeck } from '../composables/useDeck'

const { current, scale, next } = useDeck(slides.length)
</script>

<template>
  <div class="deck-outer" @click="next">
    <div class="deck-stage" :style="{ transform: `scale(${scale})` }">
      <component :is="slides[current]" :key="current" />
    </div>
    <div class="deck-ui">
      <div class="deck-counter">{{ current + 1 }} / {{ slides.length }}</div>
    </div>
  </div>
</template>
