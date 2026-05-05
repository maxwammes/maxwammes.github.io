<script setup>
import DndAnimation from './DndAnimation.vue'
import LoadBubbleAnimation from './LoadBubbleAnimation.vue'
import ScrollDocAnimation from './ScrollDocAnimation.vue'
import SidebarAnimation from './SidebarAnimation.vue'
import ResizeAnimation from './ResizeAnimation.vue'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <template v-for="(section, i) in sections" :key="i">
    <!-- Cards section -->
    <section v-if="section.type === 'cards'" class="px-3 max-md:px-2" :style="i > 0 && sections[i - 1]?.type !== 'text' ? 'margin-top: 16px' : ''">
      <div
        class="max-w-[1416px] mx-auto"
        :class="{
          'grid grid-cols-1': section.layout === 'full',
          'grid grid-cols-2 gap-4 max-md:grid-cols-1': section.layout === 'grid-2',
          'grid grid-cols-3 gap-4 max-md:grid-cols-1': section.layout === 'grid-3',
        }"
      >
        <div
          v-for="(card, ci) in section.cards"
          :key="ci"
          class="rounded-[20px] overflow-hidden relative bg-[#f0f0f3]"
          :style="card.bg ? { backgroundColor: card.bg } : undefined"
        >
          <DndAnimation v-if="card.component === 'dnd'" />
          <SidebarAnimation v-else-if="card.component === 'sidebar'" />
          <ScrollDocAnimation v-else-if="card.component === 'scroll-doc'" />
          <LoadBubbleAnimation v-else-if="card.component === 'load-bubble'" />
          <template v-else>
            <div
              v-if="card.intrinsicWidth"
              class="flex items-center justify-center p-6 h-full"
              :style="card.aspect ? { aspectRatio: card.aspect } : undefined"
            >
              <img
                :src="card.src"
                alt=""
                :style="{ maxWidth: `${card.intrinsicWidth}px` }"
                class="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <img
              v-else
              :src="card.src"
              alt=""
              class="w-full h-auto block"
              loading="lazy"
            />
            <div
              v-if="card.overlay === 'resize'"
              class="absolute"
              style="left: 17.80%; top: 3.93%; width: 30.51%; aspect-ratio: 432 / 205"
            >
              <ResizeAnimation />
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Container + positioned content section -->
    <section v-else-if="section.type === 'container'" class="px-3 max-md:px-2" :style="i > 0 && sections[i - 1]?.type !== 'text' ? 'margin-top: 16px' : ''">
      <div
        class="reveal max-w-[1416px] mx-auto relative rounded-[20px] overflow-hidden bg-[#f0f0f3]"
        :style="{
          aspectRatio: section.containerW + ' / ' + section.containerH,
        }"
      >
        <img
          v-for="(content, ci) in section.contents"
          :key="ci"
          :src="content.src"
          alt=""
          class="absolute left-1/2 bottom-0 -translate-x-1/2 h-full w-auto"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Text section -->
    <section v-else class="reveal flex justify-center px-8 pt-14 pb-30 max-md:px-5">
      <div class="max-w-[904px] w-full">
        <div v-if="section.title" class="flex items-baseline justify-between mb-6 gap-4">
          <h2 class="text-xl font-semibold text-text-heading">
            {{ section.title }}
          </h2>
          <span v-if="section.year" class="text-base text-text whitespace-pre">
            {{ section.year }}
          </span>
        </div>
        <div class="flex flex-col gap-6">
          <p
            v-for="(paragraph, pi) in section.paragraphs"
            :key="pi"
            class="text-base text-text leading-7"
          >
            {{ paragraph }}
          </p>
        </div>
        <RouterLink
          v-if="section.slug"
          :to="`/projects/${section.slug}`"
          class="mt-10 inline-flex items-center gap-1 pl-3 pr-2 py-1 rounded-2xl bg-card text-base font-medium text-text-heading no-underline transition-colors w-fit hover:bg-[color-mix(in_srgb,var(--color-card)_88%,var(--color-text-heading))]"
        >
          View case study
          <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </template>
</template>
