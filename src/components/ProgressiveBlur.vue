<script setup>
defineProps({
  position: {
    type: String,
    default: 'top',
    validator: (v) => v === 'top' || v === 'bottom',
  },
})

// Each layer has a blur amount and a 4-stop mask that reveals a 25% wide
// horizontal band, overlapping the next band by 12.5% for a smooth blend.
// Layers are oriented so the heaviest blur lands at the bottom (100%);
// for the top strip we flip the whole element vertically.
const layers = [
  { blur: 0.5, stops: [0, 12.5, 25, 37.5] },
  { blur: 1, stops: [12.5, 25, 37.5, 50] },
  { blur: 2, stops: [25, 37.5, 50, 62.5] },
  { blur: 4, stops: [37.5, 50, 62.5, 75] },
  { blur: 8, stops: [50, 62.5, 75, 87.5] },
  { blur: 16, stops: [62.5, 75, 87.5, 100] },
  { blur: 24, stops: [75, 87.5, 100, 100] },
]

function maskFor(stops) {
  return `linear-gradient(to bottom, rgba(0,0,0,0) ${stops[0]}%, rgba(0,0,0,1) ${stops[1]}%, rgba(0,0,0,1) ${stops[2]}%, rgba(0,0,0,0) ${stops[3]}%)`
}
</script>

<template>
  <div
    class="pointer-events-none fixed left-0 right-0 z-50 h-[100px]"
    :class="position === 'top' ? 'top-0 -scale-y-100' : 'bottom-0'"
    aria-hidden="true"
  >
    <div
      v-for="(layer, i) in layers"
      :key="i"
      class="absolute inset-0"
      :style="{
        backdropFilter: `blur(${layer.blur}px)`,
        WebkitBackdropFilter: `blur(${layer.blur}px)`,
        maskImage: maskFor(layer.stops),
        WebkitMaskImage: maskFor(layer.stops),
      }"
    />
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-bg) 50%, transparent) 100%);"
    />
  </div>
</template>
