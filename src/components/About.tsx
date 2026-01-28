"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section-padding bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                        {t.about.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm md:text-lg px-2">
                        {t.about.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* About content */}
                    <div className="space-y-4 md:space-y-6">
                        {t.about.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[var(--muted)] leading-relaxed text-sm md:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Philosophy */}
                    <div className="glass rounded-xl md:rounded-2xl p-5 md:p-8 glow">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 gradient-text">
                            {t.about.philosophy.title}
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {t.about.philosophy.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-[var(--foreground)] text-sm md:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
