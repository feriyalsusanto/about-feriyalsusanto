"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        if (typeof window !== 'undefined') {
            window.location.href = `mailto:email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

        setStatus("sent");

        // Reset form after 3 seconds
        setTimeout(() => {
            setStatus("idle");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
        }, 3000);
    };


    return (
        <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="glass p-12 rounded-[2rem] border-white/10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
                            <p className="text-muted mb-8 text-lg">
                                I'm currently available for freelance work and full-time opportunities. If you have a project that needs a premium touch, let's talk.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:feriyalsusanto@gmail.com" className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Email Me</div>
                                        <div className="font-semibold group-hover:text-primary transition-colors">feriyalsusanto@gmail.com</div>
                                    </div>
                                </a>
                            </div>

                            <div className="flex items-center gap-6 mt-12">
                                <a href="https://github.com/feriyalsusanto" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </a>
                                <a href="https://linkedin.com/in/feriyalsusanto" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        required
                                        disabled={status !== "idle"}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-sm disabled:opacity-50"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        required
                                        disabled={status !== "idle"}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-sm disabled:opacity-50"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    required
                                    disabled={status !== "idle"}
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-sm disabled:opacity-50"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="How can I help you?"
                                    rows={4}
                                    required
                                    disabled={status !== "idle"}
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-colors text-sm resize-none disabled:opacity-50"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full py-4 rounded-2xl bg-primary text-black font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {status === "idle" && (
                                        <motion.span
                                            key="idle"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            Send Message <Send size={18} />
                                        </motion.span>
                                    )}
                                    {status === "sending" && (
                                        <motion.span
                                            key="sending"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            Sending... <span className="animate-pulse w-2 h-2 rounded-full bg-black" />
                                        </motion.span>
                                    )}
                                    {status === "sent" && (
                                        <motion.span
                                            key="sent"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2 text-black"
                                        >
                                            Message Sent! <CheckCircle2 size={18} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="mt-24 text-center text-muted text-sm">
                    <p>© {new Date().getFullYear()} Feriyal Susanto. Built with Next.js & Flutter mindset.</p>
                </footer>
            </div>
        </section>
    );
}
