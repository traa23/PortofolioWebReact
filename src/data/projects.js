/**
 * Projects — real data.
 * Add screenshots to public/projects/ and set `image` (currently the
 * Projects section is text-only, so images are optional). Omit
 * `github`/`demo` to hide that button.
 *
 * NOTE: Keep only projects you actually built / can demo. The business
 * entries below are professional templates — adapt or remove as needed.
 *
 * @typedef {Object} Project
 * @property {string}  id
 * @property {string}  title
 * @property {string}  description
 * @property {string}  [image]
 * @property {string}  [badge]
 * @property {Array<{ name: string, icon: string }>} tech
 * @property {string}  [github]
 * @property {string}  [demo]
 * @property {boolean} featured
 *
 * @type {Project[]}
 */
export const projects = [
    {
        id: 'portfolio',
        title: 'Personal Portfolio Website',
        description:
            'A modern, responsive portfolio built with React — smooth animations, dark mode, 3D effects, an AI chatbot integration, and performance optimizations.',
        image: '',
        badge: 'Frontend',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Vite', icon: 'vite' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Three.js', icon: 'threejs' },
            { name: 'React Three Fiber', icon: 'threejs' },
            { name: 'Framer Motion', icon: 'framer' },
        ],
        github: 'https://github.com/traa23/PortofolioWebReact',
        demo: '',
        featured: true,
    },
    {
        id: 'medicare-crm',
        title: 'MediCare Beauty Clinic CRM',
        description:
            'A CRM for a beauty clinic with membership, booking, transaction history, customer notes, vouchers, reviews, and an analytics dashboard.',
        image: '',
        badge: 'Full Stack',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'React Router', icon: 'reactrouter' },
        ],
        github: '',
        demo: '',
        featured: true,
    },
    {
        id: 'water-quality-cnn',
        title: 'Water Quality Classification Using CNN',
        description:
            'A machine-learning project that classifies water quality (clear, slightly murky, very murky) from images using a Convolutional Neural Network.',
        image: '',
        badge: 'Machine Learning',
        tech: [
            { name: 'Python', icon: 'python' },
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'Keras', icon: 'keras' },
            { name: 'Google Colab', icon: 'colab' },
        ],
        github: '',
        demo: '',
        featured: true,
    },
    {
        id: 'land-admin',
        title: 'Land Administration Information System',
        description:
            'A web-based land administration system built with Laravel to manage land parcel data and administrative records.',
        image: '',
        tech: [
            { name: 'Laravel', icon: 'laravel' },
            { name: 'PHP', icon: 'php' },
            { name: 'MySQL', icon: 'mysql' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'pos-system',
        title: 'Point of Sale (POS) System',
        description:
            'A cashier app for small businesses (UMKM) — product catalog, cart, transactions, daily sales reports, and receipt printing.',
        image: '',
        tech: [
            { name: 'Laravel', icon: 'laravel' },
            { name: 'PHP', icon: 'php' },
            { name: 'MySQL', icon: 'mysql' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'inventory-management',
        title: 'Inventory Management System',
        description:
            'Stock and warehouse management with low-stock alerts, supplier records, and stock-in/out history for retail businesses.',
        image: '',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'ecommerce-store',
        title: 'E-Commerce Store',
        description:
            'An online storefront with product browsing, cart, checkout, order tracking, and an admin dashboard for managing products and orders.',
        image: '',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Laravel', icon: 'laravel' },
            { name: 'MySQL', icon: 'mysql' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'finance-tracker',
        title: 'Business Finance Tracker',
        description:
            'Income and expense tracking for small businesses — categories, monthly summaries, and visual reports to monitor cash flow.',
        image: '',
        tech: [
            { name: 'React', icon: 'react' },
            { name: 'Supabase', icon: 'supabase' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'network-design',
        title: 'Computer Network Design & Simulation',
        description:
            'Designed and simulated a computer network — topology, IP addressing, routing, and connectivity testing — as an academic networking project.',
        image: '',
        tech: [
            { name: 'Cisco Packet Tracer', icon: 'cisco' },
            { name: 'Networking', icon: 'networking' },
            { name: 'Docker', icon: 'docker' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'codeigniter-app',
        title: 'CodeIgniter Web Application',
        description:
            'A web application built with the CodeIgniter framework, with Firebase integration and a Docker-based development environment.',
        image: '',
        tech: [
            { name: 'CodeIgniter', icon: 'codeigniter' },
            { name: 'PHP', icon: 'php' },
            { name: 'Firebase', icon: 'firebase' },
            { name: 'Docker', icon: 'docker' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: 'android-app',
        title: 'Android Mobile App',
        description:
            'A native Android application built with Android Studio and Kotlin, focusing on clean UI and a smooth mobile experience.',
        image: '',
        tech: [
            { name: 'Android Studio', icon: 'androidstudio' },
            { name: 'Kotlin', icon: 'kotlin' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
    {
        id: '3d-animation',
        title: '3D Design & Video Animation',
        description:
            'Created 3D models and video/motion animation using AutoCAD and SketchUp — modeling, visualization, and animated presentations.',
        image: '',
        tech: [
            { name: 'AutoCAD', icon: 'autocad' },
            { name: 'SketchUp', icon: 'sketchup' },
            { name: '3D Design', icon: 'threed' },
            { name: 'Video Animation', icon: 'video' },
        ],
        github: '',
        demo: '',
        featured: false,
    },
]
