"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import Image from "next/image";
import { AppleLogoIcon, AppStoreIcon, PlayStoreIcon } from "../../public";
import { analyticsService } from "@/lib/analytics";

const projects = [
    {
        title: "Cotaslice Mobile",
        description: "Mobile application for Cotaslice Pizza in Malang, East Java, Indonesia. Built with Flutter.",
        tags: ["Flutter"],
        asset: "assets/images/project-cotaslice-mobile.png",
        playStore: "https://play.google.com/store/apps/details?id=com.cotaslice.app&hl=id",
        appStore: "https://apps.apple.com/id/app/cotaslice/id6754216475?l=id",
    },
    {
        title: "ForU Gateway (Partner B2B)",
        description: "Web application for partners to manage their community. Built with React and Next.js.",
        tags: ["Web"],
        asset: "assets/images/project-social-partner.png"
    },
    {
        title: "ForU Nexus (Admin Panel)",
        description: "Web application for admin to manage ForU Social. Built with React and Next.js.",
        tags: ["Web"],
        asset: "assets/images/project-social-admin.png"
    },
    {
        title: "ForU Social Mobile App",
        description: "Companion mobile application for users to track their reputation score in Web3. Built with Flutter.",
        tags: ["Flutter", "Web3"],
        asset: "assets/images/project-social-mobile.png",
        playStore: "https://play.google.com/store/apps/details?id=ai.untukmu.mobile&hl=en",
    },
    {
        title: "Untukmu AI Mobile App",
        description: "Marketplace mobile application focusing on gifting products with AI recommendation. Built with Flutter.",
        tags: ["Flutter", "AI"],
        asset: "assets/images/project-untukmu-mobile.png",
        appStore: "https://apps.apple.com/id/app/untukmu/id6448539145?l=id"
    },
    {
        title: "E-Tilang Kiosk",
        description: "A self-service kiosk app for traffic fine payments at prosecutor offices, streamlining public transactions with secure e-payments and real-time case lookup. Built with Flutter.",
        tags: ["Flutter"],
        asset: "assets/images/project-tilang-kiosk.png"
    },
    {
        title: "Halo JPN Mobile App",
        description: "A mobile app connecting the public with Indonesia\'s State Attorney, offering real-time legal Q&A, guidance, and resources to make legal access simple and transparent. Built with Flutter.",
        tags: ["Flutter"],
        asset: "assets/images/project-halojpn-mobile.png"
    },
    {
        title: "Siklus Refill Mobile App (Customer)",
        description: "Siklus Refill customer app for ordering and tracking orders. Built with Flutter and released on Android Play Store & iOS App Store. (Note: Currently unavailable on stores)",
        tags: ["Flutter"],
        asset: "assets/images/project-siklus-consumer.png"
    },
    {
        title: "Siklus Refill Mobile App (Seller)",
        description: "Internal application for Siklus motorists to manage deliveries and complete orders. Built with Flutter and released on Android Play Store. (Note: Currently unavailable)",
        tags: ["Flutter"],
        asset: "assets/images/project-siklus-seller.png",
    },
    {
        title: "Wava Mobile App",
        description: "Online patient registration application for Wava Husada Hospital, enabling clinical registration without queuing. Features seamless real-time integration.",
        tags: ["Flutter"],
        playStore: "https://play.google.com/store/apps/details?id=com.wavahusada.mobileapps",
        appStore: "https://apps.apple.com/id/app/wava-mobile/id1553016678",
        asset: "assets/images/project-wava-mobile.png",
    },
    {
        title: "Majoo Mobile App",
        description: "Majoo is a POS application which aims to help entrepreneurs manage their stores. Built with Flutter and released on Android Play Store and iOS App Store.",
        tags: ["Flutter"],
        playStore: "https://play.google.com/store/apps/details?id=com.klopos&hl=en",
        appStore: "https://apps.apple.com/id/app/aplikasi-kasir-wirausaha-majoo/id1642259472",
        asset: "assets/images/project-majoo-mobile.png",
    },
    {
        title: "Rural Maspion E-Commerce",
        description: "An e-commerce application for Maspion Group products built with Flutter. (Note: Currently unavailable)",
        tags: ["Flutter"],
        asset: "assets/images/project-maspion-mobile.png",
    },
    {
        title: "Efisiensi Bus Ticketing",
        description: "Helping to initially develop Efisiensi Bus Ticketing, an application for users to buy bus tickets. Built with Flutter.",
        tags: ["Flutter"],
        asset: "assets/images/project-efisiensi-mobile.png",
    },
    {
        title: "Homecare24 Android App",
        description: "Homecare24 is a healthcare application that provides medical personnel (nurses, midwives, physiotherapist) 24/7 at home. Built with Kotlin. (Note: Currently unavailable)",
        tags: ["Kotlin"],
        asset: "assets/images/project-homecare-mobile.png",
    },
    {
        title: "Klopos Android App",
        description: "Klopos is the first version of Majoo and only built for tablet devices. Built with Kotlin for tablet devices.",
        tags: ["Kotlin"],
        asset: "assets/images/project-klopos-mobile.png",
    },
    {
        title: "LemonTree Mobile App",
        description: "LemonTree is a school application for parents. Built with react native and it’s been deactivated by the client.",
        tags: ["React Native"],
        asset: "assets/images/project-lemontree-mobile.png",
    },
    {
        title: "Appsence Mobile App",
        description: "Appsence is a school application for teachers, parents and students. Built with Kotlin and it’s been deactivated by the client.",
        tags: ["React Native"],
        asset: "assets/images/project-appsence-mobile.png",
    },
    {
        title: "CatchUp Android App",
        description: "CatchUp is a multipurpose chat application. The application's main features are streaming, calling, video calling and chatting. Built with Java and the project is sunsetted.",
        tags: ["Java"],
        asset: "assets/images/project-catchup-mobile.png",
    },
    {
        title: "SIS Mobile App",
        description: "SIS Mobile is a sales information application for Indosat employees. Built with Java and it’s released on the Indosat internal group.",
        tags: ["Java"],
        asset: "assets/images/project-sis-mobile.png",
    },
    {
        title: "BFI Mobile App",
        description: "BFI Mobile is a field employees application for them to survey their customers. Built with Java and it’s released on the BFI internal group.",
        tags: ["Java"],
        asset: "assets/images/project-bfi-mobile.png",
    },
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-12 justify-center">
                    <Folder className="text-primary" size={28} />
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
                                {project.asset ? (
                                    <img
                                        src={project.asset}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                                        <span className="text-white/10 font-bold text-4xl group-hover:scale-110 transition-transform">
                                            Project {index + 1}
                                        </span>
                                    </>
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {project.playStore && (
                                        <a
                                            href={project.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white transition-colors flex items-center gap-2"
                                            title="Play Store"
                                        >
                                            <Image src={PlayStoreIcon.src} alt="Play Store" width={20} height={20} />
                                        </a>
                                    )}
                                    {project.appStore && (
                                        <a
                                            href={project.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white transition-colors flex items-center gap-2"
                                            title="App Store"
                                        >
                                            <Image src={AppleLogoIcon.src} alt="App Store" width={20} height={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {projects.length > 6 && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => {
                                setShowAll(!showAll);
                                analyticsService.log("btn_show_all_projects");
                            }}
                            className="px-8 py-4 rounded-full bg-primary text-black font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                        >
                            {showAll ? "Show Less" : "Show All Projects"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
