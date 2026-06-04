<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Configuration" />
      <SlideHeader eyebrow="Configuration" title="Widget configuration" />
      <div class="cols tight" style="align-items:center">
        <p class="lead a" style="--d:.18s; max-width:19ch">
          Every widget configures inline. Settings save
          <em style="color:var(--text); font-style:normal">per instance</em>
          — run two Weather widgets for two cities at once.
        </p>
        <div class="stage7">
          <div class="modal a-pop" style="--d:.3s">
            <div class="mh"><span class="mt">Weather — settings</span><span class="x mono">✕</span></div>
            <div class="mb">
              <div class="field"><label>City</label><div class="inp">Berlin, DE</div></div>
              <div class="field">
                <label>Units</label>
                <div class="seg"><span class="on">°C</span><span>°F</span></div>
              </div>
              <div class="mfoot"><span class="btn ghost">Cancel</span><span class="btn go">Save</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
