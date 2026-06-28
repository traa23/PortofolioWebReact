import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A single, very thin, translucent ring that floats behind the photo to
 * add depth + framing — never a focal object. No glow/additive blending,
 * no lighting (basic material), extremely slow motion so it never reads
 * like a Three.js demo. Geometry + material are memoized.
 *
 * Positioned to the right (photo side) so it never enters the text area.
 *
 * @param {{ scale?: number }} props
 */
export function FloatingRing({ scale = 1 }) {
    const ref = useRef(null)

    const geometry = useMemo(
        // radius, tube (very thin), radialSegments, tubularSegments
        () => new THREE.TorusGeometry(2.2, 0.012, 16, 160),
        [],
    )
    const material = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: new THREE.Color('#7c8cf0'),
                transparent: true,
                opacity: 0.28,
                side: THREE.DoubleSide,
                depthWrite: false,
            }),
        [],
    )

    useFrame((_, delta) => {
        const d = Math.min(delta, 0.05)
        if (!ref.current) return
        ref.current.rotation.z += d * 0.04
        ref.current.rotation.y += d * 0.02
    })

    return (
        <mesh
            ref={ref}
            geometry={geometry}
            material={material}
            position={[2.4, 0.1, -1]}
            rotation={[0.62, -0.35, 0]}
            scale={scale}
            frustumCulled
        />
    )
}
