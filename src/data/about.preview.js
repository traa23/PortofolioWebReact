/**
 * DEV-ONLY preview content for the About section.
 * Never bundled into production (see src/lib/preview.js). Lets us evaluate
 * layout realistically without putting placeholder data in production.
 * @type {import('./about').About}
 */
export const aboutPreview = {
    headline: 'I build thoughtful interfaces where design meets engineering.',
    paragraphs: [
        "I'm an Information Systems student who fell for the craft of building for the web — the part where a clean idea turns into something fast, accessible, and genuinely nice to use.",
        'Lately I focus on React and full-stack work, with a growing pull toward applying AI in real products rather than demos.',
    ],
    philosophy:
        'Ship with intent — every interaction should feel fast, accessible, and considered.',
    facts: {
        education: 'Politeknik Caltex Riau Information Systems',
        basedIn: 'Indonesia',
        specialization: 'Frontend & Developer Full Stack',
        currentGoal: 'Land a Software Engineer role',
    },
    interests: ['React', 'Full Stack', 'AI', 'UI/UX'],
    currently: {
        building: 'A premium portfolio with React + R3F',
        learning: 'System design & AI integration',
        exploring: 'Three.js and motion design',
    },
}
