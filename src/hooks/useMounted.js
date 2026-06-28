import { useEffect, useState } from 'react'

/**
 * True after the component has mounted on the client.
 * Useful to defer client-only UI (cursor, portals) and avoid hydration
 * or SSR mismatches.
 * @returns {boolean}
 */
export function useMounted() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return mounted
}
