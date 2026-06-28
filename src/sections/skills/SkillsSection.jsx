import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BentoGrid } from './BentoGrid'
import { SkillCategoryCard } from './SkillCategoryCard'
import { skills } from '@/data/content'

/**
 * Medium-energy background — livelier than Statistics, calmer than the
 * hero: a masked dot-grid + two soft tints. No 3D.
 */
const SkillsBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(50% 50% at 15% 15%, color-mix(in srgb, var(--brand-primary) 8%, transparent), transparent 70%),' +
                    'radial-gradient(50% 50% at 90% 80%, color-mix(in srgb, var(--brand-secondary) 7%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(75%_70%_at_50%_40%,#000,transparent)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * Skills — a readable Bento grid that lets a recruiter grasp the stack in
 * ~5 seconds. Priority order: Frontend (hero tile) → Backend → AI/ML →
 * Database → Tools & DevOps → Languages. Motion: Scale, then chip stagger.
 */
export function SkillsSection() {
    if (skills.length === 0) return null

    return (
        <Section
            id="skills"
            aria-labelledby="skills-heading"
            background={SkillsBackground}
        >
            <SectionHeading
                eyebrow="Tech Stack"
                title="Skills that turn ideas into products"
                titleId="skills-heading"
            />

            <BentoGrid className="mt-12">
                {skills.map((category, index) => (
                    <SkillCategoryCard
                        key={category.id}
                        category={category}
                        delay={index * 0.06}
                    />
                ))}
            </BentoGrid>
        </Section>
    )
}
