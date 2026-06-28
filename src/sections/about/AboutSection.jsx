import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { AboutIntro } from './AboutIntro'
import { AboutFacts } from './AboutFacts'
import { about } from '@/data/content'

/** Deliberately calm background — Hero stays the most dramatic section. */
const AboutBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(50% 50% at 72% 18%, color-mix(in srgb, var(--brand-secondary) 7%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * About Me — narrative + credibility. Editorial split: story on the left,
 * a personal "facts" glass card on the right. No 3D; motion = Fade Up.
 */
export function AboutSection() {
    return (
        <Section
            id="about"
            aria-labelledby="about-heading"
            background={AboutBackground}
        >
            <SectionHeading eyebrow="About" title={about.headline} titleId="about-heading" />

            <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
                <AboutIntro />
                <AboutFacts />
            </div>
        </Section>
    )
}
