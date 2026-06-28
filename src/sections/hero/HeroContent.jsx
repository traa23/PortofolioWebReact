import { Download, MessageCircle } from 'lucide-react'
import { BlurFade } from '@/components/magic-ui/BlurFade'
import { TypingText } from '@/components/magic-ui/TypingText'
import { MagneticButton } from '@/components/common/MagneticButton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeroSocials } from './HeroSocials'
import { profile } from '@/data/profile'
import { RESUME_URL, SCROLL_OFFSET } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scrollToSection'

/**
 * Hero left column — textual identity + CTA.
 * Visual hierarchy is deliberate: the NAME is the single focal point;
 * every other element is quieter so it supports rather than competes.
 */
export function HeroContent() {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Availability — quiet supporting cue (no expanding ping). */}
            <BlurFade delay={0} inView={false}>
                <Badge variant="glass" className="gap-2 py-1 pl-2.5 pr-3.5 text-muted-foreground">
                    <span className="size-2 rounded-full bg-success shadow-[0_0_8px_var(--brand-success)]" />
                    {profile.availability}
                </Badge>
            </BlurFade>

            {/* Eyebrow + Name (focal). */}
            <BlurFade delay={0.08} inView={false} className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {profile.greeting}
                </p>
                <h1 className="mt-3 text-[clamp(2.75rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                    {profile.name}
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        .
                    </span>
                </h1>
            </BlurFade>

            {/* Role — supports the name (lighter weight, smaller). */}
            <BlurFade delay={0.16} inView={false} className="mt-5">
                <p className="text-[clamp(1.125rem,2.8vw,1.625rem)] font-medium tracking-tight text-muted-foreground">
                    I&apos;m a{' '}
                    <TypingText
                        words={profile.roles}
                        className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-semibold text-transparent"
                    />
                </p>
            </BlurFade>

            {/* Description — concise, ~2 lines. */}
            <BlurFade delay={0.24} inView={false} className="mt-6 max-w-lg">
                <p className="text-base leading-relaxed text-muted-foreground">
                    {profile.description}
                </p>
            </BlurFade>

            {/* Primary actions only. */}
            <BlurFade delay={0.32} inView={false} className="mt-10">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <MagneticButton>
                        <Button
                            variant="glow"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => scrollToSection('contact', SCROLL_OFFSET)}
                        >
                            <MessageCircle className="size-4" />
                            Let&apos;s talk
                        </Button>
                    </MagneticButton>

                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <a href={RESUME_URL} download data-cursor="hover">
                            <Download className="size-4" />
                            Resume
                        </a>
                    </Button>
                </div>
            </BlurFade>

            <BlurFade delay={0.4} inView={false} className="mt-8">
                <HeroSocials />
            </BlurFade>
        </div>
    )
}
