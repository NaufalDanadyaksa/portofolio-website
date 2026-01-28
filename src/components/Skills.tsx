"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skills, SkillCategory } from "@/lib/skills";

export default function Skills() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById("skills");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const categoryLabels: Record<SkillCategory, string> = {
        backend: t.skills.categories.backend,
        frontend: t.skills.categories.frontend,
        tools: t.skills.categories.tools,
        learning: t.skills.categories.learning,
    };

    const categoryColors: Record<SkillCategory, string> = {
        backend: "from-cyan-400 to-blue-500",
        frontend: "from-pink-400 to-purple-500",
        tools: "from-emerald-400 to-teal-500",
        learning: "from-amber-400 to-orange-500",
    };

    const categoryIcons: Record<SkillCategory, React.ReactNode> = {
        backend: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        frontend: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        tools: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        learning: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    };

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                        {t.skills.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm md:text-lg px-2">
                        {t.skills.subtitle}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    {(Object.keys(skills) as SkillCategory[]).map((category, categoryIndex) => (
                        <div
                            key={category}
                            className={`glass rounded-xl md:rounded-2xl p-5 md:p-8 card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                        >
                            <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                                <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${categoryColors[category]} text-white`}>
                                    {categoryIcons[category]}
                                </div>
                                <h3 className="text-base md:text-xl font-semibold">
                                    {categoryLabels[category]}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills[category].map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className={`group px-3 py-2 md:px-4 md:py-3 bg-[var(--surface-light)] rounded-lg md:rounded-xl border border-[var(--border)] transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 30}ms` }}
                                    >
                                        <div className="flex items-center gap-1.5 md:gap-2">
                                            <span className="text-sm md:text-lg">{skill.icon}</span>
                                            <span className="text-[var(--foreground)] text-xs md:text-sm font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
