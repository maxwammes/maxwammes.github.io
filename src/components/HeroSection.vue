<script setup>
import ThemeToggle from './ThemeToggle.vue'

const jobs = [
  {
    company: 'Trengo',
    role: 'Design Lead / Senior Product Designer',
    period: 'Feb 2022 - Present',
    logo: '/images/trengo-logo.svg',
    url: 'https://trengo.com',
  },
  {
    company: 'Bynder',
    role: 'Product Designer & Design Systems Lead',
    period: 'Apr 2018 - Jan 2022',
    logo: '/images/bynder-logo.svg',
    url: 'https://bynder.com',
  },
  {
    company: 'Brthrs Agency',
    role: 'Designer & Frontend engineer',
    period: 'Sep 2015 – Mar 2018',
    logo: '/images/brthrs-logo.svg',
    url: 'https://brthrs.nl',
  },
]
</script>

<template>
  <section class="flex flex-col items-center px-8 py-[120px] max-md:px-5 max-md:py-16">
    <div class="flex flex-col gap-16 max-w-[904px] w-full">
      <div class="reveal flex flex-col gap-5 px-3">
        <div class="flex items-center justify-between">
          <div class="size-16 rounded-full overflow-hidden border border-border shadow-[0px_5px_6px_0px_var(--color-shadow),0px_8px_21px_0px_var(--color-shadow-strong)]">
            <img
              src="/images/avatar.jpg"
              alt="Max Wammes"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex items-center gap-2">
            <div class="flex rounded-full border border-border bg-surface p-0.5">
              <a
                href="https://drive.google.com/file/d/1PGDP1WkYiumnd2QOe-TaStpVoenL84vA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 rounded-full py-1.5 px-2.5 text-sm text-text transition-colors hover:text-text-heading hover:bg-black/5 dark:hover:bg-white/5 no-underline"
              >
                <svg class="size-4" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3.75v8.75m0 0L6.25 8.75M10 12.5l3.75-3.75M3.75 16.25h12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Resumé
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <h1 class="text-[44px] max-md:text-[32px] font-semibold text-text-heading tracking-[-0.88px] leading-normal">
            Max Wammes
          </h1>
          <p class="text-base text-text leading-[30px]">
            Product Design Lead at Trengo / Based in Gouda
          </p>
        </div>
      </div>

      <div class="reveal reveal-delay-1 flex flex-col gap-2">
        <a
          v-for="job in jobs"
          :key="job.company"
          :href="job.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-card dark:hover:bg-white/5 no-underline"
        >
          <div class="shrink-0 border border-border-strong rounded-xl p-1 bg-card-elevated/30 shadow-[0px_3px_4px_0px_var(--color-shadow),0px_2px_7px_0px_var(--color-shadow)]">
            <div class="bg-surface rounded-lg p-1">
              <img :src="job.logo" :alt="job.company" class="size-6 object-contain dark:invert" />
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-base font-medium text-text-heading leading-6">{{ job.company }}</p>
            <p class="text-base text-text leading-6">{{ job.role }}</p>
          </div>
          <p class="text-base text-text leading-[30px] whitespace-nowrap max-md:hidden group-hover:hidden">
            {{ job.period }}
          </p>
          <div class="hidden group-hover:flex items-center gap-1 text-text-heading">
            <span class="text-base leading-[30px]">Open</span>
            <svg
              class="shrink-0 text-text-heading"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83 14.17L14.17 5.83M14.17 5.83H7.5M14.17 5.83V12.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
