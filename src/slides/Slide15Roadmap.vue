<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Roadmap" />
      <SlideHeader eyebrow="Roadmap" title="The roadmap" />
      <div class="road">
        <div class="phase p1 a" style="--d:.2s">
          <div class="track"><i class="a-drawx" style="--d:.4s"></i></div>
          <span class="status">Shipped</span>
          <div class="pk">Crawl</div>
          <h3 class="pname">MVP</h3>
          <div class="pwhen">Weeks 1 – 12</div>
          <p class="pd">A running, usable dashboard: grid, persistence, first real widgets. Daily personal use.</p>
        </div>
        <div class="phase p2 a" style="--d:.34s">
          <div class="track"><i class="a-drawx" style="--d:.55s"></i></div>
          <span class="status">In progress</span>
          <div class="pk">Walk</div>
          <h3 class="pname">Scripting core</h3>
          <div class="pwhen">Weeks 13 – 26</div>
          <p class="pd">The differentiator: data-source model, sandboxed runner, Monaco editor, secrets store.</p>
        </div>
        <div class="phase p3 a" style="--d:.48s">
          <div class="track"><i class="a-drawx" style="--d:.7s"></i></div>
          <span class="status">Next</span>
          <div class="pk">Run</div>
          <h3 class="pname">Library &amp; polish</h3>
          <div class="pwhen">Week 27 +</div>
          <p class="pd">Remaining built-in widgets, script import / export, responsive polish, optional auth.</p>
        </div>
      </div>
    </div>
  </section>
</template>
