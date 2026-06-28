import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CertificateCard } from './CertificateCard'
import { certificates } from '@/data/content'

/** Calm background — certificates are evidence, not a spectacle. No 3D. */
const CertificatesBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(45% 50% at 80% 15%, color-mix(in srgb, var(--brand-accent) 6%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
)

/**
 * Certificates — an editorial showcase signalling consistent, ongoing
 * learning. Motion: Fade Up + slight scale.
 */
export function CertificatesSection() {
    if (!Array.isArray(certificates) || certificates.length === 0) return null

    return (
        <Section
            id="certificates"
            aria-labelledby="certificates-heading"
            background={CertificatesBackground}
        >
            <SectionHeading
                eyebrow="Certifications"
                title="Continuous learning"
                titleId="certificates-heading"
            />

            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {certificates.map((certificate, index) => (
                    <li key={certificate.id ?? index}>
                        <CertificateCard certificate={certificate} index={index} />
                    </li>
                ))}
            </ul>
        </Section>
    )
}
