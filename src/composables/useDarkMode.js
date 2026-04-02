import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'theme'
const mode = ref('system') // 'light' | 'dark' | 'system'
let initialized = false
let mediaQuery = null

function applyTheme() {
  const dark = mode.value === 'dark' ||
    (mode.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
}

export function useDarkMode() {
  function setMode(m) {
    mode.value = m
  }

  onMounted(() => {
    if (initialized) return
    initialized = true

    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      mode.value = stored
    } else {
      mode.value = 'system'
    }
    applyTheme()

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', applyTheme)
  })

  watch(mode, (val) => {
    localStorage.setItem(STORAGE_KEY, val)
    applyTheme()
  })

  return { mode, setMode }
}
