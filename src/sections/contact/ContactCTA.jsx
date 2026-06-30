import { Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/common/MagneticButton'
import { RESUME_URL } from '@/constants/navigation'
import { cn } from '@/lib/utils'

/**
 * Primary contact actions: an email CTA (only when an address is provided)
 * and a CV download. Centered, equal-height buttons.
 *
 * @param {{ email?: string, className?: string }} props
 */
export function ContactCTA({ email, className }) {
    return (
        <div
            className={cn(
                'flex flex-col gap-3 sm:flex-row sm:justify-center',
                className,
            )}
        >
            {email && (
                <MagneticButton>
                    <Button asChild variant="glow" size="lg" className="w-full sm:w-auto">
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email me via Gmail"
                            data-cursor="hover"
                        >
                            <Mail className="size-4" />
                            Get in touch
                        </a>
                    </Button>
                </MagneticButton>
            )}

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open my CV"
                    data-cursor="hover"
                >
                    <Download className="size-4" />
                    Download CV
                </a>
            </Button>
        </div>
    )
}
