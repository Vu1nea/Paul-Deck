<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Under the hood" />
      <SlideHeader eyebrow="Under the hood" title="Tech stack" />
      <table class="tbl">
        <tbody>
          <tr class="a-s" style="--d:.18s"><td class="k">Frontend</td><td class="v">React + Vite <span>· react-grid-layout · TypeScript</span></td></tr>
          <tr class="a-s" style="--d:.26s"><td class="k">Backend</td><td class="v">Node + Express <span>· TypeScript</span></td></tr>
          <tr class="a-s" style="--d:.34s"><td class="k">Script editor</td><td class="v">Monaco Editor <span>· in-browser</span></td></tr>
          <tr class="a-s" style="--d:.42s"><td class="k">Database</td><td class="v">SQLite <span>· better-sqlite3</span></td></tr>
          <tr class="a-s" style="--d:.5s"><td class="k">Deployment</td><td class="v">Docker + Compose <span>· one command</span></td></tr>
          <tr class="a-s" style="--d:.58s"><td class="k">Host</td><td class="v">Windows + WSL <span>· local</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
