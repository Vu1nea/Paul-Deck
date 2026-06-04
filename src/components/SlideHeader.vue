<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  maxWidth?: string
}>()
</script>

<template>
  <div class="head">
    <div class="eyebrow a-s">{{ eyebrow }}</div>
    <h2 class="title a" :style="`--d:.08s${maxWidth ? ';max-width:' + maxWidth : ''}`">{{ title }}</h2>
  </div>
</template>
