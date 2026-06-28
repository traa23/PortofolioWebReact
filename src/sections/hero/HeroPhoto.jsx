import { useRef } from 'react'
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from 'motion/react'
import { BorderBeam } from '@/components/magic-ui/BorderBeam'
import { useMediaQuery } from '@/hooks'
import { profile } from '@/data/profile'

const SPRING = { stiffness: 150, damping: 18, mass: 0.4 }

/**
 * Hero photo — the visual focal point (alongside the name).
 * A real frosted-glass frame wraps the portrait: the padded glass margin
 * blurs the glow behind it, with an inner ring + top sheen for depth.
 * Tilt / parallax / float disable on touch and under reduced motion.
 */
export function HeroPhoto() {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const finePointer = useMediaQuery('(pointer: fine)')
    const interactive = finePointer && !reduced

    const mx = useMotionValue(0)
    const my = useMotionValue(0)

    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), SPRING)
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), SPRING)
    const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [22, -22]), SPRING)
    const glowY = useSpring(useTransform(my, [-0.5, 0.5], [22, -22]), SPRING)

    const handleMove = (e) => {
        if (!interactive || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        mx.set((e.clientX - rect.left) / rect.width - 0.5)
        my.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const reset = () => {
        mx.set(0)
        my.set(0)
    }

    return (
        <div
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]"
            style={{ perspective: 1000 }}
        >
            {/* Glow behind the photo (parallax) */}
            <motion.div
                aria-hidden="true"
                style={{ x: glowX, y: glowY }}
                className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-primary/35 via-secondary/25 to-accent/30 blur-3xl"
            />

            {/* Idle float */}
            <motion.div
                animate={interactive ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                {/* Entrance + tilt — gradient border shell */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMove}
                    onMouseLeave={reset}
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="rounded-[1.9rem] bg-gradient-to-br from-primary/60 via-secondary/35 to-accent/60 p-px shadow-2xl shadow-primary/20"
                >
                    {/* Frosted glass frame — padded so the blurred glass margin shows */}
                    <div className="relative rounded-[calc(1.9rem-1px)] bg-card/25 p-2.5 ring-1 ring-inset ring-white/10 backdrop-blur-2xl">
                        {/* Inner photo */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] ring-1 ring-inset ring-white/10">
                            <img
                                src={profile.photo}
                                alt={`Portrait of ${profile.name}`}
                                width={800}
                                height={1000}
                                loading="eager"
                                fetchpriority="high"
                                decoding="async"
                                className="size-full object-cover object-center"
                                style={{ transform: 'translateZ(40px)' }}
                            />
                            {/* Glass sheen + bottom vignette */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-transparent" />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-card/40 to-transparent" />
                            <BorderBeam size={150} duration={9} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
