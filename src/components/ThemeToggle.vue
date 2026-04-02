<script setup>
import { useDarkMode } from '../composables/useDarkMode.js'
const { mode, setMode } = useDarkMode()

const options = [
  { value: 'light', label: 'Light mode' },
  { value: 'dark', label: 'Dark mode' },
  { value: 'system', label: 'System setting' },
]
</script>

<template>
  <div class="flex rounded-full border border-border bg-surface p-0.5 gap-0.5">
    <button
      v-for="opt in options"
      :key="opt.value"
      @click="setMode(opt.value)"
      :aria-label="opt.label"
      class="size-8 flex items-center justify-center rounded-full transition-colors"
      :class="mode === opt.value ? 'bg-card-elevated shadow-[0px_1px_3px_0px_var(--color-shadow-strong)]' : 'text-text hover:text-text-heading hover:bg-black/5 dark:hover:bg-white/5'"
    >
      <!-- Sun -->
      <svg v-if="opt.value === 'light'" class="size-4" :class="mode === 'light' ? 'text-text-heading' : ''" viewBox="0 0 20 20" fill="none">
        <path d="M10 2.5V3.75M10 16.25V17.5M17.5 10H16.25M3.75 10H2.5M15.3 4.7L14.42 5.58M5.58 14.42L4.7 15.3M15.3 15.3L14.42 14.42M5.58 5.58L4.7 4.7M13.75 10a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Monitor -->
      <svg v-else-if="opt.value === 'system'" class="size-4" :class="mode === 'system' ? 'text-text-heading' : ''" viewBox="0 0 20 20" fill="none">
        <path d="M3.33 3.75h13.34c.92 0 1.66.74 1.66 1.67v7.5c0 .92-.74 1.66-1.66 1.66H3.33c-.92 0-1.66-.74-1.66-1.66v-7.5c0-.93.74-1.67 1.66-1.67ZM7.5 16.25h5M10 14.58v1.67" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Moon -->
      <svg v-else class="size-4" :class="mode === 'dark' ? 'text-text-heading' : ''" viewBox="0 0 20 20" fill="none">
        <path d="M17.09 11.18A7.5 7.5 0 0 1 8.82 2.91a7.5 7.5 0 1 0 8.27 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>
