<script setup lang="ts">
defineProps<{ section: string }>()
</script>

<template>
  <div class="corner">Paul · <b>{{ section }}</b></div>
</template>
