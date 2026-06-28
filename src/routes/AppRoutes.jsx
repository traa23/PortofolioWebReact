import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import { PageLoader } from '@/components/common/PageLoader'
import { ROUTES } from '@/constants/routes'

// Code-split every page. Add new pages the same way.
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/**
 * Application routes. To add a page:
 *   1. add a path to ROUTES (constants/routes.js)
 *   2. create a lazy page component
 *   3. add a <Route> inside the MainLayout layout route below
 */
export function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<Home />} />
                        {/* Future pages: /projects, /project/:slug, /blog, /gallery,
                /certificates, /contact, /privacy — drop them here. */}
                        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
