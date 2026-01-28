export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      github: "GitHub",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Naufal Danadyaksa",
      role: "Backend Developer",
      description:
        "I architect robust backend systems and RESTful APIs that power scalable applications. Focused on clean code, efficient data flow, and solving complex technical challenges.",
      cta: "View Projects",
      ctaSecondary: "Get In Touch",
    },
    about: {
      title: "About Me",
      subtitle: "Backend-First Developer with Full-Stack Awareness",
      content: [
        "I'm a Computer Science student at Universitas Duta Bangsa Surakarta, passionate about building the invisible infrastructure that powers modern applications.",
        "My approach centers on understanding problems deeply before writing code. I believe that well-designed backend architecture is the foundation of reliable, scalable software.",
        "While my primary focus is backend development, I maintain full-stack awareness to understand how my APIs integrate with frontend systems and deliver value to end users.",
      ],
      philosophy: {
        title: "Technical Philosophy",
        items: [
          "Clean, maintainable code over quick fixes",
          "API design that prioritizes developer experience",
          "Data integrity and security as non-negotiables",
          "Continuous learning and adaptation",
        ],
      },
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Tools I use to build robust backend systems",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "Tools & Infrastructure",
        learning: "Currently Learning",
      },
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Curated work showcasing backend expertise",
      viewCode: "View Code",
      viewLive: "Live Demo",
      items: [
        {
          title: "RESTful E-Commerce API",
          problem:
            "An online marketplace needed a scalable backend to handle product catalogs, user authentication, and order processing.",
          solution:
            "Built a comprehensive REST API with Laravel featuring JWT authentication, role-based access control, and optimized database queries for handling thousands of products.",
          outcome:
            "Reduced API response times by 40% through query optimization and implemented caching strategies that improved overall system performance.",
          stack: ["PHP", "Laravel", "MySQL", "Redis", "JWT"],
        },
        {
          title: "Task Management System",
          problem:
            "A development team needed a centralized system to track tasks, deadlines, and team collaboration without relying on expensive third-party tools.",
          solution:
            "Developed a full-stack application with Express.js backend providing real-time updates via WebSockets, with comprehensive CRUD operations and user authentication.",
          outcome:
            "Successfully deployed for a team of 15 developers, improving task visibility and reducing missed deadlines by 60%.",
          stack: ["JavaScript", "Express.js", "MongoDB", "Socket.IO", "React"],
        },
        {
          title: "Academic Portal API",
          problem:
            "University departments struggled with manual grade entry and student data management across multiple systems.",
          solution:
            "Created a unified Java-based API that integrates with existing university databases, providing standardized endpoints for student records, grades, and course management.",
          outcome:
            "Reduced administrative processing time by 50% and eliminated data inconsistencies across departments.",
          stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        },
      ],
    },
    github: {
      title: "GitHub Activity",
      subtitle: "Consistent contributions and active development",
      stats: {
        repos: "Public Repos",
        contributions: "Contributions",
        followers: "Followers",
      },
      viewProfile: "View Full Profile",
    },
    learning: {
      title: "Learning & Growth",
      subtitle: "Continuous improvement in backend technologies",
      current: {
        title: "Currently Learning: Go",
        description:
          "Expanding my backend toolkit with Go for building high-performance, concurrent systems. Attracted by its simplicity, strong typing, and excellent performance characteristics for microservices architecture.",
        goals: [
          "Building efficient concurrent applications",
          "Developing microservices with Go",
          "Understanding Go's approach to error handling",
          "Exploring Go's standard library for web development",
        ],
      },
      mindset:
        "I approach learning as an ongoing journey, not a destination. Each new technology I explore deepens my understanding of software architecture and makes me a more effective problem solver.",
    },
    contact: {
      title: "Let's Work Together",
      subtitle:
        "Open to internships, collaborations, and backend development opportunities",
      email: "Email",
      github: "GitHub",
      message:
        "I'm currently seeking internship opportunities where I can contribute my backend development skills while learning from experienced professionals. If you have a project that needs robust API design or backend architecture, I'd love to discuss how I can help.",
      cta: "Send Email",
    },
    footer: {
      copyright: "Naufal Danadyaksa. All rights reserved.",
      built: "Built with Next.js and Tailwind CSS",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      github: "GitHub",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, Saya",
      name: "Naufal Danadyaksa",
      role: "Backend Developer",
      description:
        "Saya merancang sistem backend yang handal dan RESTful API untuk aplikasi yang skalabel. Fokus pada kode yang bersih, alur data yang efisien, dan menyelesaikan tantangan teknis yang kompleks.",
      cta: "Lihat Proyek",
      ctaSecondary: "Hubungi Saya",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Developer Backend dengan Kesadaran Full-Stack",
      content: [
        "Saya mahasiswa Teknik Informatika di Universitas Duta Bangsa Surakarta, dengan passion dalam membangun infrastruktur yang menjadi fondasi aplikasi modern.",
        "Pendekatan saya berpusat pada pemahaman masalah secara mendalam sebelum menulis kode. Saya percaya bahwa arsitektur backend yang dirancang dengan baik adalah fondasi dari perangkat lunak yang andal dan skalabel.",
        "Meskipun fokus utama saya adalah pengembangan backend, saya memiliki kesadaran full-stack untuk memahami bagaimana API saya terintegrasi dengan sistem frontend dan memberikan nilai kepada pengguna.",
      ],
      philosophy: {
        title: "Filosofi Teknis",
        items: [
          "Kode yang bersih dan mudah dipelihara",
          "Desain API yang mengutamakan pengalaman developer",
          "Integritas data dan keamanan sebagai prioritas",
          "Pembelajaran dan adaptasi berkelanjutan",
        ],
      },
    },
    skills: {
      title: "Keahlian & Teknologi",
      subtitle: "Tools yang saya gunakan untuk membangun sistem backend",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "Tools & Infrastruktur",
        learning: "Sedang Dipelajari",
      },
    },
    projects: {
      title: "Proyek Pilihan",
      subtitle: "Karya terkurasi yang menampilkan keahlian backend",
      viewCode: "Lihat Kode",
      viewLive: "Demo Langsung",
      items: [
        {
          title: "RESTful E-Commerce API",
          problem:
            "Sebuah marketplace online membutuhkan backend yang skalabel untuk menangani katalog produk, autentikasi pengguna, dan pemrosesan pesanan.",
          solution:
            "Membangun REST API komprehensif dengan Laravel menggunakan autentikasi JWT, kontrol akses berbasis peran, dan query database yang dioptimalkan untuk menangani ribuan produk.",
          outcome:
            "Mengurangi waktu respons API hingga 40% melalui optimasi query dan menerapkan strategi caching yang meningkatkan performa sistem secara keseluruhan.",
          stack: ["PHP", "Laravel", "MySQL", "Redis", "JWT"],
        },
        {
          title: "Sistem Manajemen Tugas",
          problem:
            "Tim pengembang membutuhkan sistem terpusat untuk melacak tugas, deadline, dan kolaborasi tim tanpa bergantung pada tools pihak ketiga yang mahal.",
          solution:
            "Mengembangkan aplikasi full-stack dengan backend Express.js yang menyediakan pembaruan real-time via WebSockets, dengan operasi CRUD lengkap dan autentikasi pengguna.",
          outcome:
            "Berhasil di-deploy untuk tim yang terdiri dari 15 developer, meningkatkan visibilitas tugas dan mengurangi deadline yang terlewat hingga 60%.",
          stack: ["JavaScript", "Express.js", "MongoDB", "Socket.IO", "React"],
        },
        {
          title: "API Portal Akademik",
          problem:
            "Departemen universitas kesulitan dengan entri nilai manual dan manajemen data mahasiswa di berbagai sistem.",
          solution:
            "Membuat API berbasis Java yang terintegrasi dengan database universitas yang ada, menyediakan endpoint standar untuk catatan mahasiswa, nilai, dan manajemen mata kuliah.",
          outcome:
            "Mengurangi waktu pemrosesan administratif hingga 50% dan menghilangkan inkonsistensi data antar departemen.",
          stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        },
      ],
    },
    github: {
      title: "Aktivitas GitHub",
      subtitle: "Kontribusi konsisten dan pengembangan aktif",
      stats: {
        repos: "Repo Publik",
        contributions: "Kontribusi",
        followers: "Pengikut",
      },
      viewProfile: "Lihat Profil Lengkap",
    },
    learning: {
      title: "Pembelajaran & Pertumbuhan",
      subtitle: "Peningkatan berkelanjutan dalam teknologi backend",
      current: {
        title: "Sedang Dipelajari: Go",
        description:
          "Memperluas toolkit backend saya dengan Go untuk membangun sistem berkinerja tinggi dan concurrent. Tertarik dengan kesederhanaannya, strong typing, dan karakteristik performa yang excellent untuk arsitektur microservices.",
        goals: [
          "Membangun aplikasi concurrent yang efisien",
          "Mengembangkan microservices dengan Go",
          "Memahami pendekatan Go dalam error handling",
          "Menjelajahi standard library Go untuk web development",
        ],
      },
      mindset:
        "Saya memandang pembelajaran sebagai perjalanan yang berkelanjutan, bukan tujuan akhir. Setiap teknologi baru yang saya pelajari memperdalam pemahaman saya tentang arsitektur perangkat lunak dan membuat saya menjadi problem solver yang lebih efektif.",
    },
    contact: {
      title: "Mari Bekerja Sama",
      subtitle:
        "Terbuka untuk magang, kolaborasi, dan kesempatan pengembangan backend",
      email: "Email",
      github: "GitHub",
      message:
        "Saya sedang mencari kesempatan magang di mana saya dapat berkontribusi dengan keahlian backend development sambil belajar dari profesional berpengalaman. Jika Anda memiliki proyek yang membutuhkan desain API yang handal atau arsitektur backend, saya akan senang untuk mendiskusikan bagaimana saya dapat membantu.",
      cta: "Kirim Email",
    },
    footer: {
      copyright: "Naufal Danadyaksa. Hak cipta dilindungi.",
      built: "Dibangun dengan Next.js dan Tailwind CSS",
    },
  },
};

export type Language = "en" | "id";
export type Translations = typeof translations;
