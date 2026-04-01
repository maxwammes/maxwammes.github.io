import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let intersectionObserver
  let mutationObserver

  function observe(el) {
    if (!el.dataset.revealed) {
      intersectionObserver.observe(el)
    }
  }

  onMounted(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            entry.target.dataset.revealed = '1'
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(observe)

    mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue
          if (node.classList?.contains('reveal')) observe(node)
          node.querySelectorAll?.('.reveal').forEach(observe)
        }
      }
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    intersectionObserver?.disconnect()
    mutationObserver?.disconnect()
  })
}
