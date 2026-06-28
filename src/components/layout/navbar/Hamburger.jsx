import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * Animated hamburger that morphs into an X when open.
 * @param {{ open: boolean, onClick: () => void, className?: string }} props
 */
export function Hamburger({ open, onClick, className }) {
    const bar = 'absolute left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-foreground'

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={cn(
                'relative grid size-10 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                className,
            )}
        >
            <span className="relative block size-6">
                <motion.span
                    className={bar}
                    animate={open ? { top: '50%', rotate: 45 } : { top: '30%', rotate: 0 }}
                    transition={{ duration: 0.25 }}
                />
                <motion.span
                    className={cn(bar, 'top-1/2')}
                    animate={{ opacity: open ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.span
                    className={bar}
                    animate={open ? { top: '50%', rotate: -45 } : { top: '70%', rotate: 0 }}
                    transition={{ duration: 0.25 }}
                />
            </span>
        </button>
    )
}
