/**
 * Skills — real data.
 *
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} icon        Key into the tech icon registry.
 *
 * @typedef {Object} SkillCategory
 * @property {string} id
 * @property {string} title
 * @property {'frontend'|'backend'|'database'|'ai'|'tools'|'languages'} icon
 * @property {'hero'|'wide'|'normal'} span
 * @property {Skill[]} skills
 *
 * @type {SkillCategory[]}
 */
export const skills = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: 'frontend',
        span: 'hero',
        skills: [
            { name: 'React.js', icon: 'react' },
            { name: 'Vite', icon: 'vite' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'HTML5', icon: 'html5' },
            { name: 'CSS3', icon: 'css3' },
            { name: 'React Router', icon: 'reactrouter' },
            { name: 'Framer Motion', icon: 'framer' },
            { name: 'shadcn/ui', icon: 'shadcn' },
            { name: 'Radix UI', icon: 'radix' },
            { name: 'Three.js', icon: 'threejs' },
            { name: 'React Three Fiber', icon: 'threejs' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: 'backend',
        span: 'normal',
        skills: [
            { name: 'Laravel', icon: 'laravel' },
            { name: 'PHP', icon: 'php' },
            { name: 'REST API', icon: 'restapi' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'Firebase', icon: 'firebase' },
            { name: 'MongoDB', icon: 'mongodb' },
        ],
    },
    {
        id: 'ai',
        title: 'AI & Machine Learning',
        icon: 'ai',
        span: 'normal',
        skills: [
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'Keras', icon: 'keras' },
            { name: 'CNN', icon: 'python' },
            { name: 'Image Classification', icon: 'python' },
            { name: 'Google Colab', icon: 'colab' },
        ],
    },
    {
        id: 'database',
        title: 'Database',
        icon: 'database',
        span: 'normal',
        skills: [
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'Oracle Database', icon: 'oracle' },
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
            { name: 'VS Code', icon: 'vscode' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Postman', icon: 'postman' },
            { name: 'XAMPP', icon: 'xampp' },
            { name: 'Laragon', icon: 'restapi' },
            { name: 'Figma', icon: 'figma' },
            { name: 'Android Studio', icon: 'androidstudio' },
            { name: 'Cisco Packet Tracer', icon: 'cisco' },
        ],
    },
    {
        id: 'languages',
        title: 'Languages',
        icon: 'languages',
        span: 'wide',
        skills: [
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'PHP', icon: 'php' },
            { name: 'Python', icon: 'python' },
            { name: 'SQL', icon: 'sql' },
            { name: 'Kotlin', icon: 'kotlin' },
        ],
    },
]
