<script setup>
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
        <div class="size-16 rounded-full overflow-hidden border border-border shadow-[0px_5px_6px_0px_rgba(30,30,40,0.05),0px_8px_21px_0px_rgba(30,30,40,0.11)]">
          <img
            src="/images/avatar.jpg"
            alt="Max Wammes"
            class="w-full h-full object-cover"
          />
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
          class="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-[#f0f0f3] no-underline"
        >
          <div class="shrink-0 border border-border-strong rounded-xl p-1 bg-white/30 shadow-[0px_3px_4px_0px_rgba(30,30,40,0.03),0px_2px_7px_0px_rgba(30,30,40,0.05)]">
            <div class="bg-surface rounded-lg p-1">
              <img :src="job.logo" :alt="job.company" class="size-6 object-contain" />
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-base font-medium text-text-heading leading-6">{{ job.company }}</p>
            <p class="text-base text-text leading-6">{{ job.role }}</p>
          </div>
          <p class="text-base text-text leading-[30px] whitespace-nowrap max-md:hidden group-hover:hidden">
            {{ job.period }}
          </p>
          <svg
            class="hidden group-hover:block shrink-0 text-text-heading"
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
        </a>
      </div>
    </div>
  </section>
</template>
