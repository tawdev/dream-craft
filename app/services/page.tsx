"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, Ruler, PenTool, Layout, Box, Lightbulb, Compass, Milestone, HardHat, Droplets, Grid } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Services() {
    const services = [
        {
            title: "Construction & Shell",
            icon: <HardHat className="size-12" />,
            desc: "Heavy construction and structural engineering for luxury villas and commercial complexes in Marrakech.",
            details: ["Foundations & Earthworks", "Reinforced Concrete Structure", "Structural Steelwork", "Site Preparation"]
        },
        {
            title: "Bespoke Renovation",
            icon: <Hammer className="size-12" />,
            desc: "Transforming historic riads and dated apartments into modern masterpieces while preserving soul.",
            details: ["Structural Reinforcement", "Space Reconfiguration", "Modern Electrics & Plumbing", "Facade Restoration"]
        },
        {
            title: "Interior Design",
            icon: <Layout className="size-12" />,
            desc: "Space planning and aesthetic curation that blends modern luxury with traditional Moroccan elements.",
            details: ["3D Concept Development", "FF&E Selection", "Lighting Design", "Mood Boards & Textures"]
        },
        {
            title: "Luxury Finishing",
            icon: <Droplets className="size-12" />,
            desc: "Exceptional craftsmanship in traditional and modern materials for a flawless architectural result.",
            details: ["Handcrafted Zellige", "Italian Marble", "Sculpted Plaster (Gebs)", "Oak & Walnut Joinery"]
        },
        {
            title: "Custom Furniture",
            icon: <Box className="size-12" />,
            desc: "Designing and manufacturing unique furniture pieces tailored specifically for your architectural space.",
            details: ["Bespoke Cabinetry", "Signature Pieces", "Built-in Units", "Technical Furniture"]
        },
        {
            title: "Project Management",
            icon: <Compass className="size-12" />,
            desc: "Full-cycle oversight ensuring your project is delivered on time, within budget, and to exacting standards.",
            details: ["Quantity Surveying", "Subcontractor Coordination", "Quality Assurance", "Procurement Management"]
        }
    ];

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* Services Hero */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/70 z-10"></div>
                    <Image
                        src="images/service.jpg"
                        alt="Construction Services"
                        fill
                        className="object-cover"
                        unoptimized
                        sizes="100vw"
                    />
                </div>
                <div className="relative z-20 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-primary italic text-2xl mb-4 block tracking-wide uppercase font-light"
                    >
                        Excellence in Execution
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter"
                    >
                        Our <span className="text-primary italic font-light">Services</span>
                    </motion.h1>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                className="group p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-primary transition-all duration-500 flex flex-col items-start"
                            >
                                <div className="text-primary mb-10 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">{service.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light italic">
                                    {service.desc}
                                </p>
                                <ul className="space-y-4 w-full pt-8 border-t border-white/10">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-4 text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">
                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Specific Focus Section - Materials */}
            <section className="py-32 px-6 md:px-20 bg-secondary">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <motion.div {...fadeIn} className="lg:w-1/2">
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-6 block">The Materiality</span>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-10 uppercase tracking-tighter">
                            Noble Materials. <br /><span className="text-primary italic font-light">Ageless Quality.</span>
                        </h2>
                        <p className="text-slate-400 text-xl leading-relaxed mb-12 font-light italic">
                            We source the world&apos;s finest materials and pair them with hereditary local craftsmanship. From Italian Carrara marble to technical architectural concrete, we ensure every texture tells a story of luxury.
                        </p>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-8"
                        >
                            <motion.div variants={fadeIn} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <Grid className="text-primary mb-4" />
                                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Zellige Architecture</h4>
                                <p className="text-slate-500 text-sm">Authentic terracotta tiles from Fes.</p>
                            </motion.div>
                            <motion.div variants={fadeIn} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <Milestone className="text-primary mb-4" />
                                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Stone & Marble</h4>
                                <p className="text-slate-500 text-sm">Finest selections for floors and walls.</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative aspect-square rounded-full overflow-hidden border-[20px] border-white/5"
                    >
                        <Image
                            src="/images/unsplash-1618221195710-dd6b41fa33a8.jpg"
                            alt="Noble Materials"
                            fill
                            className="object-cover"
                            unoptimized
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-5xl mx-auto bg-primary text-background-dark p-16 md:p-32 rounded-[4rem] text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">
                        Ready to <span className="italic font-light">Construct</span> Your Legacy?
                    </h2>
                    <p className="text-xl md:text-2xl mb-16 font-medium italic opacity-80 max-w-2xl mx-auto">
                        Schedule an architectural consultation for your project in Marrakech.
                    </p>
                    <button className="bg-background-dark text-white px-12 py-6 rounded-2xl font-bold text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                        Start Consultation
                    </button>
                </div>
            </section>

            <Footer />
        </main >
    );
}
