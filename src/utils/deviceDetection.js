/**
 * Lightweight device / capability detection used to scale 3D quality
 * and interactions (e.g. disable custom cursor on touch devices).
 */

/** @returns {boolean} True on coarse-pointer (touch) devices. */
export function isTouchDevice() {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(pointer: coarse)').matches
}

/** @returns {boolean} True for small viewports (mobile-sized). */
export function isMobileViewport() {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
}

/**
 * Estimate whether the device is low-powered (few cores / low memory)
 * so 3D scenes can render in a lighter mode.
 * @returns {boolean}
 */
export function isLowPowerDevice() {
    if (typeof navigator === 'undefined') return false
    const cores = navigator.hardwareConcurrency || 4
    const memory = navigator.deviceMemory || 4
    return cores <= 4 || memory <= 4 || isMobileViewport()
}

/**
 * Recommended renderer settings based on device capability.
 * @returns {{ dpr: [number, number], quality: 'low' | 'high' }}
 */
export function getRenderProfile() {
    if (isLowPowerDevice()) {
        return { dpr: [1, 1.5], quality: 'low' }
    }
    return { dpr: [1, 2], quality: 'high' }
}
