/** Accessibility: lets keyboard users jump straight to main content. */
export function SkipToContent() {
    return (
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
            Skip to content
        </a>
    )
}
