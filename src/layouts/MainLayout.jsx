import { Outlet } from 'react-router-dom'
import { SkipToContent } from '@/components/layout/SkipToContent'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { BackToTop } from '@/components/layout/BackToTop'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import { PageTransition } from '@/components/animation/PageTransition'

/**
 * App shell shared by every page: loading screen, skip link, scroll
 * progress, navbar, animated page content, footer and back-to-top.
 * Pages render through <Outlet/>.
 */
export default function MainLayout() {
    return (
        <>
            <LoadingScreen />
            <SkipToContent />
            <ScrollProgress />
            <Navbar />

            <main id="main" className="min-h-svh">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>

            <Footer />
            <BackToTop />
        </>
    )
}
