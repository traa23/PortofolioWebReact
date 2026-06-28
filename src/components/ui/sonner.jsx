import { Toaster as Sonner } from 'sonner'
import { useTheme } from '@/contexts/theme-context'

/**
 * App-wide toast renderer. Theme follows the active design-system theme.
 * @param {import('sonner').ToasterProps} props
 */
function Toaster(props) {
    const { resolvedTheme } = useTheme()

    return (
        <Sonner
            theme={resolvedTheme}
            className="toaster group"
            position="bottom-right"
            toastOptions={{
                classNames: {
                    toast:
                        'group toast group-[.toaster]:bg-popover group-[.toaster]:text-popover-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur',
                    description: 'group-[.toast]:text-muted-foreground',
                    actionButton:
                        'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                    cancelButton:
                        'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
                },
            }}
            style={{ zIndex: 'var(--z-toast)' }}
            {...props}
        />
    )
}

export { Toaster }
