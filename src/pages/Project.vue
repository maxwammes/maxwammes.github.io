<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import ProjectSections from '../components/ProjectSections.vue'
import { projects } from '../data/projects.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const route = useRoute()
const project = computed(() => projects[route.params.slug])
</script>

<template>
  <main class="min-h-screen bg-bg font-sans">
    <template v-if="project">
      <section class="flex justify-center px-8 pt-[120px] pb-16 max-md:px-5 max-md:pt-16 max-md:pb-10">
        <div class="reveal max-w-[904px] w-full flex flex-col gap-6">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-1 pl-2 pr-3 py-1 rounded-2xl text-base font-medium text-text transition-colors hover:bg-card hover:text-text-heading no-underline w-fit"
          >
            <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Go back
          </RouterLink>
          <div class="flex items-baseline justify-between gap-4">
            <h1 class="text-[28px] font-semibold text-text-heading">{{ project.title }}</h1>
            <span v-if="project.year" class="text-base text-text whitespace-pre">{{ project.year }}</span>
          </div>
        </div>
      </section>

      <ProjectSections :sections="project.sections" />
      <div class="h-3" />
      <div class="h-10" />
    </template>

    <section v-else class="flex flex-col items-center justify-center min-h-screen gap-6 px-5 text-center">
      <h1 class="text-xl font-semibold text-text-heading">Project not found</h1>
      <RouterLink
        to="/"
        class="text-sm text-text hover:text-text-heading transition-colors"
      >
        Back to home
      </RouterLink>
    </section>
  </main>
</template>
