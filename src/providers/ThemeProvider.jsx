import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/contexts/theme-context'
import {
    DEFAULT_THEME,
    THEMES,
    THEME_STORAGE_KEY,
} from '@/constants/theme'

const SYSTEM_QUERY = '(prefers-color-scheme: dark)'

/** @returns {'light'|'dark'} */
function getSystemTheme() {
    if (typeof window === 'undefined') return THEMES.DARK
    return window.matchMedia(SYSTEM_QUERY).matches ? THEMES.DARK : THEMES.LIGHT
}

/** @returns {'light'|'dark'|'system'} */
function getStoredTheme() {
    if (typeof window === 'undefined') return DEFAULT_THEME
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored && Object.values(THEMES).includes(stored)
        ? stored
        : DEFAULT_THEME
}

/**
 * Provides the Light / Dark / System theme system using a class on
 * <html> and CSS variables defined in the design tokens.
 *
 * @param {{ children: import('react').ReactNode }} props
 */
export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(getStoredTheme)
    const [systemTheme, setSystemTheme] = useState(getSystemTheme)

    const resolvedTheme = theme === THEMES.SYSTEM ? systemTheme : theme

    // Keep track of the OS preference when "system" is selected.
    useEffect(() => {
        const media = window.matchMedia(SYSTEM_QUERY)
        const onChange = () =>
            setSystemTheme(media.matches ? THEMES.DARK : THEMES.LIGHT)
        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    }, [])

    // Apply the resolved theme to the document element.
    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', resolvedTheme === THEMES.DARK)
        root.style.colorScheme = resolvedTheme
    }, [resolvedTheme])

    const setTheme = useCallback((next) => {
        setThemeState(next)
        window.localStorage.setItem(THEME_STORAGE_KEY, next)
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    }, [resolvedTheme, setTheme])

    const value = useMemo(
        () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
        [theme, resolvedTheme, setTheme, toggleTheme],
    )

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
