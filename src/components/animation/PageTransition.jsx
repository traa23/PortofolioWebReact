import { AnimatePresence, motion } from 'motion/react'
import { useLocation } from 'react-router-dom'
import { pageTransition } from '@/constants/motion'

/**
 * Reusable route transition. Wrap an <Outlet/> (or page) so navigating
 * between routes fades/slides smoothly. Keyed by pathname.
 *
 * @param {{ children: import('react').ReactNode }} props
 */
export function PageTransition({ children }) {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
