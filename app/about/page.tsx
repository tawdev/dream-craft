"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, ShieldCheck, Heart } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
};

export default function About() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* About Hero */}
            <section className="pt-40 pb-20 px-6 md:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mb-32"
                    >
                        <motion.span variants={fadeIn} className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Legacy</motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12"
                        >
                            The Art of <br /><span className="text-primary italic font-light">Structure</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed italic border-l-4 border-white/10 pl-10"
                        >
                            Dream Craft is more than a construction company. We are architects of environments, curators of spaces, and guardians of Moroccan heritage.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy - Split Section */}
            <section className="relative h-screen min-h-[800px] w-full flex flex-col md:flex-row overflow-hidden border-y border-white/5">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
                        alt="The Structure"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="relative h-full flex flex-col justify-center items-center px-10 text-center z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
                        >Technical <br /><span className="text-primary italic">Precision</span></motion.h2>
                        <p className="text-white/80 max-w-sm font-light italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Every foundation we lay is a commitment to structural longevity and engineering excellence.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group relative flex-1 overflow-hidden"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                        alt="The Aesthetic"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="relative h-full flex flex-col justify-center items-center px-10 text-center z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
                        >Aesthetic <br /><span className="text-primary italic">Soul</span></motion.h2>
                        <p className="text-white/80 max-w-sm font-light italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            We weave the threads of architecture and design to create spaces that evoke emotion and inspire.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    >
                        {[
                            { icon: <Award />, title: "Excellence", desc: "Setting the gold standard in Moroccan construction." },
                            { icon: <Users />, title: "Collaboration", desc: "Working in synergy with global architects and local masters." },
                            { icon: <ShieldCheck />, title: "Reliability", desc: "Surgical precision in deadlines and budget management." },
                            { icon: <Heart />, title: "Passion", desc: "Every project is a testimony to our love for architecture." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                className="p-10 bg-white/5 border border-white/10 rounded-2xl text-center flex flex-col items-center"
                            >
                                <div className="text-primary mb-8 scale-150">{value.icon}</div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-[0.2em] mb-4">{value.title}</h4>
                                <p className="text-slate-500 text-sm font-light italic">{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team/Experience Quote */}
            <section className="py-40 px-6 md:px-20 bg-secondary">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div {...fadeIn}>
                        <blockquote className="text-4xl md:text-6xl text-white font-light italic leading-tight mb-20 tracking-tighter">
                            &quot;In Marrakech, we don&apos;t just build walls; we build stories. Our mission is to transform the red city&apos;s landscape with an architectural vision that honors its past while shaping its future.&quot;
                        </blockquote>
                        <p className="text-primary font-bold uppercase tracking-[0.4em] text-sm">Amine Mansouri</p>
                        <p className="text-slate-500 text-xs uppercase tracking-widest mt-2">Founder & Lead Architect</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
