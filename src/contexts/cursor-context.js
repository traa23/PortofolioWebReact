import { createContext, useContext } from 'react'

/**
 * @typedef {'default' | 'hover' | 'click'} CursorVariant
 * @typedef {Object} CursorContextValue
 * @property {CursorVariant} variant
 * @property {(variant: CursorVariant) => void} setVariant
 * @property {boolean} enabled  Whether the custom cursor is active.
 */

/** @type {import('react').Context<CursorContextValue>} */
export const CursorContext = createContext({
    variant: 'default',
    setVariant: () => { },
    enabled: false,
})

/** @returns {CursorContextValue} */
export function useCursor() {
    return useContext(CursorContext)
}
