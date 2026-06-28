/**
 * DEV-ONLY preview content for Skills. Never bundled into production.
 * @type {import('./skills').SkillCategory[]}
 */
export const skillsPreview = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: 'frontend',
        span: 'hero',
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Redux', icon: 'redux' },
            { name: 'HTML5', icon: 'html5' },
            { name: 'CSS3', icon: 'css3' },
            { name: 'Vite', icon: 'vite' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: 'backend',
        span: 'normal',
        skills: [
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Express', icon: 'express' },
            { name: 'NestJS', icon: 'nestjs' },
            { name: 'FastAPI', icon: 'fastapi' },
        ],
    },
    {
        id: 'ai',
        title: 'AI & Machine Learning',
        icon: 'ai',
        span: 'normal',
        skills: [
            { name: 'Python', icon: 'python' },
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'PyTorch', icon: 'pytorch' },
            { name: 'OpenAI', icon: 'openai' },
        ],
    },
    {
        id: 'database',
        title: 'Database',
        icon: 'database',
        span: 'normal',
        skills: [
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'PostgreSQL', icon: 'postgresql' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Prisma', icon: 'prisma' },
        ],
    },
    {
        id: 'tools',
        title: 'Tools & DevOps',
        icon: 'tools',
        span: 'normal',
        skills: [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Postman', icon: 'postman' },
            { name: 'Figma', icon: 'figma' },
            { name: 'Vercel', icon: 'vercel' },
        ],
    },
    {
        id: 'languages',
        title: 'Languages',
        icon: 'languages',
        span: 'wide',
        skills: [
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Python', icon: 'python' },
            { name: 'Java', icon: 'java' },
            { name: 'C++', icon: 'cpp' },
            { name: 'PHP', icon: 'php' },
        ],
    },
]
