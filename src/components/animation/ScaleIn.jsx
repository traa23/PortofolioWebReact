import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/**
 * Scale In — reveal on scroll (scale + fade). Signature motion for the
 * Statistics (and later Skills) section, distinct from Hero/About.
 * Fires `onComplete` once the reveal animation finishes so dependent
 * animations (e.g. NumberTicker) can start afterwards. Reduced-motion
 * renders static.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {number} [props.delay=0]
 * @param {number} [props.duration=0.5]
 * @param {() => void} [props.onComplete]
 * @param {boolean} [props.once=true]
 */
export function ScaleIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    onComplete,
    once = true,
}) {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { once, margin: '-60px' })

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => {
                if (inView) onComplete?.()
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
