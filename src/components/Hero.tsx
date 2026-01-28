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
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] via-[var(--background)] to-[var(--background)]" />

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-[100px] animate-float" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full opacity-10 blur-[100px] animate-float"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-[100px] animate-float"
                    style={{ animationDelay: "4s" }}
                />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Greeting badge */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 text-sm font-medium">
                        {t.hero.greeting}
                    </span>
                </div>

                <h1
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "100ms" }}
                >
                    {t.hero.name}
                </h1>

                <h2
                    className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "200ms" }}
                >
                    <span className="gradient-text">
                        {t.hero.role}
                    </span>
                </h2>

                <p
                    className={`text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "300ms" }}
                >
                    {t.hero.description}
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "400ms" }}
                >
                    <button
                        onClick={() => scrollToSection("#projects")}
                        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                        <span className="flex items-center gap-2 justify-center">
                            {t.hero.cta}
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className="px-8 py-4 border border-[var(--border)] rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105"
                    >
                        {t.hero.ctaSecondary}
                    </button>
                </div>

                {/* Tech stack badges */}
                <div
                    className={`mt-16 flex flex-wrap gap-3 justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    style={{ transitionDelay: "500ms" }}
                >
                    {["Laravel", "Java", "Express.js", "REST API", "PostgreSQL"].map((tech, i) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium bg-[var(--surface-light)] text-[var(--muted)] rounded-full border border-[var(--border)] hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                            style={{ transitionDelay: `${500 + i * 50}ms` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div
                    className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
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
