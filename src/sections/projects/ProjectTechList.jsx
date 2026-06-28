import { TechIcon } from '@/components/common/TechIcon'

/**
 * Compact tech-stack chips for a project, reusing the shared TechIcon so
 * the visual identity matches the Skills section. Optionally caps the
 * number shown and appends a "+N" indicator.
 *
 * @param {{ tech?: Array<{name?: string, icon?: string}>, max?: number }} props
 */
export function ProjectTechList({ tech = [], max }) {
    const items = Array.isArray(tech) ? tech : []
    const shown = max ? items.slice(0, max) : items
    const extra = max && items.length > max ? items.length - max : 0

    if (shown.length === 0) return null

    return (
        <ul className="flex flex-wrap gap-2">
            {shown.map((item, index) => (
                <li key={item?.name ?? index}>
                    <span className="group inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-card/40 px-2.5">
                        <TechIcon icon={item?.icon} className="size-3.5" />
                        <span className="whitespace-nowrap text-xs text-foreground/90">
                            {item?.name || '—'}
                        </span>
                    </span>
                </li>
            ))}
            {extra > 0 && (
                <li>
                    <span className="inline-flex h-8 items-center rounded-lg border border-border bg-card/40 px-2.5 text-xs text-muted-foreground">
                        +{extra}
                    </span>
                </li>
            )}
        </ul>
    )
}
