<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
})

const svgContent = ref('')
const wrapper = ref(null)

function restartAnimations() {
  if (!wrapper.value || document.hidden) return

  // Reset all CSS animations to t=0
  wrapper.value.getAnimations({ subtree: true }).forEach(anim => {
    anim.currentTime = 0
  })

  // Reset SMIL animations to t=0
  const svg = wrapper.value.querySelector('svg')
  if (svg?.setCurrentTime) {
    svg.setCurrentTime(0)
  }
}

onMounted(async () => {
  const res = await fetch(props.src)
  const text = await res.text()
  // Strip XML declaration, replace fixed width/height with 100% so SVG fills container
  svgContent.value = text
    .replace(/<\?xml[^?]*\?>\s*/i, '')
    .replace(/<svg([^>]*)\swidth="[^"]*"/, '<svg$1 width="100%"')
    .replace(/<svg([^>]*)\sheight="[^"]*"/, '<svg$1 height="100%"')
    // HTML5 parser treats self-closing non-void tags as open tags;
    // expand <html:div .../> → <div ...></div> so foreignObject content parses correctly
    .replace(/<html:div([^/]*)\/>/g, '<div$1></div>')
    // XML namespace prefixes (ns2:href, xlink:href) aren't resolved by the HTML5 parser
    .replace(/\bns2:href=/g, 'href=')
    .replace(/\bxlink:href=/g, 'href=')

  document.addEventListener('visibilitychange', restartAnimations)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', restartAnimations)
})
</script>

<template>
  <div ref="wrapper" class="w-full h-full" v-html="svgContent" />
</template>
