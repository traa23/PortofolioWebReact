import { getTech } from './techIconRegistry'
import { cn } from '@/lib/utils'

/**
 * Normalized technology icon. Renders any brand/library icon inside a
 * fixed 16px box so every icon shares the same visual size & vertical
 * alignment. Decorative (aria-hidden); muted by default, fading to its
 * brand color on hover of an ancestor `.group`.
 *
 * @param {{ icon: string, className?: string }} props
 */
export function TechIcon({ icon, className }) {
    const { Icon, color } = getTech(icon)
    return (
        <span
            aria-hidden="true"
            style={{ '--brand': color }}
            className={cn(
                'inline-flex size-4 shrink-0 items-center justify-center',
                className,
            )}
        >
            <Icon className="size-full text-muted-foreground transition-colors duration-(--duration-base) group-hover:text-[var(--brand)]" />
        </span>
    )
}
