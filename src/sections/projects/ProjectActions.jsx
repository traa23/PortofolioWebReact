import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Project action buttons. Each link only renders when its URL exists, so
 * there are never empty/dead buttons.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.github]
 * @param {string} [props.demo]
 * @param {string} [props.className]
 */
export function ProjectActions({ title, github, demo, className }) {
    if (!github && !demo) return null

    return (
        <div className={cn('flex flex-wrap gap-3', className)}>
            {demo && (
                <Button asChild size="sm" variant="glow">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open the ${title} live demo`}
                        data-cursor="hover"
                    >
                        <ExternalLink className="size-4" />
                        Live Demo
                    </a>
                </Button>
            )}
            {github && (
                <Button asChild size="sm" variant="outline">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View the ${title} source code on GitHub`}
                        data-cursor="hover"
                    >
                        <FaGithub className="size-4" />
                        Code
                    </a>
                </Button>
            )}
        </div>
    )
}
