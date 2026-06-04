<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Ownership" />
      <SlideHeader eyebrow="Ownership" title="Self-hosted by design" />
      <div class="own">
        <h3 class="huge a" style="--d:.2s">Your data never<br>leaves <span class="hl">your machine.</span></h3>
        <div class="opts">
          <div class="opt a-s" style="--d:.34s">
            <div class="ok">Local</div>
            <div class="ot">Runs entirely on your own hardware.</div>
          </div>
          <div class="opt a-s" style="--d:.44s">
            <div class="ok">No cloud</div>
            <div class="ot">No account, no external dependency.</div>
          </div>
          <div class="opt a-s" style="--d:.54s">
            <div class="ok">One file</div>
            <div class="ot">Everything stored in a local SQLite database.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
