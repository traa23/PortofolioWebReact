import { CardReveal, RevealItem } from '@/components/animation/CardReveal'
import { GlassCard } from '@/components/common/GlassCard'
import { Badge } from '@/components/ui/badge'
import { ProjectTechList } from './ProjectTechList'
import { ProjectActions } from './ProjectActions'
import { cn } from '@/lib/utils'

/** Max tech chips shown on a featured card (rest collapse into "+N"). */
const MAX_TECH = 5

/** Keep bad/missing data from breaking the layout. */
function sanitize(project) {
    return {
        title:
            typeof project?.title === 'string' && project.title.trim()
                ? project.title
                : 'Untitled project',
        description:
            typeof project?.description === 'string' ? project.description : '',
        tech: Array.isArray(project?.tech) ? project.tech : [],
        github: project?.github || null,
        demo: project?.demo || null,
        badge: project?.badge || null,
    }
}

/**
 * A featured project (text-only). `size="lg"` makes the first (best)
 * project the most dominant, and it always carries a badge ("Featured" by
 * default). Information order is fixed: Badge → Title → Description → Tech
 * → Actions. Motion is sequenced: content → tech → buttons.
 *
 * @param {Object} props
 * @param {import('@/data/projects').Project} props.project
 * @param {'lg'|'md'} [props.size='md']
 */
export function FeaturedProjectCard({ project, size = 'md' }) {
    const { title, description, tech, github, demo, badge } = sanitize(project)
    const big = size === 'lg'
    const displayBadge = badge ?? (big ? 'Featured' : null)

    return (
        <CardReveal className="group">
            <GlassCard
                accent={big}
                className="border-border/70 bg-card/30 p-6 transition-transform duration-(--duration-base) hover:-translate-y-1 hover:border-primary/30 md:p-8"
            >
                <RevealItem delay={0}>
                    {displayBadge && (
                        <Badge variant="glass" className="mb-3">
                            {displayBadge}
                        </Badge>
                    )}
                    <h3
                        className={cn(
                            'font-bold tracking-tight',
                            big ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
                        )}
                    >
                        {title}
                    </h3>
                    {description && (
                        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                            {description}
                        </p>
                    )}
                </RevealItem>

                <RevealItem delay={0.1} className="mt-5">
                    <ProjectTechList tech={tech} max={MAX_TECH} />
                </RevealItem>

                <RevealItem delay={0.18} className="mt-6">
                    <ProjectActions title={title} github={github} demo={demo} />
                </RevealItem>
            </GlassCard>
        </CardReveal>
    )
}
