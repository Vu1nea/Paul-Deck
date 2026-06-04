<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Overview" />
      <SlideHeader eyebrow="Overview" title="One place for the information that matters to you" max-width="22ch" />
      <div class="pillars">
        <div class="pillar panel a-pop" style="--d:.18s">
          <div class="pn">01</div>
          <h3 class="ph">Yours</h3>
          <p class="pb">Runs on your own machine. No cloud, no account — everything stays local.</p>
        </div>
        <div class="pillar panel a-pop" style="--d:.3s">
          <div class="pn">02</div>
          <h3 class="ph">Composable</h3>
          <p class="pb">A drag-and-drop grid of widgets, arranged and resized exactly the way you want.</p>
        </div>
        <div class="pillar panel a-pop" style="--d:.42s">
          <div class="pn">03</div>
          <h3 class="ph">Programmable</h3>
          <p class="pb">Write a script to fetch from any source and render the result as a widget.</p>
        </div>
      </div>
    </div>
  </section>
</template>
