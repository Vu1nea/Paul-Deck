<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Execution" />
      <SlideHeader eyebrow="Execution" title="From script to widget" />
      <div class="pipe">
        <div class="step a" style="--d:.2s">
          <span class="sidx">01</span>
          <h3 class="sh">Schedule</h3>
          <p class="sd">Runs on a cron-style interval, or on demand.</p>
          <p class="scode">every 15m</p>
        </div>
        <div class="step a" style="--d:.32s">
          <span class="sidx">02</span>
          <h3 class="sh">Run</h3>
          <p class="sd">Executes server-side in a sandboxed Node vm.</p>
          <p class="scode">vm.runInContext()</p>
        </div>
        <div class="step a" style="--d:.44s">
          <span class="sidx">03</span>
          <h3 class="sh">Store</h3>
          <p class="sd">JSON output is cached in the local database.</p>
          <p class="scode">→ sqlite</p>
        </div>
        <div class="step a" style="--d:.56s">
          <span class="sidx">04</span>
          <h3 class="sh">Render</h3>
          <p class="sd">A Script Widget reads the latest output and draws it.</p>
          <p class="scode">&lt;ScriptWidget/&gt;</p>
        </div>
      </div>
    </div>
  </section>
</template>
