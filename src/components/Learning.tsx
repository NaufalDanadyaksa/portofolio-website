"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Learning() {
    const { t } = useLanguage();

    return (
        <section id="learning" className="section-padding bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.learning.title}
                    </h2>
                    <p className="text-[var(--muted)] text-lg">{t.learning.subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Currently Learning */}
                    <div className="glass rounded-2xl p-8 card-hover glow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20">
                                <svg
                                    className="w-8 h-8 text-[var(--accent)]"
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
                            <h3 className="text-xl font-bold gradient-text">
                                {t.learning.current.title}
                            </h3>
                        </div>

                        <p className="text-[var(--muted)] leading-relaxed mb-6">
                            {t.learning.current.description}
                        </p>

                        <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                            Learning Goals
                        </h4>
                        <ul className="space-y-3">
                            {t.learning.current.goals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-[var(--secondary)] mt-0.5 flex-shrink-0"
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
                                    <span className="text-[var(--muted)]">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Growth Mindset */}
                    <div className="glass rounded-2xl p-8 card-hover flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20">
                                <svg
                                    className="w-8 h-8 text-[var(--primary)]"
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
                            <h3 className="text-xl font-bold">Growth Mindset</h3>
                        </div>

                        <blockquote className="text-lg text-[var(--muted)] leading-relaxed italic border-l-4 border-[var(--primary)] pl-6">
                            {t.learning.mindset}
                        </blockquote>

                        {/* Tech logos/icons */}
                        <div className="mt-8 flex items-center gap-4">
                            <span className="text-sm text-[var(--muted)]">Exploring:</span>
                            <div className="flex gap-3">
                                <span className="px-3 py-1.5 text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
                                    Go
                                </span>
                                <span className="px-3 py-1.5 text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
                                    Microservices
                                </span>
                                <span className="px-3 py-1.5 text-sm bg-[var(--surface-light)] rounded-full border border-[var(--border)]">
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
