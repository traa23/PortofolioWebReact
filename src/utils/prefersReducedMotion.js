/**
 * Whether the user has requested reduced motion at the OS level.
 * @returns {boolean}
 */
export function prefersReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
