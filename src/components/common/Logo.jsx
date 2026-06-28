import { cn } from '@/lib/utils'
import { scrollToSection } from '@/utils/scrollToSection'
import { siteConfig } from '@/config/site'

/**
 * Brand mark. Clicking scrolls back to the hero section.
 * @param {{ className?: string }} props
 */
export function Logo({ className }) {
    return (
        <button
            type="button"
            onClick={() => scrollToSection('home')}
            aria-label={`${siteConfig.name} — back to top`}
            className={cn(
                'group inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                className,
            )}
        >
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent text-sm font-bold text-white shadow-glow-primary transition-transform duration-(--duration-base) group-hover:scale-105">
                {siteConfig.shortName.charAt(0)}
            </span>
            <span className="text-base font-semibold tracking-tight">
                {siteConfig.shortName}
            </span>
        </button>
    )
}
