import { Download } from 'lucide-react'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { MagneticButton } from '@/components/common/MagneticButton'
import { Button } from '@/components/ui/button'
import { RESUME_URL, SCROLL_OFFSET } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scrollToSection'
import { cn } from '@/lib/utils'

/**
 * Right-side navbar actions: theme toggle, resume download, CTA.
 * @param {{ className?: string, onAction?: () => void }} props
 */
export function NavActions({ className, onAction }) {
    const goContact = () => {
        scrollToSection('contact', SCROLL_OFFSET)
        onAction?.()
    }

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <ThemeToggle />

            <Button asChild variant="outline" size="sm">
                <a href={RESUME_URL} download data-cursor="hover">
                    <Download className="size-4" />
                    Resume
                </a>
            </Button>

            <MagneticButton>
                <Button variant="glow" size="sm" onClick={goContact}>
                    Let&apos;s talk
                </Button>
            </MagneticButton>
        </div>
    )
}
