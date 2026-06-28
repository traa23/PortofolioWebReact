import { TechIcon } from '@/components/common/TechIcon'

/**
 * A single technology chip — consistent height/padding/radius/alignment.
 * The icon is normalized + decorative; the technology name is the real
 * information. Hover (from the chip group) fades the icon to its brand
 * color — kept subtle so the section never feels busy.
 *
 * @param {{ name?: string, icon?: string }} props
 */
export function SkillChip({ name, icon }) {
    return (
        <span className="group inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card/40 px-3">
            <TechIcon icon={icon} />
            <span className="whitespace-nowrap text-sm text-foreground/90">
                {name || '—'}
            </span>
        </span>
    )
}
