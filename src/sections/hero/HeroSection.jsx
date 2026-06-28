import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroPhoto } from './HeroPhoto'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { Hero3D } from './Hero3D'

/**
 * Hero — the first impression. Split layout (~58/42): identity + CTA on
 * the left, photo focal point on the right. Generous negative space keeps
 * the name and photo as the only two focal points. On mobile the photo
 * stacks above the text. The 3D particle layer is injected later as a
 * progressive enhancement — the hero is designed to feel premium without it.
 */
export function HeroSection() {
    return (
        <section
            id="home"
            aria-label="Introduction"
            className="relative isolate flex min-h-svh items-center overflow-hidden"
        >
            <HeroBackground>
                <Hero3D />
            </HeroBackground>

            <div className="mx-auto grid w-full max-w-(--container-max) items-center gap-14 px-6 pb-28 pt-32 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-20">
                <div className="order-2 md:order-1">
                    <HeroContent />
                </div>
                <div className="order-1 md:order-2">
                    <HeroPhoto />
                </div>
            </div>

            <HeroScrollIndicator />
        </section>
    )
}
