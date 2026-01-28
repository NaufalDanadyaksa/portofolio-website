"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-[var(--border)]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-[var(--muted)] text-sm">
                        &copy; {currentYear} {t.footer.copyright}
                    </div>
                    <div className="text-[var(--muted)] text-sm">
                        {t.footer.built}
                    </div>
                </div>
            </div>
        </footer>
    );
}
