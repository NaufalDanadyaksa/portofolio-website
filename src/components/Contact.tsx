"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                        {t.contact.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm md:text-lg px-2">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="glass rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 glow">
                    <p className="text-sm md:text-lg text-[var(--muted)] leading-relaxed text-center mb-8 md:mb-10">
                        {t.contact.message}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                        {/* Email */}
                        <a
                            href="mailto:naufal060906@gmail.com"
                            className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-[var(--surface-light)] rounded-xl hover:bg-[var(--surface)] transition-colors group"
                        >
                            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-colors flex-shrink-0">
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 text-cyan-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <div className="text-xs md:text-sm text-[var(--muted)]">
                                    {t.contact.email}
                                </div>
                                <div className="font-medium text-[var(--foreground)] text-sm md:text-base truncate">
                                    naufal060906@gmail.com
                                </div>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/NaufalDanadyaksa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-[var(--surface-light)] rounded-xl hover:bg-[var(--surface)] transition-colors group"
                        >
                            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-colors flex-shrink-0">
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 text-cyan-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <div className="text-xs md:text-sm text-[var(--muted)]">
                                    {t.contact.github}
                                </div>
                                <div className="font-medium text-[var(--foreground)] text-sm md:text-base">
                                    NaufalDanadyaksa
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <a
                            href="mailto:naufaldanadyaksa@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-white text-sm md:text-base hover:opacity-90 transition-all active:scale-95"
                        >
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            {t.contact.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
