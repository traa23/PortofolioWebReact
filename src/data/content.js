/**
 * Resolved content layer.
 *
 * Sections import their content from here (not directly from the raw data
 * files), so Development Preview can transparently fill blanks in dev while
 * production always uses the real `data/*.js` values.
 *
 * The `import.meta.env.DEV` gate lets the bundler dead-code-eliminate the
 * preview imports entirely from production builds.
 */
import { withPreview } from '@/lib/preview'
import { about as aboutData } from './about'
import { aboutPreview } from './about.preview'
import { stats as statsData } from './stats'
import { statsPreview } from './stats.preview'
import { skills as skillsData } from './skills'
import { skillsPreview } from './skills.preview'
import { projects as projectsData } from './projects'
import { projectsPreview } from './projects.preview'
import { experience as experienceData } from './experience'
import { experiencePreview } from './experience.preview'
import { certificates as certificatesData } from './certificates'
import { certificatesPreview } from './certificates.preview'
import { socials as socialsData } from './socials'
import { socialsPreview } from './socials.preview'
import { contact as contactData } from './contact'
import { contactPreview } from './contact.preview'

export const about = import.meta.env.DEV
    ? withPreview(aboutData, aboutPreview)
    : aboutData

export const stats = import.meta.env.DEV
    ? withPreview(statsData, statsPreview)
    : statsData

export const skills = import.meta.env.DEV
    ? withPreview(skillsData, skillsPreview)
    : skillsData

export const projects = import.meta.env.DEV
    ? withPreview(projectsData, projectsPreview)
    : projectsData

export const experience = import.meta.env.DEV
    ? withPreview(experienceData, experiencePreview)
    : experienceData

export const certificates = import.meta.env.DEV
    ? withPreview(certificatesData, certificatesPreview)
    : certificatesData

export const socials = import.meta.env.DEV
    ? withPreview(socialsData, socialsPreview)
    : socialsData

export const contact = import.meta.env.DEV
    ? withPreview(contactData, contactPreview)
    : contactData
