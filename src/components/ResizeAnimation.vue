<template>
  <!-- Blue selection box that resizes -->
  <div class="resize-box absolute border-2 border-[#0099ff] rounded-[4px]" />
  <!-- Cursor follows bottom-right corner -->
  <img src="/images/projects/resize-cursor.png" alt="" class="resize-cursor absolute" style="width: 4.63%; aspect-ratio: 1" />
</template>

<style scoped>
/*
  Component: 432x205 within container 1416x560
  Positioned at left:17.80% top:3.93% width:30.51%

  Blue box anchored at top-left (0,0), resizes:
    State 1: 220x186 → 50.93% x 90.73%
    State 2: 420x156 → 97.22% x 76.10%

  Cursor follows bottom-right corner:
    State 1: (213, 184) → 49.31%, 89.76%
    State 2: (415, 154) → 96.06%, 75.12%

  Timing: 2s hold → 1.2s animate → 1.2s hold → 0.8s animate = 5.2s
    0%–38.46%: state 1
    61.54%–84.62%: state 2
*/

.resize-box {
  left: 0;
  top: 0;
  animation: resize-box 5.2s ease-in-out infinite;
}

.resize-cursor {
  animation: resize-cursor 5.2s ease-in-out infinite;
}

@keyframes resize-box {
  0%, 38.46%    { width: 50.93%; height: 90.73%; }
  61.54%, 84.62% { width: 97.22%; height: 76.10%; }
  100%           { width: 50.93%; height: 90.73%; }
}

@keyframes resize-cursor {
  0%, 38.46%    { left: 49.31%; top: 89.76%; }
  61.54%, 84.62% { left: 96.06%; top: 75.12%; }
  100%           { left: 49.31%; top: 89.76%; }
}
</style>
