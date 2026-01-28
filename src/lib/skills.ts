export const skills = {
    backend: [
        { name: "PHP / Laravel", icon: "🔧" },
        { name: "Java", icon: "☕" },
        { name: "JavaScript / Express.js", icon: "⚡" },
        { name: "REST API Design", icon: "🔌" },
        { name: "Database Design", icon: "🗄️" },
    ],
    frontend: [
        { name: "HTML / CSS", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💨" },
    ],
    tools: [
        { name: "Git / GitHub", icon: "📦" },
        { name: "MySQL / PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Docker", icon: "🐳" },
        { name: "Postman", icon: "📮" },
    ],
    learning: [
        { name: "Go", icon: "🐹" },
        { name: "Microservices", icon: "🔗" },
    ],
};

export type SkillCategory = keyof typeof skills;
