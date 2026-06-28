/**
 * Smoothly scroll to a section by id.
 * Uses the global Lenis instance when available, otherwise falls back
 * to native scrolling. Respects an optional vertical offset (e.g. navbar).
 *
 * @param {string} id - Target element id (with or without leading '#').
 * @param {number} [offset=0] - Pixels to offset from the top.
 */
export function scrollToSection(id, offset = 0) {
    if (typeof window === 'undefined') return

    const selector = id.startsWith('#') ? id : `#${id}`
    const target = document.querySelector(selector)
    if (!target) return

    const lenis = window.__lenis
    if (lenis) {
        lenis.scrollTo(target, { offset })
        return
    }

    const top = target.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
}
