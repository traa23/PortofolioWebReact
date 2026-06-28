import { ThemeProvider } from './ThemeProvider'
import { LenisProvider } from './LenisProvider'
import { CursorProvider } from './CursorProvider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

/**
 * Global provider composition (theme, tooltips, smooth scroll, cursor,
 * toasts). Order matters: ThemeProvider must wrap consumers of the theme
 * (Toaster).
 *
 * @param {{ children: import('react').ReactNode }} props
 */
export function AppProviders({ children }) {
    return (
        <ThemeProvider>
            <TooltipProvider delayDuration={200} skipDelayDuration={300}>
                <LenisProvider>
                    <CursorProvider>{children}</CursorProvider>
                </LenisProvider>
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    )
}
