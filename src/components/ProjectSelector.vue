<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const wrapperRef = ref(null)

const isProjectPage = computed(() => route.name === 'project')
const visible = computed(() => isProjectPage.value || scrolled.value)
const currentSlug = computed(() => isProjectPage.value ? route.params.slug : null)
const current = computed(() => currentSlug.value ? projects[currentSlug.value] : null)

const allProjects = computed(() =>
  Object.entries(projects).map(([slug, p]) => ({ slug, ...p }))
)
const featured = computed(() => allProjects.value[0])
const others = computed(() => allProjects.value.slice(1))

const MORPH_MS = 280
const EASING = 'cubic-bezier(0.32, 0.72, 0.24, 1)'

const stateKey = computed(() => {
  if (open.value) return 'open'
  return isProjectPage.value ? 'project-closed' : 'home-closed'
})

let morphTimeout = null

watch(stateKey, async () => {
  const el = wrapperRef.value
  if (!el) return
  // Skip when the selector is currently hidden (no measurable size).
  if (el.offsetWidth === 0) return

  const start = { w: el.offsetWidth, h: el.offsetHeight }

  await nextTick()
  if (!wrapperRef.value) return

  if (morphTimeout) clearTimeout(morphTimeout)

  el.style.transition = 'none'
  el.style.width = ''
  el.style.height = ''
  void el.offsetHeight
  const end = { w: el.offsetWidth, h: el.offsetHeight }

  el.style.width = `${start.w}px`
  el.style.height = `${start.h}px`
  void el.offsetHeight
  el.style.transition = `width ${MORPH_MS}ms ${EASING}, height ${MORPH_MS}ms ${EASING}`
  el.style.width = `${end.w}px`
  el.style.height = `${end.h}px`

  morphTimeout = setTimeout(() => {
    morphTimeout = null
    if (!wrapperRef.value) return
    wrapperRef.value.style.transition = ''
    wrapperRef.value.style.width = ''
    wrapperRef.value.style.height = ''
  }, MORPH_MS + 20)
})

function toggle() { open.value = !open.value }
function close() { open.value = false }

function onKey(e) {
  if (e.key === 'Escape' && open.value) close()
}
function onScroll() {
  scrolled.value = window.scrollY > 360
}
onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll)
})

const outerPill = [
  'p-2 rounded-3xl backdrop-blur-[8px] overflow-hidden',
  'bg-card-elevated/70 border border-border-strong',
  'shadow-[0px_3px_4px_0px_rgba(30,30,40,0.03),0px_2px_7px_0px_var(--color-shadow)]',
].join(' ')

const avatarClass = [
  'block size-8 rounded-full overflow-hidden border border-border',
  'shadow-[0px_5px_6px_0px_var(--color-shadow),0px_8px_21px_0px_var(--color-shadow-strong)]',
].join(' ')

const innerHover = 'hover:bg-card hover:text-text-heading'
const itemHover = [
  'hover:bg-card-elevated',
  'hover:shadow-[0px_3px_4px_0px_rgba(30,30,40,0.03),0px_2px_7px_0px_var(--color-shadow)]',
].join(' ')
</script>

<template>
  <div
    v-show="visible"
    class="fixed top-10 left-1/2 -translate-x-1/2 z-[60]"
  >
    <div ref="wrapperRef" :class="outerPill">
      <!-- Closed: homepage variant -->
      <div
        v-if="!open && !isProjectPage"
        key="home-closed"
        class="content-fade flex items-center gap-1"
      >
        <RouterLink to="/" aria-label="Home" :class="avatarClass">
          <img src="/images/avatar.jpg" alt="Max Wammes" class="w-full h-full object-cover" />
        </RouterLink>
        <button
          @click="toggle"
          class="px-2 py-1 rounded-3xl text-base font-medium text-text transition-colors cursor-pointer whitespace-nowrap"
          :class="innerHover"
        >
          Open projects
        </button>
      </div>

      <!-- Closed: project page variant -->
      <div
        v-else-if="!open && isProjectPage"
        key="project-closed"
        class="content-fade flex items-center gap-1"
      >
        <RouterLink to="/" aria-label="Home" :class="avatarClass">
          <img src="/images/avatar.jpg" alt="Max Wammes" class="w-full h-full object-cover" />
        </RouterLink>
        <button
          @click="toggle"
          class="flex items-center gap-1 cursor-pointer whitespace-nowrap"
        >
          <span class="pl-2 text-base font-medium text-text">Projects&nbsp;/</span>
          <span class="flex items-center gap-1 pl-2 pr-1 py-1 rounded-3xl text-base font-medium text-text-heading transition-colors hover:bg-card">
            {{ current?.title }}
            <svg class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Open panel -->
      <div
        v-else
        key="open"
        class="content-fade w-[552px] max-w-[calc(100vw-48px)] flex flex-col gap-2"
      >
        <header class="flex items-center gap-1">
          <RouterLink to="/" aria-label="Home" :class="avatarClass" @click="close">
            <img src="/images/avatar.jpg" alt="Max Wammes" class="w-full h-full object-cover" />
          </RouterLink>
          <span class="flex-1 pl-1 text-base font-medium text-text">
            {{ isProjectPage ? 'Projects /' : 'Projects' }}
          </span>

          <button
            @click="close"
            class="group flex items-center gap-1 pl-2 pr-3 py-1 rounded-2xl text-base font-medium text-text cursor-pointer transition-colors"
            :class="innerHover"
          >
            <svg class="size-6 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Close
          </button>
        </header>

        <div class="bg-card rounded-2xl p-1 flex gap-2">
          <RouterLink
            v-if="featured"
            :to="`/projects/${featured.slug}`"
            @click="close"
            :class="[
              'group flex flex-col gap-1 px-3 py-2 rounded-xl no-underline w-[197px] shrink-0 transition-colors',
              itemHover,
            ]"
          >
            <div class="flex items-start gap-2">
              <span class="flex-1 text-base font-medium text-text-heading leading-6">{{ featured.title }}</span>
              <svg class="size-6 shrink-0 text-text-heading opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p v-if="featured.description" class="flex-1 text-base text-text leading-6">{{ featured.description }}</p>
            <span class="text-base text-text leading-[30px] whitespace-pre">{{ featured.year }}</span>
          </RouterLink>
          <div v-else class="w-[197px] shrink-0" />

          <ul class="flex-1 flex flex-col gap-2 justify-center">
            <li v-for="p in others" :key="p.slug">
              <RouterLink
                :to="`/projects/${p.slug}`"
                @click="close"
                :class="[
                  'group flex flex-col gap-1 px-3 py-2 rounded-xl no-underline transition-colors',
                  itemHover,
                ]"
              >
                <div class="flex items-start gap-2">
                  <span class="flex-1 text-base font-medium text-text-heading leading-6">{{ p.title }}</span>
                  <svg class="size-6 shrink-0 text-text-heading opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <span class="text-base text-text leading-[30px] whitespace-pre">{{ p.year }}</span>
              </RouterLink>
            </li>
            <li v-if="!others.length" class="px-3 py-2 text-base text-text leading-6">
              More projects coming soon.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-fade {
  animation: content-fade 220ms cubic-bezier(0.32, 0.72, 0.24, 1) both;
}
@keyframes content-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
