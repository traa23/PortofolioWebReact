import { CardReveal, RevealItem } from '@/components/animation/CardReveal'
import { GlassCard } from '@/components/common/GlassCard'
import { Badge } from '@/components/ui/badge'
import { ProjectImage } from './ProjectImage'
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
        image: typeof project?.image === 'string' ? project.image : '',
        tech: Array.isArray(project?.tech) ? project.tech : [],
        github: project?.github || null,
        demo: project?.demo || null,
        badge: project?.badge || null,
    }
}

/**
 * A featured project: alternating image/text columns. `size="lg"` makes
 * the first (best) project the most dominant, and it always carries a
 * badge ("Featured" by default). Information order is fixed:
 * Badge → Title → Description → Tech → Actions. Motion is sequenced:
 * image → content → tech → buttons.
 *
 * @param {Object} props
 * @param {import('@/data/projects').Project} props.project
 * @param {boolean} [props.reversed=false]  Image on the right.
 * @param {'lg'|'md'} [props.size='md']
 */
export function FeaturedProjectCard({ project, reversed = false, size = 'md' }) {
    const { title, description, image, tech, github, demo, badge } =
        sanitize(project)
    const big = size === 'lg'
    const displayBadge = badge ?? (big ? 'Featured' : null)

    return (
        <CardReveal className="group">
            <GlassCard
                accent={big}
                className="overflow-hidden border-border/70 bg-card/30 transition-transform duration-(--duration-base) hover:-translate-y-1 hover:border-primary/30"
            >
                <div className="grid md:grid-cols-2">
                    {/* Image — consistent 16/10 box across all cards */}
                    <RevealItem
                        delay={0}
                        className={cn(
                            'order-1 md:self-center',
                            reversed ? 'md:order-2' : 'md:order-1',
                        )}
                    >
                        <ProjectImage
                            src={image}
                            alt={`${title} preview`}
                            className="aspect-[16/10] w-full"
                        />
                    </RevealItem>

                    {/* Panel */}
                    <div
                        className={cn(
                            'order-2 flex flex-col justify-center p-6 md:p-8',
                            reversed ? 'md:order-1' : 'md:order-2',
                            big && 'lg:p-10',
                        )}
                    >
                        <RevealItem delay={0.12}>
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
                                <p className="mt-3 line-clamp-3 max-w-prose leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </RevealItem>

                        <RevealItem delay={0.22} className="mt-5">
                            <ProjectTechList tech={tech} max={MAX_TECH} />
                        </RevealItem>

                        <RevealItem delay={0.32} className="mt-6">
                            <ProjectActions title={title} github={github} demo={demo} />
                        </RevealItem>
                    </div>
                </div>
            </GlassCard>
        </CardReveal>
    )
}
