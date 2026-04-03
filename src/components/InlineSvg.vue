<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
})

const svgContent = ref('')
const wrapper = ref(null)

function restartAnimations() {
  if (!wrapper.value || document.hidden) return

  // Reset all CSS + Web Animations to t=0
  wrapper.value.getAnimations({ subtree: true }).forEach(anim => {
    anim.currentTime = 0
  })
}

// Convert SMIL <animate> elements to Web Animations API so they share
// the same timeline as CSS animations and stay in sync.
function convertSmilToWebAnimations(container) {
  const svg = container.querySelector('svg')
  if (!svg) return

  svg.querySelectorAll('animate').forEach(animate => {
    const target = animate.parentElement
    const attr = animate.getAttribute('attributeName')
    const values = animate.getAttribute('values')?.split(';')
    const keyTimes = animate.getAttribute('keyTimes')?.split(';').map(Number)
    const dur = parseFloat(animate.getAttribute('dur')) * 1000
    const keySplines = animate.getAttribute('keySplines')
      ?.split(';').map(s => s.trim()) || []

    if (!values || !keyTimes || !dur) return

    const needsUnits = ['x', 'y', 'width', 'height', 'rx', 'ry', 'cx', 'cy', 'r']
    const keyframes = values.map((v, i) => {
      const frame = { offset: keyTimes[i] }
      frame[attr] = needsUnits.includes(attr) ? v.trim() + 'px' : v.trim()
      if (i < keySplines.length) {
        const parts = keySplines[i].split(/\s+/).map(Number)
        frame.easing = `cubic-bezier(${parts.join(',')})`
      }
      return frame
    })

    target.animate(keyframes, {
      duration: dur,
      iterations: Infinity,
    })

    animate.remove()
  })
}

onMounted(async () => {
  const res = await fetch(props.src)
  const text = await res.text()
  // Strip XML declaration, replace fixed width/height with 100% so SVG fills container
  svgContent.value = text
    .replace(/<\?xml[^?]*\?>\s*/i, '')
    .replace(/<svg([^>]*)\swidth="[^"]*"/, '<svg$1 width="100%"')
    .replace(/<svg([^>]*)\sheight="[^"]*"/, '<svg$1 height="100%"')
    // Remove foreignObject blur overlays (Figma bg-blur export artefact)
    .replace(/<foreignObject[^>]*>.*?<\/foreignObject>/g, '')
    .replace(/<foreignObject[^>]*\/>/g, '')
    // XML namespace prefixes (ns2:href, xlink:href) aren't resolved by the HTML5 parser
    .replace(/\bns2:href=/g, 'href=')
    .replace(/\bxlink:href=/g, 'href=')

  await nextTick()
  convertSmilToWebAnimations(wrapper.value)

  document.addEventListener('visibilitychange', restartAnimations)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', restartAnimations)
})
</script>

<template>
  <div ref="wrapper" class="w-full h-full" v-html="svgContent" />
</template>
