"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Layout, Database, Zap, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: <Smartphone className="text-primary" />,
        skills: ["Flutter", "Dart", "Android / Kotlin", "iOS / Swift"],
    },
    {
        title: "Frontend Development",
        icon: <Layout className="text-accent" />,
        skills: ["React", "Next.js", "Typescript", "Tailwind CSS"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-card/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
                    <p className="text-muted text-center max-w-xl">
                        A diverse set of skills focused on building high-quality mobile and web applications with amazing user experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-3 text-muted text-sm group">
                                        <Zap size={14} className="text-primary/50 group-hover:text-primary transition-colors" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
