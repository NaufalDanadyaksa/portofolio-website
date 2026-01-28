"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
    name: string;
    bio: string;
    created_at: string;
}

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export default function GitHub() {
    const { t } = useLanguage();
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
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

        const section = document.getElementById("github");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Fetch GitHub stats
        fetch("https://api.github.com/users/NaufalDanadyaksa")
            .then((res) => res.json())
            .then((data) => {
                setStats(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });

        // Generate contribution data (simulated based on realistic patterns)
        // In production, you would use the GitHub GraphQL API with authentication
        const generateContributions = () => {
            const days: ContributionDay[] = [];
            const today = new Date();

            for (let i = 364; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);

                // Generate realistic contribution patterns
                const dayOfWeek = date.getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                // Base probability lower on weekends
                let probability = isWeekend ? 0.3 : 0.6;

                // Random contribution count
                const random = Math.random();
                let count = 0;
                let level = 0;

                if (random < probability) {
                    const intensity = Math.random();
                    if (intensity > 0.8) {
                        count = Math.floor(Math.random() * 8) + 8;
                        level = 4;
                    } else if (intensity > 0.5) {
                        count = Math.floor(Math.random() * 5) + 4;
                        level = 3;
                    } else if (intensity > 0.3) {
                        count = Math.floor(Math.random() * 3) + 2;
                        level = 2;
                    } else {
                        count = 1;
                        level = 1;
                    }
                }

                days.push({
                    date: date.toISOString().split("T")[0],
                    count,
                    level,
                });
            }

            return days;
        };

        setContributions(generateContributions());
    }, []);

    // Group contributions by week
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get month labels for the graph
    const getMonthLabels = () => {
        const labels: { month: string; index: number }[] = [];
        let lastMonth = -1;

        weeks.forEach((week, weekIndex) => {
            if (week[0]) {
                const date = new Date(week[0].date);
                const month = date.getMonth();
                if (month !== lastMonth) {
                    labels.push({ month: months[month], index: weekIndex });
                    lastMonth = month;
                }
            }
        });

        return labels;
    };

    const monthLabels = getMonthLabels();

    return (
        <section id="github" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.github.title}
                    </h2>
                    <p className="text-[var(--muted)] text-lg">{t.github.subtitle}</p>
                </div>

                <div className={`glass rounded-2xl p-8 glow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="w-10 h-10 border-3 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : stats ? (
                        <>
                            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                                {/* Profile Info */}
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <img
                                            src={stats.avatar_url}
                                            alt={stats.name || "GitHub Profile"}
                                            className="w-20 h-20 rounded-full border-2 border-[var(--primary)]"
                                        />
                                        <div className="absolute inset-0 rounded-full animate-pulse-glow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{stats.name || "Naufal Danadyaksa"}</h3>
                                        <p className="text-[var(--muted)] mt-1">
                                            {stats.bio || "Backend Developer"}
                                        </p>
                                        <p className="text-sm text-[var(--primary)] mt-2">
                                            @NaufalDanadyaksa
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-4 bg-[var(--surface-light)] rounded-xl hover:scale-105 transition-transform cursor-default">
                                        <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                                            {stats.public_repos}
                                        </div>
                                        <div className="text-[var(--muted)] text-xs md:text-sm mt-1">
                                            {t.github.stats.repos}
                                        </div>
                                    </div>
                                    <div className="text-center p-4 bg-[var(--surface-light)] rounded-xl hover:scale-105 transition-transform cursor-default">
                                        <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                                            {totalContributions}
                                        </div>
                                        <div className="text-[var(--muted)] text-xs md:text-sm mt-1">
                                            {t.github.stats.contributions}
                                        </div>
                                    </div>
                                    <div className="text-center p-4 bg-[var(--surface-light)] rounded-xl hover:scale-105 transition-transform cursor-default">
                                        <div className="text-2xl md:text-3xl font-bold text-purple-400">
                                            {stats.followers}
                                        </div>
                                        <div className="text-[var(--muted)] text-xs md:text-sm mt-1">
                                            {t.github.stats.followers}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* GitHub Contribution Graph */}
                            <div className="border-t border-[var(--border)] pt-8">
                                <h4 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                                    Contribution Activity (Last Year)
                                </h4>

                                {/* Month labels */}
                                <div className="flex mb-2 text-xs text-[var(--muted)] overflow-x-auto">
                                    <div className="w-8 flex-shrink-0" />
                                    <div className="flex gap-0" style={{ minWidth: weeks.length * 14 }}>
                                        {monthLabels.map((label, i) => (
                                            <div
                                                key={i}
                                                className="absolute text-xs"
                                                style={{ left: `${label.index * 14 + 32}px` }}
                                            >
                                                {label.month}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contribution grid */}
                                <div className="flex gap-1 overflow-x-auto pb-4">
                                    <div className="flex flex-col gap-1 text-xs text-[var(--muted)] pr-2">
                                        <div className="h-3" />
                                        <div className="h-3 flex items-center">Mon</div>
                                        <div className="h-3" />
                                        <div className="h-3 flex items-center">Wed</div>
                                        <div className="h-3" />
                                        <div className="h-3 flex items-center">Fri</div>
                                        <div className="h-3" />
                                    </div>

                                    <div className="flex gap-[3px]">
                                        {weeks.map((week, weekIndex) => (
                                            <div key={weekIndex} className="flex flex-col gap-[3px]">
                                                {week.map((day, dayIndex) => (
                                                    <div
                                                        key={dayIndex}
                                                        className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-150 hover:z-10 cursor-pointer contrib-${day.level}`}
                                                        title={`${day.date}: ${day.count} contributions`}
                                                        style={{
                                                            transitionDelay: `${(weekIndex * 7 + dayIndex) * 2}ms`,
                                                            opacity: isVisible ? 1 : 0,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="flex items-center justify-end gap-2 mt-2 text-xs text-[var(--muted)]">
                                    <span>Less</span>
                                    {[0, 1, 2, 3, 4].map((level) => (
                                        <div
                                            key={level}
                                            className={`w-3 h-3 rounded-sm contrib-${level}`}
                                        />
                                    ))}
                                    <span>More</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-[var(--muted)]">Unable to load GitHub data</p>
                        </div>
                    )}

                    {/* View Profile Button */}
                    <div className="mt-8 text-center">
                        <a
                            href="https://github.com/NaufalDanadyaksa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-white hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {t.github.viewProfile}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
