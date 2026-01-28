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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold gradient-text"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    ND
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
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
                        className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                    >
                        {language === "en" ? "ID" : "EN"}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left py-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => setLanguage(language === "en" ? "id" : "en")}
                        className="mt-2 px-4 py-2 text-sm font-medium rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                    >
                        {language === "en" ? "Switch to Indonesian" : "Switch to English"}
                    </button>
                </div>
            )}
        </nav>
    );
}
