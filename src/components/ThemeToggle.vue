<script setup>
import { computed } from 'vue'
import { useDarkMode } from '../composables/useDarkMode.js'
const { mode, setMode } = useDarkMode()

const isDark = computed(() => mode.value === 'dark')
const label = computed(() => isDark.value ? 'Switch to light mode' : 'Switch to dark mode')

function toggle() {
  setMode(isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <div class="flex rounded-full border border-border bg-surface p-0.5">
    <div class="relative group/tip">
      <button
        @click="toggle"
        :aria-label="label"
        class="size-8 flex items-center justify-center rounded-full text-text cursor-pointer transition-colors hover:text-text-heading hover:bg-black/5 dark:hover:bg-white/5"
      >
        <!-- Sun (shown in dark mode) -->
        <svg v-if="isDark" class="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 2.5V3.75M10 16.25V17.5M17.5 10H16.25M3.75 10H2.5M15.3 4.7L14.42 5.58M5.58 14.42L4.7 15.3M15.3 15.3L14.42 14.42M5.58 5.58L4.7 4.7M13.75 10a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <!-- Moon (shown in light mode) -->
        <svg v-else class="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M17.09 11.18A7.5 7.5 0 0 1 8.82 2.91a7.5 7.5 0 1 0 8.27 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <span class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2.5 py-1 rounded-lg bg-text-heading text-bg text-xs whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity delay-0 group-hover/tip:delay-[2000ms]">
        {{ label }}
      </span>
    </div>
  </div>
</template>
