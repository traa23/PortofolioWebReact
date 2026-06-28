import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { FadeUp } from '@/components/animation/FadeUp'
import { ContactCTA } from './ContactCTA'
import { SocialLinks } from './SocialLinks'
import { contact } from '@/data/content'
import { profile } from '@/data/profile'

/** The calmest background of the page — everything points to the CTA. */
const ContactBackground = (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
        <div
            className="absolute inset-0"
            style={{
                background:
                    'radial-gradient(50% 50% at 50% 30%, color-mix(in srgb, var(--brand-primary) 7%, transparent), transparent 70%)',
            }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />
    </div>
)

/**
 * Contact — the closing editorial CTA. Centered, minimal, no long form;
 * one clear invitation to start a conversation. Motion: Fade + slight
 * scale, with the CTA arriving late.
 */
export function ContactSection() {
    return (
        <Section
            id="contact"
            aria-labelledby="contact-heading"
            background={ContactBackground}
        >
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <FadeUp>
                    <div className="relative">
                        <div className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            width={80}
                            height={80}
                            loading="lazy"
                            decoding="async"
                            className="size-20 rounded-full border border-border object-cover"
                        />
                    </div>
                </FadeUp>

                <SectionHeading
                    align="center"
                    eyebrow="Let's connect"
                    title="Let's build something great together"
                    subtitle={contact.description}
                    titleId="contact-heading"
                    className="mt-6 items-center"
                />

                <FadeUp delay={0.2} className="mt-8 w-full sm:w-auto">
                    <ContactCTA email={contact.email} />
                </FadeUp>

                <FadeUp delay={0.28} className="mt-10">
                    <SocialLinks />
                </FadeUp>
            </div>
        </Section>
    )
}
