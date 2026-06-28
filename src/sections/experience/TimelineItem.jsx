import { motion, useReducedMotion } from 'motion/react'
import { Trophy } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { Badge } from '@/components/ui/badge'
import { TechIcon } from '@/components/common/TechIcon'
import { TimelineNode } from './TimelineNode'
import { cn } from '@/lib/utils'

/** Normalize a tech entry to { name, icon }. */
function normalizeTech(t) {
    return typeof t === 'string' ? { name: t } : t || {}
}

/**
 * One milestone in the developer-journey timeline.
 * Desktop: cards alternate left/right around a centered rail.
 * Mobile: rail on the left, every card on the right (no alternating).
 * Motion is sequenced (node, then card) and runs once.
 *
 * @param {Object} props
 * @param {import('@/data/experience').Milestone} props.item
 * @param {number} props.index
 * @param {boolean} props.active
 */
export function TimelineItem({ item, index, active }) {
    const reduced = useReducedMotion()
    const left = index % 2 === 0 // even → card on the left (text aligned right)

    const nodeDelay = 0.2 + index * 0.12
    const cardDelay = nodeDelay + 0.12
    const tech = Array.isArray(item?.tech) ? item.tech.map(normalizeTech) : []

    const cardMotion = reduced
        ? {}
        : {
            initial: { opacity: 0, x: left ? -24 : 24 },
            animate: active ? { opacity: 1, x: 0 } : { opacity: 0, x: left ? -24 : 24 },
            transition: { delay: cardDelay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        }

    return (
        <li className="relative md:grid md:grid-cols-2 md:gap-x-12">
            <TimelineNode current={item?.current} active={active} delay={nodeDelay} />

            <motion.div
                {...cardMotion}
                className={cn(
                    'ml-12 md:ml-0',
                    left ? 'md:col-start-1 md:pr-12' : 'md:col-start-2 md:pl-12',
                )}
            >
                <GlassCard
                    className={cn(
                        'border-border/70 bg-card/30 p-5 md:p-6',
                        item?.current && 'border-primary/40',
                    )}
                >
                    <div className={cn('flex flex-col', left && 'md:items-end md:text-right')}>
                        <span className="text-sm font-semibold tracking-wide">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {item?.year || '—'}
                            </span>
                        </span>

                        <h3 className="mt-1 flex items-center gap-2 text-lg font-bold tracking-tight">
                            {item?.title || 'Milestone'}
                            {item?.current && (
                                <Badge variant="glass" className="text-[10px]">
                                    Now
                                </Badge>
                            )}
                        </h3>

                        {item?.description && (
                            <p className="mt-2 line-clamp-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                        )}

                        {tech.length > 0 && (
                            <ul
                                className={cn(
                                    'mt-4 flex flex-wrap gap-2',
                                    left && 'md:justify-end',
                                )}
                            >
                                {tech.map((t, i) => (
                                    <li key={t.name ?? i}>
                                        <span className="group inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-card/40 px-2">
                                            <TechIcon icon={t.icon} className="size-3.5" />
                                            <span className="whitespace-nowrap text-xs text-foreground/90">
                                                {t.name}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {item?.achievement && (
                            <p
                                className={cn(
                                    'mt-4 inline-flex items-center gap-2 text-sm text-foreground/90',
                                    left && 'md:flex-row-reverse md:text-right',
                                )}
                            >
                                <Trophy className="size-4 shrink-0 text-accent" aria-hidden="true" />
                                {item.achievement}
                            </p>
                        )}
                    </div>
                </GlassCard>
            </motion.div>
        </li>
    )
}
