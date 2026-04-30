import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'theme'
const mode = ref('light') // 'light' | 'dark'
let initialized = false

function applyTheme() {
  document.documentElement.classList.toggle('dark', mode.value === 'dark')
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
      mode.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    applyTheme()
  })

  watch(mode, (val) => {
    localStorage.setItem(STORAGE_KEY, val)
    applyTheme()
  })

  return { mode, setMode }
}
