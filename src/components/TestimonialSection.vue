<script setup>
defineProps({
  testimonials: Array,
})
</script>

<template>
  <section class="reveal px-3 max-md:px-2">
    <div class="bg-card rounded-[20px] p-20 max-md:p-8 max-w-[1416px] mx-auto">
      <div class="grid grid-cols-1 min-[960px]:grid-cols-2 gap-4 mx-auto">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="reveal flex flex-col gap-10 bg-card-elevated border border-border rounded-[30px] shadow-[0px_4px_9px_0px_var(--color-shadow)] p-10"
          :class="`reveal-delay-${i + 1}`"
        >
          <p class="flex-1 text-[19px] text-text-heading leading-[30px] opacity-90 whitespace-pre-line">
            "{{ t.quote }}"
          </p>
          <div class="flex items-center gap-3">
            <div class="relative size-10 shrink-0 rounded-full overflow-hidden ring-1 ring-inset ring-black/10 dark:ring-white/10">
              <img
                :src="t.photo"
                :alt="t.name"
                class="size-full object-cover scale-[1.45] translate-y-[8%]"
                loading="lazy"
              />
            </div>
            <div>
              <p class="text-base font-medium text-text-name">{{ t.name }}</p>
              <p class="text-base text-text">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
