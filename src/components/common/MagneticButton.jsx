import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Wraps any element to give it a magnetic pull toward the cursor.
 * Disabled automatically when reduced motion is preferred.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 * @param {number} [props.strength=0.35] - 0..1 pull intensity.
 * @param {string} [props.className]
 */
export function MagneticButton({ children, strength = 0.35, className, ...rest }) {
    const ref = useRef(null)
    const reduced = useReducedMotion()

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 250, damping: 18 })
    const springY = useSpring(y, { stiffness: 250, damping: 18 })

    const onMove = (e) => {
        if (reduced || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const offsetX = e.clientX - (rect.left + rect.width / 2)
        const offsetY = e.clientY - (rect.top + rect.height / 2)
        x.set(offsetX * strength)
        y.set(offsetY * strength)
    }

    const reset = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            data-cursor="hover"
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
            className={cn('inline-flex', className)}
            {...rest}
        >
            {children}
        </motion.div>
    )
}
