<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="The problem" />
      <SlideHeader eyebrow="The problem" title="The limits of fixed dashboards" max-width="16ch" />
      <div class="cols tight">
        <p class="lead a" style="--d:.18s; max-width:20ch">
          Most dashboards ship a fixed menu of integrations. The data you actually care about never fits the list.
        </p>
        <div class="src-card panel a-pop" style="--d:.28s">
          <p class="ttl"><span>Available integrations</span><span>12</span></p>
          <div class="src-row"><span class="dotsq"></span><span class="nm">Weather</span><span class="badge">Built in</span></div>
          <div class="src-row"><span class="dotsq"></span><span class="nm">Stock ticker</span><span class="badge">Built in</span></div>
          <div class="src-row locked"><span class="dotsq off"></span><span class="nm">Your team's internal API</span><span class="badge">Unavailable</span></div>
          <div class="src-row locked"><span class="dotsq off"></span><span class="nm">That one niche data source</span><span class="badge">Unavailable</span></div>
          <div class="src-row want"><span class="dotsq want"></span><span class="nm">Anything you can script</span><span class="badge">Paul</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
