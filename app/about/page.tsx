"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, ShieldCheck, Heart } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
};

export default function About() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* About Hero */}
            <section className="pt-40 pb-20 px-6 md:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeIn} className="max-w-4xl mb-32">
                        <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Legacy</span>
                        <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                            The Art of <br /><span className="text-primary italic font-light">Structure</span>
                        </h1>
                        <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed italic border-l-4 border-white/10 pl-10">
                            Dream Craft is more than a construction company. We are architects of environments, curators of spaces, and guardians of Moroccan heritage.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy - Split Section */}
            <section className="relative h-screen min-h-[800px] w-full flex flex-col md:flex-row overflow-hidden border-y border-white/5">
                <div className="group relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9S0iLt9UyncneGb4t6mihseYh8BFDFobeXjvfzTivrkgwbh2exG2CKTbjh9B6Y_ZvEVnm8rjbwN0zs8-TKeo95k-cBPJXHfy-_Ju8e7eHv27U4GG5PXB-ThFqhH2xU5jZYTzPHcGB4YxwhOIIKW-uySc8oRVaaBro95HP9fWS87tB8jIUe2gScHe4sGgwJi_ASMY9lfs3S5DU06gY3jubWM1xZg7Mu_vRGHsfDke10xO3t5mr-5sVm7OWYoNmYJyvPMWgd2XVQEf"
                        alt="The Structure"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="relative h-full flex flex-col justify-center items-center px-10 text-center z-10">
                        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Technical <br /><span className="text-primary italic">Precision</span></h2>
                        <p className="text-white/80 max-w-sm font-light italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Every foundation we lay is a commitment to structural longevity and engineering excellence.
                        </p>
                    </div>
                </div>
                <div className="group relative flex-1 overflow-hidden">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaXYLNwLWuwG86nshVouPCnWTQes8iteAs54g2vrDLkFqfE5bCRWDD0a4xTDjRtm0VuiGSuhXqExU3gfg4ZqQxnsPFLaZnOrke6F04APLjVvsboW8VNPd8XN2GkN5vrkK22xqFT-YJ58t1X31crm4TigHhr3SQ0Qc1yX6uTld9PzuB3PNLR3Zw4ohkt9ojsvGrXSlOi0Nwes3ICwObJrK3SRvx15XRyDotAWZ5j80-on89fDHTBL6lpYwqoy6YFBwjxymseD8rJmWF"
                        alt="The Aesthetic"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="relative h-full flex flex-col justify-center items-center px-10 text-center z-10">
                        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Aesthetic <br /><span className="text-primary italic">Soul</span></h2>
                        <p className="text-white/80 max-w-sm font-light italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            We weave the threads of architecture and design to create spaces that evoke emotion and inspire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Award />, title: "Excellence", desc: "Setting the gold standard in Moroccan construction." },
                            { icon: <Users />, title: "Collaboration", desc: "Working in synergy with global architects and local masters." },
                            { icon: <ShieldCheck />, title: "Reliability", desc: "Surgical precision in deadlines and budget management." },
                            { icon: <Heart />, title: "Passion", desc: "Every project is a testimony to our love for architecture." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 bg-white/5 border border-white/10 rounded-2xl text-center flex flex-col items-center"
                            >
                                <div className="text-primary mb-8 scale-150">{value.icon}</div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-[0.2em] mb-4">{value.title}</h4>
                                <p className="text-slate-500 text-sm font-light italic">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
