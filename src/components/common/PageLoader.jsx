/** Minimal Suspense fallback for lazy routes. */
export function PageLoader() {
    return (
        <div
            role="status"
            aria-label="Loading"
            className="grid min-h-svh place-items-center bg-background"
        >
            <span className="size-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
        </div>
    )
}
