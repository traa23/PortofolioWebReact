import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { FeaturedProjectCard } from './FeaturedProjectCard'
import { OtherProjectsGrid } from './OtherProjectsGrid'
import { projects } from '@/data/content'

/** Medium–high energy background (no 3D): two tints + a masked grid. */
const ProjectsBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(45% 55% at 85% 12%, color-mix(in srgb, var(--brand-secondary) 9%, transparent), transparent 70%),' +
                    'radial-gradient(45% 55% at 10% 88%, color-mix(in srgb, var(--brand-primary) 8%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(80%_70%_at_50%_40%,#000,transparent)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * Featured Projects — the proof of work. Up to three featured projects in
 * an alternating showcase (the first is the most dominant), followed by a
 * simple "Other Projects" grid.
 */
export function ProjectsSection() {
    if (!Array.isArray(projects) || projects.length === 0) return null

    const featured = projects.filter((p) => p.featured).slice(0, 3)
    const others = projects.filter((p) => !p.featured)

    return (
        <Section
            id="projects"
            aria-labelledby="projects-heading"
            background={ProjectsBackground}
        >
            <SectionHeading
                eyebrow="Featured Work"
                title="Projects I'm proud of"
                titleId="projects-heading"
            />

            <div className="mt-12 space-y-8 md:space-y-10">
                {featured.map((project, index) => (
                    <FeaturedProjectCard
                        key={project.id}
                        project={project}
                        reversed={index % 2 === 1}
                        size={index === 0 ? 'lg' : 'md'}
                    />
                ))}
            </div>

            <OtherProjectsGrid projects={others} />
        </Section>
    )
}
