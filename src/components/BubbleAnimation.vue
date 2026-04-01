<template>
  <!-- Container: 461x560 gray card -->
  <div class="relative w-full" style="aspect-ratio: 461 / 560">
    <!-- White bubble card positioned in the lower center of gray container -->
    <div
      class="absolute"
      style="left: 14.3%; bottom: 12%; width: 71.6%"
    >
      <!-- Base state (v1: 2 files, second one loading) -->
      <div class="bubble-base relative">
        <img
          src="/images/projects/bubble-base.png"
          alt=""
          class="w-full h-auto block"
        />
        <!-- Spinner overlay on the loading thumbnail (second row, left side) -->
        <div
          class="absolute flex items-center justify-center"
          style="left: 2.3%; top: 19.5%; width: 8%; height: 15.5%"
        >
          <div class="spinner" />
        </div>
      </div>

      <!-- Final state (v3: 3 files, all loaded) -->
      <img
        src="/images/projects/bubble-final.png"
        alt=""
        class="bubble-final absolute top-0 left-0 w-full h-auto"
      />
    </div>
  </div>
</template>

<style scoped>
/*
  V1 shows for 1.3s with spinner, then instant swap to V3 for 3.2s = 4.5s total
  1.3/4.5 = 28.89%
*/

.bubble-base {
  animation: base 4.5s step-end infinite;
}

.bubble-final {
  animation: final 4.5s step-end infinite;
}

@keyframes base {
  0%      { opacity: 1; }
  28.89%  { opacity: 0; }
}

@keyframes final {
  0%      { opacity: 0; }
  28.89%  { opacity: 1; }
}

.spinner {
  width: 75%;
  aspect-ratio: 1;
  border: 2px solid #e1e3e5;
  border-top-color: #70767b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
