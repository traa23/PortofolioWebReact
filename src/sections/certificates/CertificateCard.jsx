import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { Award, ExternalLink } from 'lucide-react'
import { GlassCard } from '@/components/common/GlassCard'
import { Button } from '@/components/ui/button'

/** Keep bad/missing data from breaking the layout. */
function sanitize(certificate) {
    return {
        name:
            typeof certificate?.name === 'string' && certificate.name.trim()
                ? certificate.name
                : 'Certificate',
        issuer: typeof certificate?.issuer === 'string' ? certificate.issuer : '',
        year: certificate?.year ? String(certificate.year) : '',
        logo: typeof certificate?.logo === 'string' ? certificate.logo : '',
        verifyUrl: certificate?.verifyUrl || null,
    }
}

/**
 * A single certificate card: issuer logo (or a fallback award icon),
 * certificate name, issuer · year, and an optional Verify link.
 * Reveal motion = Fade Up + slight scale, once.
 *
 * @param {{ certificate: import('@/data/certificates').Certificate, index?: number }} props
 */
export function CertificateCard({ certificate, index = 0 }) {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const { name, issuer, year, logo, verifyUrl } = sanitize(certificate)

    const motionProps = reduced
        ? {}
        : {
            initial: { opacity: 0, y: 16, scale: 0.98 },
            animate: inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 16, scale: 0.98 },
            transition: { delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        }

    const meta = [issuer, year].filter(Boolean).join(' · ')

    return (
        <motion.div ref={ref} {...motionProps} className="h-full">
            <GlassCard className="flex h-full flex-col border-border/70 bg-card/30 p-5 transition-transform duration-(--duration-base) hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-4 grid size-12 place-items-center overflow-hidden rounded-xl border border-border bg-card/60">
                    {logo ? (
                        <img
                            src={logo}
                            alt={`${issuer || name} logo`}
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            className="size-full object-contain p-1.5"
                        />
                    ) : (
                        <Award className="size-6 text-primary" aria-hidden="true" />
                    )}
                </div>

                <h3 className="font-semibold leading-snug tracking-tight">{name}</h3>
                {meta && <p className="mt-1 text-sm text-muted-foreground">{meta}</p>}

                {verifyUrl && (
                    <div className="mt-auto pt-4">
                        <Button asChild size="sm" variant="outline">
                            <a
                                href={verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Verify the ${name} certificate`}
                                data-cursor="hover"
                            >
                                <ExternalLink className="size-4" />
                                Verify
                            </a>
                        </Button>
                    </div>
                )}
            </GlassCard>
        </motion.div>
    )
}
