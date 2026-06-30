/**
 * Experience — real data (the developer-journey timeline).
 * Ordered oldest → newest; the ongoing milestone is marked `current`.
 *
 * @typedef {Object} Milestone
 * @property {string}  id
 * @property {string}  year
 * @property {string}  title
 * @property {string}  [description]
 * @property {Array<string | { name: string, icon?: string }>} [tech]
 * @property {string}  [achievement]
 * @property {boolean} [current]
 *
 * @type {Milestone[]}
 */
export const experience = [
    {
        id: 'foundations',
        year: '2024',
        title: 'Programming & Multimedia Foundations',
        description:
            'Built core programming skills (algorithms, OOP) and explored 3D design & video animation with AutoCAD and SketchUp.',
        tech: [
            { name: 'AutoCAD', icon: 'autocad' },
            { name: 'SketchUp', icon: 'sketchup' },
            { name: '3D Design', icon: 'threed' },
        ],
    },
    {
        id: 'web-networking',
        year: '2025',
        title: 'Web Development & Networking',
        description:
            'Built web apps with Laravel and CodeIgniter, managed relational databases, and worked on computer-networking design & simulation.',
        tech: [
            { name: 'Laravel', icon: 'laravel' },
            { name: 'CodeIgniter', icon: 'codeigniter' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Networking', icon: 'networking' },
        ],
    },
    {
        id: 'frontend-dev',
        year: '2025',
        title: 'Frontend Development',
        description:
            'Focused on React, Tailwind CSS, and reusable components — building modern, responsive UIs with strong attention to UX and performance.',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
        ],
    },
    {
        id: 'crm-dev',
        year: '2026',
        title: 'CRM System Development',
        description:
            'Designed and built the MediCare beauty-clinic CRM — membership, booking, vouchers, customer notes, reviews, and an analytics dashboard.',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Supabase', icon: 'supabase' },
        ],
    },
    {
        id: 'ml-research',
        year: '2026',
        title: 'Machine Learning Research',
        description:
            'Developed a Convolutional Neural Network (CNN) for image-based water-quality classification as part of academic research.',
        tech: [
            { name: 'Python', icon: 'python' },
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'Keras', icon: 'keras' },
        ],
    },
    {
        id: 'now',
        year: 'Now',
        title: 'Information Systems Student & Continuous Learning',
        description:
            'Studying Information Systems at Politeknik Caltex Riau while deepening my skills in Full Stack Web Development, the React ecosystem, and AI.',
        current: true,
    },
]
