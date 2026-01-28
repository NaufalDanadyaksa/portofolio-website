"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Animated background gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--background)] to-[var(--background)]" />

                {/* Animated gradient orbs - smaller on mobile */}
                <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-500 rounded-full opacity-10 blur-[80px] md:blur-[100px] animate-float" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 md:w-[500px] h-64 md:h-[500px] bg-emerald-500 rounded-full opacity-10 blur-[80px] md:blur-[100px] animate-float"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-20">
                {/* Greeting badge */}
                <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 md:mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 text-xs md:text-sm font-medium">
                        {t.hero.greeting}
                    </span>
                </div>

                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 transition-all duration-700 leading-tight ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "100ms" }}
                >
                    {t.hero.name}
                </h1>

                <h2
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "200ms" }}
                >
                    <span className="gradient-text">{t.hero.role}</span>
                </h2>

                <p
                    className={`text-[var(--muted)] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "300ms" }}
                >
                    {t.hero.description}
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "400ms" }}
                >
                    <button
                        onClick={() => scrollToSection("#projects")}
                        className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-white text-sm md:text-base hover:shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-95"
                    >
                        <span className="flex items-center gap-2 justify-center">
                            {t.hero.cta}
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className="px-6 py-3 md:px-8 md:py-4 border border-[var(--border)] rounded-full font-semibold text-sm md:text-base hover:border-cyan-400 hover:text-cyan-400 transition-all active:scale-95"
                    >
                        {t.hero.ctaSecondary}
                    </button>
                </div>

                {/* Tech stack badges */}
                <div
                    className={`mt-10 md:mt-16 flex flex-wrap gap-2 md:gap-3 justify-center px-2 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "500ms" }}
                >
                    {["Laravel", "Java", "Express.js", "REST API", "PostgreSQL"].map(
                        (tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-medium bg-[var(--surface-light)] text-[var(--muted)] rounded-full border border-[var(--border)]"
                            >
                                {tech}
                            </span>
                        )
                    )}
                </div>

                {/* Scroll indicator - hidden on mobile */}
                <div
                    className={`hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ transitionDelay: "800ms" }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-[var(--muted)]">Scroll</span>
                        <div className="w-5 h-8 border-2 border-[var(--border)] rounded-full p-1">
                            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
