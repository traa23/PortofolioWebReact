import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Magic UI — Border Beam.
 * A light beam that travels around the element's border using offset-path.
 * Place inside a `position: relative` + rounded container.
 *
 * @param {Object} props
 * @param {number} [props.size=120]      Beam length (px).
 * @param {number} [props.duration=8]    Seconds per lap.
 * @param {number} [props.delay=0]
 * @param {string} [props.colorFrom]
 * @param {string} [props.colorTo]
 * @param {string} [props.className]
 */
export function BorderBeam({
    size = 120,
    duration = 8,
    delay = 0,
    colorFrom = 'var(--brand-primary)',
    colorTo = 'var(--brand-accent)',
    className,
}) {
    const reduced = useReducedMotion()
    if (reduced) return null

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
        >
            <motion.div
                className={cn(
                    'absolute aspect-square bg-gradient-to-l from-(--beam-from) via-(--beam-to) to-transparent',
                    className,
                )}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    '--beam-from': colorFrom,
                    '--beam-to': colorTo,
                }}
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration,
                    delay: -delay,
                }}
            />
        </div>
    )
}
