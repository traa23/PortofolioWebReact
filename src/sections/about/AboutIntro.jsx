import { FadeUp } from '@/components/animation/FadeUp'
import { Badge } from '@/components/ui/badge'
import { about } from '@/data/content'

/**
 * About left column — narrative, working principle, and up to four
 * interest chips. Renders gracefully while data is still empty.
 */
export function AboutIntro() {
    const interests = about.interests.slice(0, 4)

    return (
        <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
                <FadeUp key={index} delay={0.05 * index}>
                    <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                        {paragraph}
                    </p>
                </FadeUp>
            ))}

            {about.philosophy && (
                <FadeUp delay={0.1}>
                    <blockquote className="border-l-2 border-primary/50 pl-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
                            Principle
                        </p>
                        <p className="mt-1.5 text-base font-medium text-foreground/90">
                            {about.philosophy}
                        </p>
                    </blockquote>
                </FadeUp>
            )}

            {interests.length > 0 && (
                <FadeUp delay={0.15}>
                    <ul className="flex flex-wrap gap-2 pt-1">
                        {interests.map((interest) => (
                            <li key={interest}>
                                <Badge variant="glass" className="px-3 py-1 text-sm">
                                    {interest}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </FadeUp>
            )}
        </div>
    )
}
