import {
    GraduationCap,
    MapPin,
    Layers,
    Target,
    Hammer,
    BookOpen,
    Compass,
} from 'lucide-react'
import { FadeUp } from '@/components/animation/FadeUp'
import { GlassCard } from '@/components/common/GlassCard'
import { about } from '@/data/content'

const FACTS = [
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'basedIn', label: 'Based in', icon: MapPin },
    { key: 'specialization', label: 'Specialization', icon: Layers },
    { key: 'currentGoal', label: 'Current goal', icon: Target },
]

const CURRENTLY = [
    { key: 'building', label: 'Building', icon: Hammer },
    { key: 'learning', label: 'Learning', icon: BookOpen },
    { key: 'exploring', label: 'Exploring', icon: Compass },
]

/** A single icon + label + value row. Shows a dash placeholder when empty. */
function FactRow({ icon: Icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card/60 text-primary">
                <Icon className="size-4.5" />
            </span>
            <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                </p>
                <p className="mt-0.5 font-medium text-foreground">
                    {value || <span className="text-muted-foreground/40">—</span>}
                </p>
            </div>
        </div>
    )
}

/**
 * About right column — a glass "personal facts" card. Designed to feel
 * personal, not like a CV. Includes a "Currently" block to signal the
 * portfolio is actively evolving.
 */
export function AboutFacts() {
    return (
        <FadeUp delay={0.1}>
            <GlassCard accent className="p-6 md:p-7">
                <ul className="space-y-5">
                    {FACTS.map((fact) => (
                        <li key={fact.key}>
                            <FactRow
                                icon={fact.icon}
                                label={fact.label}
                                value={about.facts[fact.key]}
                            />
                        </li>
                    ))}
                </ul>

                <div className="my-6 h-px bg-border" />

                <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
                    Currently
                </p>
                <ul className="space-y-4">
                    {CURRENTLY.map((item) => (
                        <li key={item.key}>
                            <FactRow
                                icon={item.icon}
                                label={item.label}
                                value={about.currently[item.key]}
                            />
                        </li>
                    ))}
                </ul>
            </GlassCard>
        </FadeUp>
    )
}
