import { createContext, useContext } from 'react'

/**
 * @typedef {Object} ThemeContextValue
 * @property {'light'|'dark'|'system'} theme        Selected preference.
 * @property {'light'|'dark'}          resolvedTheme Actual applied theme.
 * @property {(theme: 'light'|'dark'|'system') => void} setTheme
 * @property {() => void} toggleTheme Toggle between light and dark.
 */

/** @type {import('react').Context<ThemeContextValue | null>} */
export const ThemeContext = createContext(null)

/**
 * Access the theme system.
 * @returns {ThemeContextValue}
 */
export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
