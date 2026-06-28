/**
 * DEV-ONLY preview content for Experience. Never bundled into production.
 * @type {import('./experience').Milestone[]}
 */
export const experiencePreview = [
    {
        id: 'start',
        year: '2023',
        title: 'Started studying Information Systems',
        description:
            'Began my degree and wrote my first lines of HTML, CSS, and JavaScript.',
        tech: [{ name: 'JavaScript', icon: 'javascript' }],
    },
    {
        id: 'fullstack',
        year: '2024',
        title: 'Built my first full-stack web application',
        description:
            'Shipped an end-to-end app with a React frontend and a Node.js + database backend.',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'MongoDB', icon: 'mongodb' },
        ],
    },
    {
        id: 'ai',
        year: '2025',
        title: 'Started AI & Computer Vision projects',
        description:
            'Explored machine learning and built small computer-vision experiments.',
        tech: [
            { name: 'Python', icon: 'python' },
            { name: 'PyTorch', icon: 'pytorch' },
        ],
        achievement: 'Completed a hands-on ML specialization',
    },
    {
        id: 'crm',
        year: '2026',
        title: 'Developed a Beauty Clinic CRM with React',
        description:
            'Delivered a real CRM with booking, roles, and dashboards used by a real client.',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'PostgreSQL', icon: 'postgresql' },
        ],
    },
    {
        id: 'next',
        year: 'Next',
        title: 'Exploring scalable web architecture',
        description:
            'Currently going deeper on system design, performance, and clean architecture.',
        current: true,
    },
]
