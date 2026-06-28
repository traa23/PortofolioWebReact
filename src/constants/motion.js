/**
 * Reusable Motion (Framer Motion) variants & transitions.
 * Centralized so animation feel stays consistent across the app.
 */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]
export const EASE_IN_OUT_QUART = [0.76, 0, 0.24, 1]

export const DURATION = Object.freeze({
    fast: 0.15,
    base: 0.3,
    slow: 0.6,
    slower: 1,
})

/** Simple opacity fade. */
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION.slow } },
}

/** Fade + rise — the default reveal. */
export const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
    },
}

/** Stagger children for grouped reveals. */
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
}

/** Page transition used by AnimatePresence on route change. */
export const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.base, ease: EASE_OUT_EXPO },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: DURATION.fast, ease: EASE_OUT_EXPO },
    },
}
