<template>
  <!-- Container: 461x560 gray card -->
  <div class="relative w-full" style="aspect-ratio: 461 / 560">
    <!-- Content at x:66, y:56 within 461x560, size 330x629 -->
    <div
      class="absolute overflow-hidden rounded-[12px]"
      style="left: 14.3%; top: 10%; width: 71.6%; height: 112.3%"
    >
      <img src="/images/projects/sidebar-v1.png" alt="" class="sv1 absolute inset-0 w-full h-full" />
      <img src="/images/projects/sidebar-v2.png" alt="" class="sv2 absolute inset-0 w-full h-full" />
      <img src="/images/projects/sidebar-v3.png" alt="" class="sv3 absolute inset-0 w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
.sv1 { animation: sv1 4.5s ease-in-out infinite; }
.sv2 { animation: sv2 4.5s ease-in-out infinite; }
.sv3 { animation: sv3 4.5s ease-in-out infinite; }

@keyframes sv1 {
  0%, 17.78%     { opacity: 1; }
  24.44%, 93.33% { opacity: 0; }
  100%           { opacity: 1; }
}
@keyframes sv2 {
  0%, 17.78%     { opacity: 0; }
  24.44%, 68.89% { opacity: 1; }
  75.56%, 100%   { opacity: 0; }
}
@keyframes sv3 {
  0%, 68.89%     { opacity: 0; }
  75.56%, 93.33% { opacity: 1; }
  100%           { opacity: 0; }
}
</style>
