<template>
  <!-- Container: 461x560 gray card -->
  <div class="relative w-full" style="aspect-ratio: 461 / 560">
    <!-- Scroll viewport at x:65, y:56 within 461x560, size 330x504 -->
    <div
      class="absolute overflow-hidden rounded-[12px]"
      style="left: 14.1%; top: 10%; width: 71.6%; height: 90%"
    >
      <!-- Full tall content (330x557 at 1x) scrolling vertically -->
      <img
        src="/images/projects/scroll-full.png"
        alt=""
        class="scroll-content absolute left-0 top-0 w-full"
        style="height: 110.5%"
      />
      <!-- Fixed header overlay -->
      <div class="absolute top-0 left-0 w-full z-10" style="height: 12.7%; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px)">
        <img src="/images/projects/scroll-full.png" alt="" class="w-full" style="height: 870%" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-content {
  animation: scroll-y 7.6s ease-in-out infinite;
}
@keyframes scroll-y {
  0%, 10.53%     { transform: translateY(0); }
  63.16%, 73.68% { transform: translateY(-9.5%); }
  100%           { transform: translateY(0); }
}
</style>
