/**
 * About section content.
 *
 * @typedef {Object} About
 * @property {string}   headline
 * @property {string[]} paragraphs
 * @property {string}   philosophy
 * @property {Object}   facts
 * @property {string}   facts.education
 * @property {string}   facts.basedIn
 * @property {string}   facts.specialization
 * @property {string}   facts.currentGoal
 * @property {string[]} interests
 * @property {Object}   currently
 * @property {string}   currently.building
 * @property {string}   currently.learning
 * @property {string}   currently.exploring
 */

/** @type {About} */
export const about = {
    headline: 'Mengubah ide menjadi produk web yang nyaman digunakan.',
    paragraphs: [
        'Mahasiswa Sistem Informasi yang memiliki minat besar pada Frontend Development, UI/UX Design, dan Artificial Intelligence, serta berpengalaman mengembangkan berbagai proyek di bidang pengembangan perangkat lunak, jaringan komputer, dan teknologi cloud. Terbiasa membangun aplikasi web modern yang cepat, responsif, dan mudah digunakan menggunakan React, Tailwind CSS, serta berbagai teknologi pendukung lainnya.',
        'Selain pengembangan web, saya memiliki pengalaman mengerjakan proyek menggunakan Docker, Firebase, CodeIgniter (CI), Google Colab untuk implementasi machine learning, Android Studio untuk pengembangan aplikasi mobile, serta proyek Jaringan Komputer. Saya juga memiliki kemampuan desain dan pemodelan 3D menggunakan AutoCAD dan SketchUp, serta pembuatan animasi video untuk kebutuhan presentasi maupun media digital.',
        'Selalu antusias mempelajari teknologi baru, mengembangkan solusi yang efisien, serta berkolaborasi dalam tim untuk menghasilkan produk digital yang berkualitas, inovatif, dan berorientasi pada pengalaman pengguna.',
    ],
    philosophy:
        'Clean code, desain responsif, dan pengalaman pengguna yang nyaman di setiap proyek.',
    facts: {
        education: 'Information Systems · Politeknik Caltex Riau',
        basedIn: 'Rumbai, Pekanbaru, Indonesia',
        specialization: 'Frontend, Full Stack & AI',
        currentGoal: 'Tumbuh sebagai Full Stack & Software Engineer',
    },
    interests: ['Web Development', 'UI/UX Design', 'Artificial Intelligence'],
    currently: {
        building: 'Aplikasi web modern dengan React',
        learning: 'Machine Learning — Computer Vision (CNN)',
        exploring: 'Full Stack Web Development',
    },
}
