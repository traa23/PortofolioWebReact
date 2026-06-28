import { useState } from 'react'
import { FolderGit2, Award, Cpu, TrendingUp } from 'lucide-react'
import { ScaleIn } from '@/components/animation/ScaleIn'
import { GlassCard } from '@/components/common/GlassCard'
import { NumberTicker } from '@/components/magic-ui/NumberTicker'

/** Simple, small, consistent outline icons (with a safe fallback). */
const STAT_ICONS = {
    projects: FolderGit2,
    certificates: Award,
    technologies: Cpu,
    learning: TrendingUp,
}
const FALLBACK_ICON = TrendingUp

/** Suffixes the ticker is allowed to render; anything else is dropped. */
const SUPPORTED_SUFFIXES = new Set(['', '+', 'k', '%'])

/**
 * Validate + sanitize a stat from data so bad/missing values can never
 * break the UI. Returns safe, render-ready fields.
 * @param {import('@/data/stats').Stat} stat
 */
function sanitizeStat(stat) {
    const value = Number.isFinite(stat?.value) ? stat.value : 0
    const suffix = SUPPORTED_SUFFIXES.has(stat?.suffix) ? stat.suffix : ''
    const label =
        typeof stat?.label === 'string' && stat.label.trim() ? stat.label : '—'
    const Icon = STAT_ICONS[stat?.icon] ?? FALLBACK_ICON
    return { value, suffix, label, Icon }
}

/**
 * One statistic. The card scales in first; only once that finishes does
 * the NumberTicker begin counting (sequenced, not simultaneous).
 *
 * @param {{ stat: import('@/data/stats').Stat, delay?: number }} props
 */
export function StatCard({ stat, delay = 0 }) {
    const [counting, setCounting] = useState(false)
    const { value, suffix, label, Icon } = sanitizeStat(stat)

    return (
        <ScaleIn delay={delay} onComplete={() => setCounting(true)} className="h-full">
            <GlassCard className="flex h-full flex-col border-border/70 bg-card/25 p-5 backdrop-blur-md sm:p-6">
                <Icon className="size-5 text-muted-foreground" strokeWidth={1.75} />

                <p className="mt-4 text-[clamp(2.25rem,5vw,3rem)] font-bold leading-none tracking-tight">
                    <NumberTicker
                        value={value}
                        suffix={suffix}
                        start={counting}
                        className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    />
                </p>

                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </GlassCard>
        </ScaleIn>
    )
}
