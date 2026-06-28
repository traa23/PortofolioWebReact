import { Seo } from '@/seo/Seo'
import { personSchema } from '@/seo/structured-data'
import { HeroSection } from '@/sections/hero/HeroSection'
import { AboutSection } from '@/sections/about/AboutSection'
import { StatisticsSection } from '@/sections/statistics/StatisticsSection'
import { SkillsSection } from '@/sections/skills/SkillsSection'
import { ProjectsSection } from '@/sections/projects/ProjectsSection'
import { ExperienceSection } from '@/sections/experience/ExperienceSection'
import { CertificatesSection } from '@/sections/certificates/CertificatesSection'
import { ContactSection } from '@/sections/contact/ContactSection'

/**
 * Home page — the full single-page portfolio.
 */
export default function Home() {
    return (
        <>
            <Seo jsonLd={personSchema()} />

            <HeroSection />
            <AboutSection />
            <StatisticsSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificatesSection />
            <ContactSection />
        </>
    )
}
