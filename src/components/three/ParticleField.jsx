import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Brand palette for subtle per-particle color variation. */
const PALETTE = ['#3b82f6', '#8b5cf6', '#06b6d4']

/**
 * GPU-light particle field: a single `points` draw call with additive
 * blending. Geometry + material are memoized; the group slowly drifts and
 * tilts toward the pointer. Pointer is tracked globally so it works even
 * though the canvas sits under a `pointer-events-none` layer.
 *
 * @param {{ count?: number }} props
 */
export function ParticleField({ count = 3000 }) {
    const tiltRef = useRef(null)
    const spinRef = useRef(null)
    const pointer = useRef({ x: 0, y: 0 })

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const color = new THREE.Color()

        for (let i = 0; i < count; i++) {
            // Distribute in a spherical shell for depth without clumping.
            const r = 4 + Math.random() * 6
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = r * Math.cos(phi)

            color.set(PALETTE[(Math.random() * PALETTE.length) | 0])
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }
        return { positions, colors }
    }, [count])

    useEffect(() => {
        const onMove = (e) => {
            pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
            pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
        }
        window.addEventListener('pointermove', onMove, { passive: true })
        return () => window.removeEventListener('pointermove', onMove)
    }, [])

    useFrame((_, delta) => {
        const d = Math.min(delta, 0.05) // clamp after tab refocus
        if (spinRef.current) spinRef.current.rotation.y += d * 0.02
        if (tiltRef.current) {
            tiltRef.current.rotation.x = THREE.MathUtils.lerp(
                tiltRef.current.rotation.x,
                pointer.current.y * 0.12,
                0.03,
            )
            tiltRef.current.rotation.y = THREE.MathUtils.lerp(
                tiltRef.current.rotation.y,
                pointer.current.x * 0.12,
                0.03,
            )
        }
    })

    return (
        <group ref={tiltRef}>
            <points ref={spinRef} frustumCulled>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                    <bufferAttribute attach="attributes-color" args={[colors, 3]} />
                </bufferGeometry>
                <pointsMaterial
                    size={0.035}
                    vertexColors
                    transparent
                    opacity={0.85}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    )
}
