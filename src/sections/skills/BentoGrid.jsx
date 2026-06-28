import { cn } from '@/lib/utils'

/**
 * Simple, readable Bento grid: 1 column on mobile, 2 on tablet, 3 on
 * desktop. Tile spans are applied per card via span tokens.
 *
 * @param {{ children: import('react').ReactNode, className?: string }} props
 */
export function BentoGrid({ children, className }) {
    return (
        <div
            className={cn(
                'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3',
                className,
            )}
        >
            {children}
        </div>
    )
}
