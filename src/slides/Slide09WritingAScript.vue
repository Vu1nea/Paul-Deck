<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="Author" />
      <SlideHeader eyebrow="Author" title="Writing a script" />
      <div class="cols" style="grid-template-columns:1.42fr 0.58fr; gap:44px; margin-top:40px">
        <div class="editor a-pop" style="--d:.2s">
          <div class="ed-bar">
            <span class="tab"><span class="accent">{ }</span>&nbsp; stars.ts</span>
            <span class="run">▶ Run now</span>
          </div>
          <div class="code">
            <div class="ln"><span><span class="c-com">// fetch this repo's star count</span></span></div>
            <div class="ln"><span><span class="c-key">export async function</span> <span class="c-fn">run</span><span class="c-pl">(ctx) {</span></span></div>
            <div class="ln"><span><span class="c-pl">&nbsp;&nbsp;</span><span class="c-key">const</span> <span class="c-pl">token = ctx.</span><span class="c-fn">secrets</span><span class="c-pl">(</span><span class="c-str">"GH_TOKEN"</span><span class="c-pl">);</span></span></div>
            <div class="ln"><span><span class="c-pl">&nbsp;&nbsp;</span><span class="c-key">const</span> <span class="c-pl">r =</span> <span class="c-key">await</span> <span class="c-fn">fetch</span><span class="c-pl">(api, { token });</span></span></div>
            <div class="ln"><span><span class="c-pl">&nbsp;&nbsp;</span><span class="c-key">const</span> <span class="c-pl">d =</span> <span class="c-key">await</span> <span class="c-pl">r.</span><span class="c-fn">json</span><span class="c-pl">();</span></span></div>
            <div class="ln"><span><span class="c-pl">&nbsp;&nbsp;</span><span class="c-key">return</span> <span class="c-pl">{ stars: d.</span><span class="c-fn">stargazers_count</span> <span class="c-pl">};</span></span></div>
            <div class="ln"><span><span class="c-pl">}</span></span></div>
          </div>
        </div>
        <div class="out a">
          <div class="oh a-s" style="--d:.4s">Output</div>
          <div class="json a-s" style="--d:.48s">{ <span class="c-fn">"stars"</span>: <span class="c-num">2841</span> }</div>
          <div class="arrowdown a-f" style="--d:.62s">↓</div>
          <div class="rwidget a-pop" style="--d:.72s">
            <div class="rh">Repo stars</div>
            <div class="rv">2,841</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
