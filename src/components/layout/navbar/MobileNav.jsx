import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV_LINKS, SCROLL_OFFSET } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scrollToSection'
import { NavActions } from './NavActions'
import { cn } from '@/lib/utils'

const panel = {
    hidden: { opacity: 0, y: -8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 },
    },
}
const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
}

/**
 * Full-width mobile menu. Locks scroll while open.
 * @param {{ open: boolean, onClose: () => void, activeId: string }} props
 */
export function MobileNav({ open, onClose, activeId }) {
    const panelRef = useRef(null)

    useEffect(() => {
        if (!open) return
        const root = document.documentElement
        const previouslyFocused = document.activeElement
        root.style.overflow = 'hidden'
        window.__lenis?.stop?.()

        const getFocusables = () =>
            panelRef.current
                ? Array.from(
                    panelRef.current.querySelectorAll(
                        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                    ),
                )
                : []

        // Move focus into the menu once it opens.
        const focusTimer = window.setTimeout(() => getFocusables()[0]?.focus(), 60)

        const onKey = (e) => {
            if (e.key === 'Escape') {
                onClose()
                return
            }
            if (e.key !== 'Tab') return
            const focusables = getFocusables()
            if (focusables.length === 0) return
            const first = focusables[0]
            const last = focusables[focusables.length - 1]
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        window.addEventListener('keydown', onKey)
        return () => {
            root.style.overflow = ''
            window.__lenis?.start?.()
            window.removeEventListener('keydown', onKey)
            window.clearTimeout(focusTimer)
            // Restore focus to whatever opened the menu (the hamburger).
            previouslyFocused?.focus?.()
        }
    }, [open, onClose])

    const go = (id) => {
        onClose()
        setTimeout(() => scrollToSection(id, SCROLL_OFFSET), 200)
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    id="mobile-nav"
                    ref={panelRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    variants={panel}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute inset-x-0 top-full mx-3 mt-2 overflow-hidden rounded-2xl border border-border bg-background/85 p-4 shadow-glow-soft backdrop-blur-xl md:hidden"
                >
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <motion.li key={link.id} variants={item}>
                                <button
                                    type="button"
                                    onClick={() => go(link.id)}
                                    aria-current={activeId === link.id ? 'location' : undefined}
                                    className={cn(
                                        'w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors',
                                        activeId === link.id
                                            ? 'bg-muted text-foreground'
                                            : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                                    )}
                                >
                                    {link.label}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div variants={item} className="mt-4 border-t border-border pt-4">
                        <NavActions className="justify-between" onAction={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
