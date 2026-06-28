import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useCursor } from '@/contexts/cursor-context'

const RING_SIZE = 36

/**
 * Animated cursor: a small dot + a springy ring that reacts to hover and
 * click states. Rendered only when the cursor system is enabled.
 */
export function CursorFollower() {
    const { variant } = useCursor()

    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 })
    const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 })

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }
        window.addEventListener('mousemove', move, { passive: true })
        return () => window.removeEventListener('mousemove', move)
    }, [x, y])

    const ringScale = variant === 'hover' ? 1.6 : variant === 'click' ? 0.6 : 1

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[var(--z-cursor)] hidden md:block"
        >
            {/* Dot */}
            <motion.div
                className="absolute size-1.5 rounded-full bg-primary"
                style={{ x, y, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Ring */}
            <motion.div
                className="absolute rounded-full border border-primary/60"
                style={{
                    x: ringX,
                    y: ringY,
                    width: RING_SIZE,
                    height: RING_SIZE,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{ scale: ringScale, opacity: variant === 'hover' ? 0.9 : 0.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </div>
    )
}
