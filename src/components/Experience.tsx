"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "ForU AI",
        role: "Frontend Developer",
        period: "June 2024 - Present",
        description: "Focusing on Web3 implementation and internal tools in a fast-paced environment.",
        bullets: [
            "Maintenance Untukmu - AI Gifting App",
            "RnD about web3 implementation in Flutter (wallet, AI, agent, blockchain, etc.)",
            "Create sales admin web app using Flutter",
            "Create social media analyzer admin web app using Flutter",
            "Create partner / B2B dashboard using Next.js & TailwindCSS"
        ]
    },
    {
        company: "Siklus",
        role: "Team Lead & Flutter Developer",
        period: "August 2020 - January 2024",
        description: "Progressed from Developer to Team Lead, managing technical decisions and leading mobile projects.",
        bullets: [
            "Led technical team and managed Flutter development projects",
            "Made strategic technology decisions for mobile applications",
            "Built Siklus Customer & Seller mobile application from ground up",
            "Conducted technical interviews and mentored team members"
        ]
    },
    {
        company: "PT. Aku Peduli Indonesia",
        role: "Mobile Developer",
        period: "July 2018 - December 2019",
        description: "Android developer who transitioned to Flutter in late 2018. Built logistics mobile apps using Kotlin & Flutter.",
    },
    {
        company: "Homecare24.id",
        role: "Mobile Developer",
        period: "November 2017 - May 2018",
        description: "Built online medical assistance apps using Kotlin for Android.",
    },
    {
        company: "Klopos (Majoo)",
        role: "Mobile Developer",
        period: "October 2016 - October 2017",
        description: "Built the POS tablet application using Kotlin (now Majoo).",
    },
    {
        company: "Mimi Creative",
        role: "Mobile Developer",
        period: "November 2015 - October 2016",
        description: "Built education and school reporting apps for clients using Kotlin and React Native.",
    },
    {
        company: "PT. Easysoft Indonesia",
        role: "Fullstack Programmer",
        period: "May 2014 - October 2015",
        description: "First professional experience. Created report pages for partners and built Android apps using Java.",
    },
    {
        company: "Freelance",
        role: "Mobile Developer",
        period: "Various",
        description: "Built various apps for college students (news, books, maps) and companies (hospitals, mining, restaurant, KIOSK, state attorney, kebun raya worker, and so much more.)",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-card/50">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Briefcase className="text-primary" size={28} />
                    <h2 className="text-3xl font-bold">Experience</h2>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-end md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card absolute left-0 md:left-1/2 md:-ml-5 shadow-xl transition-all group-hover:border-primary/50 group-hover:scale-110 z-10">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl transition-all hover:border-white/20">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                                    <span className="text-[10px] font-bold text-primary px-3 py-1 rounded-full bg-primary/10 w-fit whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="text-accent text-sm font-semibold mb-3">{exp.company}</div>
                                <p className="text-muted text-xs leading-relaxed mb-4">{exp.description}</p>
                                {exp.bullets && (
                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-2 text-[10px] text-muted leading-relaxed">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
