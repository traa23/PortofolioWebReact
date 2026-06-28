import { Canvas } from '@react-three/fiber'
import { ParticleField } from './ParticleField'
import { FloatingRing } from './FloatingRing'

/**
 * Hero WebGL canvas (default export → lazy-loaded; three.js stays out of
 * the initial bundle). Transparent so the CSS background layers show
 * through. `frameloop` is toggled to 'never' by the caller to pause
 * rendering when off-screen or when the tab is hidden.
 *
 * @param {Object} props
 * @param {[number, number]} props.dpr
 * @param {number} props.count          Particle count.
 * @param {'always'|'never'} props.frameloop
 * @param {boolean} props.showRing      Render the floating ring.
 * @param {number} props.ringScale
 */
export default function HeroCanvas({
    dpr,
    count,
    frameloop,
    showRing = false,
    ringScale = 1,
}) {
    return (
        <Canvas
            frameloop={frameloop}
            dpr={dpr}
            gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
            camera={{ position: [0, 0, 9], fov: 60 }}
            style={{ position: 'absolute', inset: 0 }}
        >
            <ParticleField count={count} />
            {showRing && <FloatingRing scale={ringScale} />}
        </Canvas>
    )
}
