import { CardReveal } from '@/components/animation/CardReveal'
import { GlassCard } from '@/components/common/GlassCard'
import { ProjectImage } from './ProjectImage'
import { ProjectTechList } from './ProjectTechList'
import { ProjectActions } from './ProjectActions'

/** A compact card for non-featured projects. */
function OtherProjectCard({ project }) {
    const title = project?.title?.trim() || 'Untitled project'
    const description = project?.description || ''

    return (
        <CardReveal className="group h-full">
            <GlassCard className="flex h-full flex-col overflow-hidden border-border/70 bg-card/30 transition-transform duration-(--duration-base) hover:-translate-y-1 hover:border-primary/30">
                <ProjectImage
                    src={project?.image}
                    alt={`${title} preview`}
                    className="aspect-[16/10] w-full"
                />
                <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-semibold tracking-tight">{title}</h4>
                    {description && (
                        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                            {description}
                        </p>
                    )}
                    <div className="mt-4">
                        <ProjectTechList tech={project?.tech} max={4} />
                    </div>
                    <div className="mt-auto pt-5">
                        <ProjectActions
                            title={title}
                            github={project?.github}
                            demo={project?.demo}
                        />
                    </div>
                </div>
            </GlassCard>
        </CardReveal>
    )
}

/**
 * Other Projects — a simple grid that signals breadth without competing
 * with the featured showcase above it.
 *
 * @param {{ projects: import('@/data/projects').Project[] }} props
 */
export function OtherProjectsGrid({ projects }) {
    if (!Array.isArray(projects) || projects.length === 0) return null

    return (
        <div className="mt-20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Other Projects
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <OtherProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
