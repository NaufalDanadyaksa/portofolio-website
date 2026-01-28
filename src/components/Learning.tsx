"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Learning() {
    const { t } = useLanguage();

    return (
        <section id="learning" className="section-padding bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                        {t.learning.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm md:text-lg px-2">
                        {t.learning.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
                    {/* Currently Learning */}
                    <div className="glass rounded-xl md:rounded-2xl p-5 md:p-8 card-hover glow">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                                <svg
                                    className="w-6 h-6 md:w-8 md:h-8 text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold gradient-text">
                                {t.learning.current.title}
                            </h3>
                        </div>

                        <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                            {t.learning.current.description}
                        </p>

                        <h4 className="text-xs md:text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-3 md:mb-4">
                            Learning Goals
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {t.learning.current.goals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-2 md:gap-3">
                                    <svg
                                        className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-[var(--muted)] text-xs md:text-sm">
                                        {goal}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Growth Mindset */}
                    <div className="glass rounded-xl md:rounded-2xl p-5 md:p-8 card-hover flex flex-col justify-center">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                                <svg
                                    className="w-6 h-6 md:w-8 md:h-8 text-cyan-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold">Growth Mindset</h3>
                        </div>

                        <blockquote className="text-sm md:text-lg text-[var(--muted)] leading-relaxed italic border-l-4 border-cyan-400 pl-4 md:pl-6">
                            {t.learning.mindset}
                        </blockquote>

                        {/* Tech logos/icons */}
                        <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-2 md:gap-4">
                            <span className="text-xs md:text-sm text-[var(--muted)]">
                                Exploring:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
                                    Go
                                </span>
                                <span className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
                                    Microservices
                                </span>
                                <span className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
                                    gRPC
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
