import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
    PanelsTopLeft,
    Server,
    Database,
    BrainCircuit,
    Wrench,
    Braces,
} from 'lucide-react'
import { ScaleIn } from '@/components/animation/ScaleIn'
import { GlassCard } from '@/components/common/GlassCard'
import { SkillChip } from './SkillChip'
import { cn } from '@/lib/utils'

/** Category icon by key, with a safe fallback. */
const CATEGORY_ICONS = {
    frontend: PanelsTopLeft,
    backend: Server,
    database: Database,
    ai: BrainCircuit,
    tools: Wrench,
    languages: Braces,
}

/** Bento span tokens → responsive grid classes. */
const SPAN = {
    hero: 'md:col-span-2',
    wide: 'md:col-span-2 lg:col-span-3',
    normal: '',
}

/**
 * One Bento tile = one skill category. Sequenced motion: the tile scales
 * in first, then its chips stagger in once the tile finishes.
 *
 * @param {{ category: import('@/data/skills').SkillCategory, delay?: number }} props
 */
export function SkillCategoryCard({ category, delay = 0 }) {
    const reduced = useReducedMotion()
    const [chipsReady, setChipsReady] = useState(false)
    const show = reduced || chipsReady

    // Validate / sanitize so bad data can never break the layout.
    const title =
        typeof category?.title === 'string' && category.title.trim()
            ? category.title
            : 'Category'
    const items = Array.isArray(category?.skills) ? category.skills : []
    const Icon = CATEGORY_ICONS[category?.icon] ?? Braces
    const spanClass = SPAN[category?.span] ?? SPAN.normal

    return (
        <ScaleIn
            delay={delay}
            onComplete={() => setChipsReady(true)}
            className={cn('h-full', spanClass)}
        >
            <GlassCard className="flex h-full min-h-44 flex-col border-border/70 bg-card/30 p-6 backdrop-blur-md transition-transform duration-(--duration-base) hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-5 flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg border border-border bg-card/60 text-primary">
                        <Icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                        {title}
                    </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                        <motion.li
                            key={skill.name ?? index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                            transition={
                                reduced
                                    ? { duration: 0 }
                                    : { delay: index * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                            }
                        >
                            <SkillChip name={skill.name} icon={skill.icon} />
                        </motion.li>
                    ))}
                </ul>
            </GlassCard>
        </ScaleIn>
    )
}
