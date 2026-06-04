<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Dashboard" />
      <SlideHeader eyebrow="Dashboard" title="The dashboard grid" />
      <div class="cols tight" style="gap:70px">
        <div class="feat a">
          <div class="fi" style="--d:.2s">
            <span class="fn">01</span>
            <div><p class="ft">Drag, drop, resize</p><p class="fd">Move and size widgets freely on a responsive grid.</p></div>
          </div>
          <div class="fi" style="--d:.32s">
            <span class="fn">02</span>
            <div><p class="ft">Layouts persist</p><p class="fd">Arrangements save to a local SQLite database across restarts.</p></div>
          </div>
          <div class="fi" style="--d:.44s">
            <span class="fn">03</span>
            <div><p class="ft">Add or remove anytime</p><p class="fd">Build the view you need; strip out what you don't.</p></div>
          </div>
        </div>
        <div class="dash a-pop" style="--d:.3s">
          <div class="w a-pop" style="--d:.4s"><div class="wh"><span>Weather</span><span class="grip">⠿</span></div><div class="big">14°</div><div class="sub">Berlin · cloudy</div></div>
          <div class="w a-pop" style="--d:.48s"><div class="wh"><span>AAPL</span><span class="grip">⠿</span></div><div class="big">214.3</div><div class="sub">+1.8% today</div></div>
          <div class="w acc a-pop" style="--d:.56s"><div class="wh"><span>Uptime</span><span class="grip">⠿</span></div><div class="big">99.9%</div><div class="sub">30-day</div></div>
          <div class="w span2 a-pop" style="--d:.64s">
            <div class="wh"><span>GitHub activity</span><span class="grip">⠿</span></div>
            <div class="gh">
              <i></i><i class="l1"></i><i class="l2"></i><i></i><i class="l3"></i><i class="l1"></i>
              <i class="l2"></i><i class="l3"></i><i></i><i class="l1"></i><i class="l2"></i><i></i>
              <i class="l1"></i><i class="l3"></i><i class="l2"></i><i class="l1"></i><i></i><i class="l3"></i>
              <i class="l2"></i><i class="l1"></i><i class="l3"></i><i></i><i class="l1"></i><i class="l2"></i>
            </div>
          </div>
          <div class="w a-pop" style="--d:.72s">
            <div class="wh"><span>Tasks</span><span class="grip">⠿</span></div>
            <div class="ck done"><span class="bx"></span>Ship grid</div>
            <div class="ck"><span class="bx"></span>Wire scripts</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
