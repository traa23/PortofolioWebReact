/**
 * Detect whether WebGL is available. Used to decide if the 3D layer can
 * be enabled at all — if not, the hero falls back to the CSS-only design.
 * @returns {boolean}
 */
export function isWebGLAvailable() {
    if (typeof window === 'undefined') return false
    try {
        const canvas = document.createElement('canvas')
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        )
    } catch {
        return false
    }
}
