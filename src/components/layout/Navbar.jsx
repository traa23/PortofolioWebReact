import { useState } from 'react'
import { motion } from 'motion/react'
import { Logo } from '@/components/common/Logo'
import { useScrollDirection, useActiveSection } from '@/hooks'
import { SECTION_IDS } from '@/constants/navigation'
import { NavLinks } from './navbar/NavLinks'
import { NavActions } from './navbar/NavActions'
import { Hamburger } from './navbar/Hamburger'
import { MobileNav } from './navbar/MobileNav'
import { cn } from '@/lib/utils'

/**
 * Sticky navbar: transparent at top, glassmorphism on scroll, hides on
 * scroll-down / reveals on scroll-up. Highlights the active section.
 */
export function Navbar() {
    const { scrolled, direction } = useScrollDirection()
    const activeId = useActiveSection(SECTION_IDS)
    const [open, setOpen] = useState(false)

    const hidden = direction === 'down' && scrolled && !open

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: hidden ? '-110%' : '0%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                'fixed inset-x-0 top-0 z-[var(--z-navbar)] transition-colors duration-(--duration-base)',
                scrolled || open
                    ? 'border-b border-border bg-background/70 backdrop-blur-xl'
                    : 'border-b border-transparent bg-transparent',
            )}
        >
            <nav
                aria-label="Primary"
                className="mx-auto flex h-[72px] max-w-(--container-max) items-center justify-between px-4 sm:px-6"
            >
                <Logo />
                <NavLinks activeId={activeId} className="hidden md:flex" />
                <NavActions className="hidden md:flex" />
                <Hamburger
                    open={open}
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden"
                />
            </nav>

            <MobileNav open={open} onClose={() => setOpen(false)} activeId={activeId} />
        </motion.header>
    )
}
