import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { siteConfig } from '@/config/site'

/**
 * Initial loading overlay. Locks scroll, shows the logo + animated ring,
 * and exits once the window has loaded (respecting a minimum duration).
 *
 * @param {{ minDuration?: number, onFinish?: () => void }} props
 */
export function LoadingScreen({ minDuration = 1100, onFinish }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const start = performance.now()
        const finish = () => {
            const wait = Math.max(0, minDuration - (performance.now() - start))
            window.setTimeout(() => setVisible(false), wait)
        }
        if (document.readyState === 'complete') finish()
        else window.addEventListener('load', finish, { once: true })
        return () => window.removeEventListener('load', finish)
    }, [minDuration])

    useEffect(() => {
        const root = document.documentElement
        if (visible) {
            root.style.overflow = 'hidden'
            window.__lenis?.stop?.()
        } else {
            root.style.overflow = ''
            window.__lenis?.start?.()
            onFinish?.()
        }
        return () => {
            root.style.overflow = ''
        }
    }, [visible, onFinish])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loading"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[var(--z-toast)] grid place-items-center bg-background"
                    role="status"
                    aria-label="Loading portfolio"
                >
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3"
                        >
                            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent text-sm font-bold text-white shadow-glow-primary">
                                {siteConfig.name.charAt(0)}
                            </span>
                            <span className="text-lg font-semibold tracking-tight">
                                {siteConfig.name}
                            </span>
                        </motion.div>
                        <span className="size-7 animate-spin rounded-full border-2 border-muted border-t-primary" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
