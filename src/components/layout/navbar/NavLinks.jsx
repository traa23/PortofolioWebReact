import { motion } from 'motion/react'
import { NAV_LINKS, SCROLL_OFFSET } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scrollToSection'
import { cn } from '@/lib/utils'

/**
 * Desktop navigation links with an animated active indicator.
 * @param {{ activeId: string, className?: string, layoutId?: string,
 *           onNavigate?: () => void }} props
 */
export function NavLinks({
    activeId,
    className,
    layoutId = 'nav-active',
    onNavigate,
}) {
    const handleClick = (id) => {
        scrollToSection(id, SCROLL_OFFSET)
        onNavigate?.()
    }

    return (
        <ul className={cn('flex items-center gap-1', className)}>
            {NAV_LINKS.map((link) => {
                const active = activeId === link.id
                return (
                    <li key={link.id}>
                        <button
                            type="button"
                            onClick={() => handleClick(link.id)}
                            aria-current={active ? 'location' : undefined}
                            className={cn(
                                'relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-(--duration-base)',
                                active
                                    ? 'text-foreground'
                                    : 'text-muted-foreground hover:text-foreground',
                            )}
                        >
                            {link.label}
                            {active && (
                                <motion.span
                                    layoutId={layoutId}
                                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
