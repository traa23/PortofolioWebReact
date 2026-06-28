import { cn } from '@/lib/utils'

/**
 * Reusable section shell — the consistency backbone for every section
 * after the hero. Provides standard vertical rhythm, the max-width
 * container, scroll offset (for the fixed navbar) and an optional
 * full-bleed decorative background slot.
 *
 * @param {Object} props
 * @param {string} props.id
 * @param {import('react').ReactNode} [props.background] Full-bleed, behind content.
 * @param {string} [props.className]
 * @param {string} [props.containerClassName]
 * @param {import('react').ReactNode} props.children
 */
export function Section({
    id,
    background,
    className,
    containerClassName,
    children,
    ...rest
}) {
    return (
        <section
            id={id}
            className={cn('relative scroll-mt-24 py-24 md:py-32', className)}
            {...rest}
        >
            {background}
            <div
                className={cn(
                    'relative mx-auto w-full max-w-(--container-max) px-6',
                    containerClassName,
                )}
            >
                {children}
            </div>
        </section>
    )
}
