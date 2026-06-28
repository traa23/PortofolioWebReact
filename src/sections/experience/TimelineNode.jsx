import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Decorative timeline node (dot) aligned to the rail. The current
 * milestone gets a larger, glowing dot with a subtle ping.
 *
 * @param {{ current?: boolean, active: boolean, delay?: number }} props
 */
export function TimelineNode({ current = false, active, delay = 0 }) {
    const reduced = useReducedMotion()

    return (
        <span
            aria-hidden="true"
            className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
        >
            <motion.span
                className={cn(
                    'block rounded-full ring-4 ring-background',
                    current
                        ? 'size-4 bg-gradient-to-br from-primary to-accent shadow-glow-primary'
                        : 'size-3 bg-primary',
                )}
                initial={reduced ? false : { scale: 0 }}
                animate={active || reduced ? { scale: 1 } : { scale: 0 }}
                transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {current && !reduced && (
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
            )}
        </span>
    )
}
