import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/**
 * Magic UI — Blur Fade.
 * Reveals children with a subtle blur + rise as they enter the viewport.
 * Honors reduced-motion (renders static). Tuned fast & subtle.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {number} [props.delay=0]
 * @param {number} [props.duration=0.4]
 * @param {number} [props.offset=10]   Y offset in px.
 * @param {string} [props.blur='6px']
 * @param {boolean} [props.inView=true] Trigger on enter view vs on mount.
 * @param {boolean} [props.once=true]
 */
export function BlurFade({
    children,
    className,
    delay = 0,
    duration = 0.4,
    offset = 10,
    blur = '6px',
    inView = true,
    once = true,
}) {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const inViewResult = useInView(ref, { once, margin: '-60px' })
    const show = !inView || inViewResult

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
            initial={{ opacity: 0, y: offset, filter: `blur(${blur})` }}
            animate={
                show
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: offset, filter: `blur(${blur})` }
            }
            transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
