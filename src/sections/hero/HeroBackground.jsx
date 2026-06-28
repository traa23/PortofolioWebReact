/**
 * Layered hero background. Order (back → front):
 *   1. Solid base (inherits page background)
 *   2. Gradient mesh (weighted toward the photo side, calm behind text)
 *   3. Masked dot-grid (engineered feel, fades at edges)
 *   4. Aurora (slow drifting blurred blobs)
 *   5. 3D particle field slot — injected via `children` (3D stage)
 *   6. Noise grain + edge vignette + bottom fade
 * All layers are decorative and never capture pointer events.
 *
 * @param {{ children?: import('react').ReactNode }} props
 */
export function HeroBackground({ children }) {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            {/* Layer 2 — gradient mesh (color weighted to the right/photo side) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(55% 50% at 80% 28%, color-mix(in srgb, var(--brand-secondary) 16%, transparent), transparent 70%),' +
                        'radial-gradient(40% 40% at 12% 18%, color-mix(in srgb, var(--brand-primary) 7%, transparent), transparent 72%),' +
                        'radial-gradient(45% 40% at 60% 100%, color-mix(in srgb, var(--brand-accent) 9%, transparent), transparent 72%)',
                }}
            />

            {/* Layer 3 — masked dot-grid (fades toward edges) */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(75%_70%_at_50%_45%,#000,transparent)]" />

            {/* Layer 4 — aurora blobs (calmer on the text side) */}
            <div className="absolute -left-32 top-10 size-[30rem] rounded-full bg-primary/12 blur-[130px] animate-aurora-a" />
            <div className="absolute -right-24 top-0 size-[34rem] rounded-full bg-secondary/20 blur-[130px] animate-aurora-b" />
            <div className="absolute bottom-[-12rem] left-1/2 size-[30rem] rounded-full bg-accent/14 blur-[150px] animate-aurora-c" />

            {/* Layer 5 — 3D particle field slot */}
            {children}

            {/* Layer 6 — grain, edge vignette, bottom fade */}
            <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
            <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_40%,transparent_55%,color-mix(in_srgb,var(--brand-bg)_70%,transparent))]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>
    )
}
