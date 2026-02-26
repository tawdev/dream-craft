"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Maximize2 } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
};

const projectsData = [
    {
        id: 1,
        title: "The Golden Riad",
        category: "Renovation",
        type: "villa",
        image: "/images/unsplash-1574362848149-11496d93a7c7.jpg",
        location: "Medina, Marrakech"
    },
    {
        id: 2,
        title: "Apex Plaza",
        category: "Construction",
        type: "commercial",
        image: "/images/unsplash-1486406146926-c627a92ad1ab.jpg",
        location: "Gueliz, Marrakech"
    },
    {
        id: 3,
        title: "Marble Haven",
        category: "Interior Design",
        type: "apartment",
        image: "/images/unsplash-1600566753190-17f0baa2a6c3.jpg",
        location: "Hivernage, Marrakech"
    },
    {
        id: 4,
        title: "Royal Atlas Hotel",
        category: "Construction",
        type: "hotel",
        image: "/images/unsplash-1542314831-068cd1dbfeeb.jpg",
        location: "Atlas Mountains"
    },
    {
        id: 5,
        title: "Concrete Minimal",
        category: "Architecture",
        type: "villa",
        image: "/images/unsplash-1503387762-592dea58ea2e.jpg",
        location: "Palmeraie, Marrakech"
    }
];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.type === filter);

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-20"
                    >
                        <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Portfolio</span>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                            Bespoke <br /><span className="text-primary italic font-light">Creations</span>
                        </h1>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-20 border-b border-white/5 pb-10">
                        {["all", "villa", "apartment", "hotel", "commercial"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all border ${filter === cat
                                    ? "bg-primary text-background-dark border-primary"
                                    : "bg-transparent text-slate-500 border-white/10 hover:border-primary/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                        layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                                    }}
                                    className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                            {project.category}
                                        </span>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm italic font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                            {project.location}
                                        </p>
                                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                            <span className="text-xs uppercase tracking-widest font-bold">View Archive</span>
                                            <ArrowRight size={20} className="text-primary" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Before & After Section */}
                    <section className="py-40 bg-secondary rounded-[4rem] px-10 md:px-20 overflow-hidden relative">
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                            <motion.div {...fadeIn}>
                                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Metamorphosis</span>
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-10 tracking-tighter">
                                    Before <br /><span className="text-primary italic font-light">& After</span>
                                </h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed italic mb-12">
                                    Witness the transformation of complex architectural challenges into refined luxury environments. Our systematic approach ensures every detail is reimagined.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm">
                                        <ChevronRight className="text-primary" /> Structure Reinforcement
                                    </div>
                                    <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm">
                                        <ChevronRight className="text-primary" /> Material Revitalization
                                    </div>
                                    <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm">
                                        <ChevronRight className="text-primary" /> Design Integration
                                    </div>
                                </div>
                            </motion.div>

                            <div className="lg:w-2/3 grid grid-cols-2 gap-4 h-[500px] md:h-[700px] w-full">
                                <div className="relative rounded-3xl overflow-hidden group">
                                    <Image
                                        src="/images/unsplash-1445510491599-c391e8046a68.jpg"
                                        alt="Before"
                                        fill
                                        className="object-cover grayscale"
                                        unoptimized
                                        sizes="(max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Before</div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden group">
                                    <Image
                                        src="/images/spacejoy-h2_3dL9yLpU-unsplash.jpg"
                                        alt="After"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                        sizes="(max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-8 left-8 bg-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-background-dark">After</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    );
}
