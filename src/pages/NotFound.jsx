import { Link } from 'react-router-dom'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export default function NotFound() {
    return (
        <section className="grid min-h-svh place-items-center px-6 text-center">
            <Seo title="404 — Not Found" noIndex />
            <div className="space-y-6">
                <p className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                    404
                </p>
                <h1 className="text-2xl font-semibold tracking-tight">
                    This page drifted into deep space.
                </h1>
                <p className="mx-auto max-w-md text-muted-foreground">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Button asChild variant="glow">
                    <Link to={ROUTES.HOME}>Back to home</Link>
                </Button>
            </div>
        </section>
    )
}
