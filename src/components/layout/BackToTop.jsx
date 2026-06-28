import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { throttle } from '@/utils/throttle'
import { cn } from '@/lib/utils'

/** Floating button that appears after scrolling past one viewport. */
export function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = throttle(() => {
            setVisible(window.scrollY > window.innerHeight * 0.8)
        }, 150)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const toTop = () => {
        if (window.__lenis) window.__lenis.scrollTo(0)
        else window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    onClick={toTop}
                    aria-label="Back to top"
                    data-cursor="hover"
                    initial={{ opacity: 0, scale: 0.6, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 12 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                        'fixed bottom-6 right-6 z-[var(--z-sticky)] grid size-11 place-items-center rounded-full',
                        'border border-border bg-card/60 text-foreground shadow-glow-soft backdrop-blur-md',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    )}
                >
                    <ArrowUp className="size-5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
