<template>
  <div class="relative w-full" style="aspect-ratio: 700 / 560">
    <div
      class="absolute overflow-visible"
      :style="{
        left: (90 / 700 * 100) + '%',
        top: (188 / 560 * 100) + '%',
        width: (520 / 700 * 100) + '%',
        aspectRatio: '520 / 184',
      }"
    >
      <!-- Static background: Jonathan + Robin rows -->
      <img src="/images/projects/dnd-bg.png" alt="" class="absolute inset-0 w-full h-full" />

      <!-- Top blue indicator: y=63, visible in state 1 -->
      <div class="dnd-indicator-top absolute left-0 w-full" style="top: 34.24%; height: 1.09%; background: #0b84e3" />
      <!-- Bottom blue indicator: y=119, visible in state 2 -->
      <div class="dnd-indicator-bottom absolute left-0 w-full" style="top: 64.67%; height: 1.09%; background: #0b84e3" />

      <!-- Floating Max card: exported 540x76 (frame 520x56 + 10px shadow bleed) -->
      <img
        src="/images/projects/dnd-card.png"
        alt=""
        class="dnd-card absolute"
        style="width: 103.85%"
      />

      <!-- Grab cursor: 20x20 -->
      <img
        src="/images/projects/dnd-cursor.png"
        alt=""
        class="dnd-cursor absolute"
        style="width: 3.85%; aspect-ratio: 1"
      />
    </div>
  </div>
</template>

<style scoped>
.dnd-indicator-top {
  animation: indicator-top 5.6s ease-in-out infinite;
}

.dnd-indicator-bottom {
  animation: indicator-bottom 5.6s ease-in-out infinite;
}

.dnd-card {
  animation: card 5.6s ease-in-out infinite;
}

.dnd-cursor {
  animation: cursor 5.6s ease-in-out infinite;
}

@keyframes indicator-top {
  0%, 35.71%  { opacity: 0; }
  50%, 85.71% { opacity: 1; }
  100%        { opacity: 0; }
}

@keyframes indicator-bottom {
  0%, 35.71%  { opacity: 1; }
  50%, 85.71% { opacity: 0; }
  100%        { opacity: 1; }
}

/* card frame pos -44,48 → 16,83 but export has 10px shadow bleed, so -54,38 → 6,73 */
@keyframes card {
  0%, 35.71%  { left: -10.38%; top: 20.65%; }  /* -54/520, 38/184 */
  50%, 85.71% { left: 1.15%;   top: 39.67%; }  /* 6/520,   73/184 */
  100%        { left: -10.38%; top: 20.65%; }
}

/* cursor: 115,66 → 175,101 */
@keyframes cursor {
  0%, 35.71%  { left: 22.12%; top: 35.87%; }
  50%, 85.71% { left: 33.65%; top: 54.89%; }
  100%        { left: 22.12%; top: 35.87%; }
}
</style>
