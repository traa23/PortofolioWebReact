import { SOCIAL_ICONS } from '@/components/common/socialIconRegistry'
import { socials } from '@/data/content'
import { cn } from '@/lib/utils'

/**
 * Centered row of social/contact icon links. Renders nothing until
 * `data/socials` is filled in.
 *
 * @param {{ className?: string }} props
 */
export function SocialLinks({ className }) {
    if (!Array.isArray(socials) || socials.length === 0) return null

    return (
        <ul className={cn('flex flex-wrap items-center justify-center gap-3', className)}>
            {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon] ?? SOCIAL_ICONS.website
                return (
                    <li key={social.id}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={social.label}
                            data-cursor="hover"
                            className="grid size-11 place-items-center rounded-xl border border-border bg-card/40 text-muted-foreground backdrop-blur transition-colors duration-(--duration-base) hover:border-primary/50 hover:text-primary"
                        >
                            <Icon className="size-5" aria-hidden="true" />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
