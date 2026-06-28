/**
 * DEV-ONLY preview content for Projects. Never bundled into production.
 * Images point to on-brand placeholder covers in /public/projects/*.svg —
 * replace with real screenshots (e.g. /projects/my-app.webp) anytime.
 * @type {import('./projects').Project[]}
 */
export const projectsPreview = [
    {
        id: 'nova-dashboard',
        title: 'Nova Analytics Dashboard',
        description:
            'A real-time analytics dashboard with role-based access, custom charts, and a fully typed API layer. Built for speed and clarity.',
        image: '/projects/nova-dashboard.svg',
        badge: 'Full Stack',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'PostgreSQL', icon: 'postgresql' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
        ],
        github: 'https://github.com',
        demo: 'https://example.com',
        featured: true,
    },
    {
        id: 'aria-ai',
        title: 'Aria — AI Writing Assistant',
        description:
            'An AI assistant that drafts and refines content using streaming responses and a clean, distraction-free editor.',
        image: '/projects/aria-ai.svg',
        badge: 'AI',
        tech: [
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Python', icon: 'python' },
            { name: 'OpenAI', icon: 'openai' },
            { name: 'FastAPI', icon: 'fastapi' },
        ],
        github: 'https://github.com',
        demo: '',
        featured: true,
    },
    {
        id: 'shopflow',
        title: 'ShopFlow Storefront',
        description:
            'A performant e-commerce storefront with cart, checkout, and a headless CMS — optimized for Core Web Vitals.',
        image: '/projects/shopflow.svg',
        badge: 'Frontend',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Redux', icon: 'redux' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Vite', icon: 'vite' },
        ],
        github: 'https://github.com',
        demo: 'https://example.com',
        featured: true,
    },
    {
        id: 'devnotes',
        title: 'DevNotes',
        description: 'A markdown notes app with offline sync and keyboard-first navigation.',
        image: '/projects/devnotes.svg',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Firebase', icon: 'firebase' },
        ],
        github: 'https://github.com',
        demo: '',
        featured: false,
    },
    {
        id: 'taskpilot',
        title: 'TaskPilot',
        description: 'A collaborative task board with drag-and-drop and live presence.',
        image: '/projects/taskpilot.svg',
        tech: [
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'PostgreSQL', icon: 'postgresql' },
        ],
        github: 'https://github.com',
        demo: 'https://example.com',
        featured: false,
    },
    {
        id: 'visionlab',
        title: 'VisionLab',
        description: 'An image-classification playground running models in the browser.',
        image: '/projects/visionlab.svg',
        tech: [
            { name: 'Python', icon: 'python' },
            { name: 'PyTorch', icon: 'pytorch' },
            { name: 'Docker', icon: 'docker' },
        ],
        github: 'https://github.com',
        demo: '',
        featured: false,
    },
]
