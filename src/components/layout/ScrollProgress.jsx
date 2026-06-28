import { motion, useScroll, useSpring } from 'motion/react'

/** Gradient progress bar reflecting page scroll (synced via Lenis). */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.3,
    })

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[var(--z-navbar)] h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        />
    )
}
