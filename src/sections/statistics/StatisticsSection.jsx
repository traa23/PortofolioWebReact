import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatCard } from './StatCard'
import { stats } from '@/data/content'

/**
 * Transition-energy background: a touch livelier than About (two soft
 * tints + hairline separators) but far calmer than the hero. No 3D.
 */
const StatsBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(45% 60% at 20% 10%, color-mix(in srgb, var(--brand-primary) 7%, transparent), transparent 70%),' +
                    'radial-gradient(45% 60% at 85% 90%, color-mix(in srgb, var(--brand-accent) 6%, transparent), transparent 70%)',
            }}
        />
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * Statistics — a compact credibility band that bridges About and Skills.
 * Motion: Scale (card) then NumberTicker (count), sequenced.
 */
export function StatisticsSection() {
    if (stats.length === 0) return null

    return (
        <Section
            id="statistics"
            aria-labelledby="statistics-heading"
            background={StatsBackground}
            className="py-20 md:py-24"
        >
            <SectionHeading
                eyebrow="By the numbers"
                title="Building experience through every project"
                titleId="statistics-heading"
            />

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={stat.id} stat={stat} delay={index * 0.08} />
                ))}
            </div>
        </Section>
    )
}
