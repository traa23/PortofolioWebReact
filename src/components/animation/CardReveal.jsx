import { createContext, useContext, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/** Shares a single in-view trigger so a card's parts reveal in sequence. */
const CardRevealContext = createContext(false)

/**
 * Card Reveal — signature motion for Projects. Wraps a card and triggers
 * once when it scrolls into view. Children use <RevealItem> with staggered
 * delays so attention follows the natural reading order.
 *
 * @param {{ children: import('react').ReactNode, className?: string }} props
 */
export function CardReveal({ children, className }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <div ref={ref} className={className}>
            <CardRevealContext.Provider value={inView}>
                {children}
            </CardRevealContext.Provider>
        </div>
    )
}

/**
 * A single revealing part inside a CardReveal (fade + rise).
 * Reduced-motion renders static.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 * @param {number} [props.delay=0]
 * @param {number} [props.y=20]
 * @param {string} [props.className]
 */
export function RevealItem({ children, delay = 0, y = 20, className }) {
    const inView = useContext(CardRevealContext)
    const reduced = useReducedMotion()

    if (reduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
