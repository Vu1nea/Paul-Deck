<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Security" />
      <SlideHeader eyebrow="Security" title="Secrets, kept local" />
      <div class="cols tight" style="align-items:center">
        <div class="a">
          <p class="lead a-s" style="--d:.18s; max-width:20ch; margin-bottom:40px">
            API keys live in an encrypted local store. Scripts read them through a helper — never hard-coded.
          </p>
          <p class="snipline a-s" style="--d:.3s">
            <span class="c-key">const</span> token = ctx.<span class="c-fn">secrets</span>(<span class="c-str">"GH_TOKEN"</span>);
          </p>
        </div>
        <div class="vault panel a-pop" style="--d:.34s">
          <div class="vrow"><span class="lock"></span><span class="vk">GH_TOKEN</span><span class="vv">••••••••••3f9a</span></div>
          <div class="vrow"><span class="lock"></span><span class="vk">OPENWEATHER_KEY</span><span class="vv">••••••••••b1c4</span></div>
          <div class="vrow"><span class="lock"></span><span class="vk">STRIPE_SECRET</span><span class="vv">••••••••••7e22</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
