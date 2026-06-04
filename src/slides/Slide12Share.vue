<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Portable" />
      <SlideHeader eyebrow="Portable" title="A script is just JSON — share and reuse" max-width="20ch" />
      <div class="share">
        <div class="jcard a-pop" style="--d:.22s">
          <div class="jh"><span>weather.json</span><span class="tag">export</span></div>
          <div class="jb">
            {<br>&nbsp;&nbsp;"name": "Weather+",<br>&nbsp;&nbsp;"schedule": "15m",<br>
            &nbsp;&nbsp;"source": "...",<br>&nbsp;&nbsp;"code": "..."<br>}
          </div>
        </div>
        <div class="xfer a-f" style="--d:.5s">
          <span class="xlbl">send</span>
          <div class="xline a-drawx" style="--d:.6s"></div>
          <span class="xlbl mono">→</span>
        </div>
        <div class="jcard a-pop" style="--d:.66s">
          <div class="jh"><span>import</span><span class="tag">add</span></div>
          <div class="jb" style="color:var(--text-dim)">
            Drop someone else's script into your Paul.<br><br>
            It runs on <span style="color:var(--accent)">your</span> machine,
            with <span style="color:var(--accent)">your</span> secrets.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
