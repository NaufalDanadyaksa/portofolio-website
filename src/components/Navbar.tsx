"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { href: "#about", label: t.nav.about },
        { href: "#skills", label: t.nav.skills },
        { href: "#projects", label: t.nav.projects },
        { href: "#github", label: t.nav.github },
        { href: "#contact", label: t.nav.contact },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-2 md:py-3" : "py-3 md:py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-lg md:text-xl font-bold gradient-text"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    ND
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={() => setLanguage(language === "en" ? "id" : "en")}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border)] hover:border-cyan-400 hover:text-cyan-400 transition-all"
                    >
                        {language === "en" ? "ID" : "EN"}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setLanguage(language === "en" ? "id" : "en")}
                        className="px-2.5 py-1 text-xs font-medium rounded-full border border-[var(--border)]"
                    >
                        {language === "en" ? "ID" : "EN"}
                    </button>
                    <button
                        className="p-2 -mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass mx-4 mt-2 rounded-xl p-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left py-2.5 px-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-light)] rounded-lg transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
