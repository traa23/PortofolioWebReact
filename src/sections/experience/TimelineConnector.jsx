import { motion, useReducedMotion } from 'motion/react'

/**
 * The vertical timeline rail. Grows top→bottom when the timeline enters
 * view. Positioned on the left for mobile, centered on desktop.
 * Decorative only.
 *
 * @param {{ active: boolean }} props
 */
export function TimelineConnector({ active }) {
    const reduced = useReducedMotion()

    return (
        <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px overflow-hidden md:left-1/2 md:-translate-x-1/2"
        >
            <motion.span
                className="block h-full w-full origin-top bg-gradient-to-b from-primary/60 via-secondary/40 to-accent/25"
                initial={reduced ? false : { scaleY: 0 }}
                animate={active || reduced ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
        </span>
    )
}
