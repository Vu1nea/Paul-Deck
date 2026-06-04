<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Out of the box" />
      <SlideHeader eyebrow="Out of the box" title="Built-in widgets" />
      <div class="cats">
        <div class="cat panel a-pop" style="--d:.18s">
          <div class="ch"><span class="ck2">Lifestyle</span><span class="cnt">Stay aware</span></div>
          <ul><li>Weather</li><li>RSS / news feed</li><li>Sports scores</li></ul>
        </div>
        <div class="cat panel a-pop" style="--d:.28s">
          <div class="ch"><span class="ck2">Productivity</span><span class="cnt">Stay on track</span></div>
          <ul><li>Calendar</li><li>Task list</li><li>Habit tracker</li></ul>
        </div>
        <div class="cat panel a-pop" style="--d:.38s">
          <div class="ch"><span class="ck2">Finance</span><span class="cnt">Stay funded</span></div>
          <ul><li>Stock / crypto ticker</li><li>Budget summary</li></ul>
        </div>
        <div class="cat panel a-pop" style="--d:.48s">
          <div class="ch"><span class="ck2">Dev / tech</span><span class="cnt">Stay running</span></div>
          <ul><li>GitHub activity</li><li>Server stats</li><li>Uptime monitor</li></ul>
        </div>
      </div>
    </div>
  </section>
</template>
