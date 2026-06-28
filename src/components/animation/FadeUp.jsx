import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/**
 * Fade Up — reveal on scroll (fade + rise, no blur).
 * This is the signature motion for the About section, distinct from the
 * hero's BlurFade. Honors reduced-motion (renders static).
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {number} [props.delay=0]
 * @param {number} [props.duration=0.5]
 * @param {number} [props.y=24]
 * @param {boolean} [props.once=true]
 */
export function FadeUp({
    children,
    className,
    delay = 0,
    duration = 0.5,
    y = 24,
    once = true,
}) {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { once, margin: '-80px' })

    if (reduced) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        )
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
