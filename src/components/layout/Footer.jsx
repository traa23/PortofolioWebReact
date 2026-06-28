import { Logo } from '@/components/common/Logo'
import { SOCIAL_ICONS as ICONS } from '@/components/common/socialIconRegistry'
import { NAV_LINKS, SCROLL_OFFSET } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scrollToSection'
import { socials } from '@/data/content'
import { siteConfig } from '@/config/site'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative border-t border-border bg-background">
            <div className="mx-auto grid max-w-(--container-max) gap-10 px-6 py-14 md:grid-cols-3">
                <div className="space-y-4">
                    <Logo />
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                        {siteConfig.description}
                    </p>
                </div>

                <nav aria-label="Footer navigation">
                    <h3 className="mb-4 text-sm font-semibold text-foreground">
                        Quick Links
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection(link.id, SCROLL_OFFSET)}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="mb-4 text-sm font-semibold text-foreground">Connect</h3>
                    <ul className="flex flex-wrap gap-3">
                        {socials.map((social) => {
                            const Icon = ICONS[social.icon] ?? Globe
                            return (
                                <li key={social.id}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={social.label}
                                        data-cursor="hover"
                                        className="grid size-10 place-items-center rounded-lg border border-border bg-card/40 text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <Icon className="size-5" />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="border-t border-border">
                <p className="mx-auto max-w-(--container-max) px-6 py-6 text-center text-xs text-muted-foreground">
                    © {year} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
