<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="The model" />
      <SlideHeader eyebrow="The model" title="How Paul works" />
      <div class="flow">
        <div class="node a-pop" style="--d:.2s">
          <span class="nk">Source</span>
          <span class="nv">Any API</span>
          <span class="ns">REST · RSS · scrape</span>
        </div>
        <div class="conn"><div class="fill a-drawx" style="--d:.42s"></div></div>
        <div class="node hot a-pop" style="--d:.5s">
          <span class="nk">Script</span>
          <span class="nv">TypeScript</span>
          <span class="ns">fetch + aggregate</span>
        </div>
        <div class="conn"><div class="fill a-drawx" style="--d:.72s"></div></div>
        <div class="node a-pop" style="--d:.8s">
          <span class="nk">Output</span>
          <span class="nv">JSON</span>
          <span class="ns">stored &amp; served</span>
        </div>
        <div class="conn">
          <div class="fill a-drawx" style="--d:1.02s"></div>
          <div class="bead a-travel" style="left:0"></div>
        </div>
        <div class="node a-pop" style="--d:1.1s">
          <span class="nk">Render</span>
          <span class="nv">Widget</span>
          <span class="ns">on your grid</span>
        </div>
      </div>
      <p class="flow-cap a-f" style="--d:1.3s">
        Scripts run server-side on a schedule. <b>One script's output can feed many widgets.</b>
      </p>
    </div>
  </section>
</template>
