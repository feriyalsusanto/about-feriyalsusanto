"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Users, Target, Database, Zap, Smartphone, Layout } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            <p>
                                Hi, I'm <span className="text-foreground font-semibold">Feriyal Septiawan Susanto</span>, a mobile developer with 11 years of experience specializing in cutting-edge mobile solutions and emerging technologies.
                            </p>
                            <p>
                                I'm passionate about developing mobile applications using <span className="text-primary">Flutter</span>, which I've been working with since 2018, along with 4 years of Android native development experience. Recently, I've expanded my expertise into <span className="text-accent">Frontend</span> development, focusing on building high-performance web systems, premium UI/UX designs, and seamless cross-platform experiences.
                            </p>
                            <p>
                                My goal is to deliver high-quality, user-friendly digital solutions that leverage both traditional mobile development best practices and innovative frontend technologies to meet evolving client needs and user expectations.
                            </p>
                        </div>

                        {/* <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="glass p-6 rounded-2xl">
                                <div className="text-primary font-bold text-3xl mb-1">11+</div>
                                <div className="text-muted text-sm uppercase tracking-wider font-bold">Years Exp</div>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <div className="text-accent font-bold text-3xl mb-1">6+</div>
                                <div className="text-muted text-sm uppercase tracking-wider font-bold">Flutter Yrs</div>
                            </div>
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <ShieldCheck className="text-primary" /> Mobile & Frontend Expertise
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Flutter",
                                        desc: "Building scalable, cross-platform mobile applications with Flutter.",
                                        icon: <Smartphone size={18} className="text-primary" />,
                                    },
                                    {
                                        title: "Frontend",
                                        desc: "Building scalable web applications with modern framework.",
                                        icon: <Layout size={18} className="text-primary" />,
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="glass p-5 rounded-2xl hover:border-primary/30 transition-all group">
                                        <div className="mb-3 p-2 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="font-bold text-sm mb-1 text-foreground">{item.title}</div>
                                        <p className="text-muted text-[12px] leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 border-t border-white/10 pt-8">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <Users className="text-accent" /> Leadership & Collaboration
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
                                Led small tech teams with a focus on communication and strategic architecture. Passionate about empowering team members and fostering a collaborative learning environment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
