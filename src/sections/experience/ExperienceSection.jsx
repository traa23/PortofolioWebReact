import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Timeline } from './Timeline'
import { experience } from '@/data/content'

/** Calmer than Projects: a faint mesh + noise. The timeline is the focus. */
const ExperienceBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(45% 50% at 50% 8%, color-mix(in srgb, var(--brand-primary) 6%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * Experience — a developer-journey timeline that shows growth over time,
 * not just a list of activities. Motion: Timeline Reveal.
 */
export function ExperienceSection() {
    if (!Array.isArray(experience) || experience.length === 0) return null

    return (
        <Section
            id="experience"
            aria-labelledby="experience-heading"
            background={ExperienceBackground}
        >
            <SectionHeading
                eyebrow="My Journey"
                title="Building experience through continuous learning"
                titleId="experience-heading"
            />

            <div className="mx-auto mt-14 max-w-4xl">
                <Timeline items={experience} />
            </div>
        </Section>
    )
}
