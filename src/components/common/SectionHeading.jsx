import { FadeUp } from '@/components/animation/FadeUp'
import { cn } from '@/lib/utils'

/**
 * Consistent section heading: an editorial eyebrow (gradient tick + label)
 * and an H2 title with an optional gradient accent word. Used by every
 * section so hierarchy & rhythm stay uniform across the site.
 *
 * @param {Object} props
 * @param {string} props.eyebrow
 * @param {string} [props.title]
 * @param {string} [props.accent]    Trailing word rendered in gradient.
 * @param {string} [props.titleId]   For aria-labelledby.
 * @param {string} [props.subtitle]
 * @param {'left'|'center'} [props.align='left']
 * @param {string} [props.className]
 */
export function SectionHeading({
    eyebrow,
    title,
    accent,
    titleId,
    subtitle,
    align = 'left',
    className,
}) {
    return (
        <div
            className={cn(
                'flex flex-col',
                align === 'center' ? 'items-center text-center' : 'items-start text-left',
                className,
            )}
        >
            {eyebrow && (
                <FadeUp>
                    <span className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
                        <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                            {eyebrow}
                        </span>
                    </span>
                </FadeUp>
            )}

            <FadeUp delay={0.06}>
                <h2
                    id={titleId}
                    className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight"
                >
                    {title}
                    {accent && (
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            {' '}
                            {accent}
                        </span>
                    )}
                </h2>
            </FadeUp>

            {subtitle && (
                <FadeUp delay={0.12}>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {subtitle}
                    </p>
                </FadeUp>
            )}
        </div>
    )
}
