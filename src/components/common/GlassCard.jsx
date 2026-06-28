import { cn } from '@/lib/utils'

/**
 * Reusable glassmorphism surface — the standard card used across sections
 * (About facts, Services, Testimonials, etc.). Optional gradient accent
 * line along the top edge.
 *
 * @param {Object} props
 * @param {boolean} [props.accent=false]
 * @param {string} [props.className]
 * @param {import('react').ReactNode} props.children
 */
export function GlassCard({ accent = false, className, children, ...rest }) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-xl',
                className,
            )}
            {...rest}
        >
            {accent && (
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            )}
            {children}
        </div>
    )
}
