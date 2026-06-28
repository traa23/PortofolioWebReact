import { motion, useReducedMotion } from 'motion/react'
import { scrollToSection } from '@/utils/scrollToSection'
import { SCROLL_OFFSET } from '@/constants/navigation'

/** Subtle affordance inviting the user to scroll to the next section. */
export function HeroScrollIndicator() {
    const reduced = useReducedMotion()

    return (
        <button
            type="button"
            onClick={() => scrollToSection('about', SCROLL_OFFSET)}
            aria-label="Scroll to next section"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <span className="relative h-9 w-5 rounded-full border border-border">
                <motion.span
                    className="absolute left-1/2 top-1.5 size-1 -translate-x-1/2 rounded-full bg-primary"
                    animate={reduced ? {} : { y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
            </span>
        </button>
    )
}
