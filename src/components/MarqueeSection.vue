<script setup>
const illustrations = [
  '/images/projects/illustration-problem.png',
  '/images/projects/illustration-chat.png',
  '/images/projects/illustration-notification.png',
]
</script>

<template>
  <section class="reveal px-3 max-md:px-2" style="margin-top: 16px">
    <div class="max-w-[1416px] mx-auto rounded-[20px] bg-[#f0f0f3] overflow-hidden">
      <div class="marquee-track flex gap-[40px]">
        <img
          v-for="(src, i) in [...illustrations, ...illustrations, ...illustrations, ...illustrations]"
          :key="i"
          :src="src"
          alt=""
          class="shrink-0 w-[320px] h-[320px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee-scroll 10s linear infinite;
  width: max-content;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-360px * 3));
  }
}
</style>
