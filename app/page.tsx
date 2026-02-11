"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, Ruler, PenTool, Layout, Box, Lightbulb } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaXYLNwLWuwG86nshVouPCnWTQes8iteAs54g2vrDLkFqfE5bCRWDD0a4xTDjRtm0VuiGSuhXqExU3gfg4ZqQxnsPFLaZnOrke6F04APLjVvsboW8VNPd8XN2GkN5vrkK22xqFT-YJ58t1X31crm4TigHhr3SQ0Qc1yX6uTld9PzuB3PNLR3Zw4ohkt9ojsvGrXSlOi0Nwes3ICwObJrK3SRvx15XRyDotAWZ5j80-on89fDHTBL6lpYwqoy6YFBwjxymseD8rJmWF"
                        alt="Luxury Villa Marrakech"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 px-6 md:px-20 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white/5 backdrop-blur-md p-8 md:p-16 border-l-8 border-primary rounded-r-2xl"
                    >
                        <h1 className="text-white text-5xl md:text-8xl font-black leading-[1] tracking-tighter mb-8 uppercase">
                            Crafting Structures. <br />
                            <span className="text-primary italic">Designing Life.</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-12">
                            High-end construction and interior design with an architectural edge. Based in Marrakech, serving absolute luxury.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-primary text-background-dark px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform uppercase tracking-wider">
                                View Projects
                            </button>
                            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-lg font-bold text-lg backdrop-blur-md hover:bg-white/20 transition-all uppercase tracking-wider">
                                Our Method
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Subtle scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
                >
                    <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent"></div>
                </motion.div>
            </section>

            {/* Services Overview */}
            <section className="py-32 px-6 md:px-20 bg-background-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                        <motion.div {...fadeIn} className="max-w-3xl">
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block">Expertise Marrakech</span>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">Integrated Solutions.</h2>
                        </motion.div>
                        <motion.p {...fadeIn} className="text-slate-400 max-w-md text-lg leading-relaxed font-light italic">
                            From the initial foundation to the final piece of bespoke furniture, we provide a seamless bridge between heavy construction and delicate interior curation.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {[
                            {
                                icon: <Ruler className="size-10" />,
                                title: "Architectural Planning",
                                desc: "Blueprinting and site analysis that prioritizes structural integrity and environmental harmony.",
                                items: ["Site Feasibility", "Schematic Design", "Regulatory Approvals"]
                            },
                            {
                                icon: <Hammer className="size-10" />,
                                title: "Construction Management",
                                desc: "Precise execution using high-grade industrial finishes and sustainable building techniques.",
                                items: ["General Contracting", "Quality Control", "Material Procurement"]
                            },
                            {
                                icon: <Layout className="size-10" />,
                                title: "Interior Curation",
                                desc: "Bespoke furniture and finish selection that complements the architectural DNA of your space.",
                                items: ["3D Renderings", "Custom Cabinetry", "Lighting Design"]
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 p-10 border border-white/10 hover:border-primary transition-all duration-500"
                            >
                                <div className="mb-8 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">{service.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">{service.desc}</p>
                                <ul className="space-y-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-500 uppercase tracking-widest font-bold">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-32 px-6 md:px-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeIn} className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 uppercase tracking-tighter">Selected Works</h2>
                        <div className="w-32 h-1.5 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1200px]">
                        <motion.div variants={fadeIn} className="md:col-span-8 relative group overflow-hidden rounded-2xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9S0iLt9UyncneGb4t6mihseYh8BFDFobeXjvfzTivrkgwbh2exG2CKTbjh9B6Y_ZvEVnm8rjbwN0zs8-TKeo95k-cBPJXHfy-_Ju8e7eHv27U4GG5PXB-ThFqhH2xU5jZYTzPHcGB4YxwhOIIKW-uySc8oRVaaBro95HP9fWS87tB8jIUe2gScHe4sGgwJi_ASMY9lfs3S5DU06gY3jubWM1xZg7Mu_vRGHsfDke10xO3t5mr-5sVm7OWYoNmYJyvPMWgd2XVQEf"
                                alt="Oakwood Residence"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                                <p className="text-primary font-bold uppercase text-sm tracking-[0.4em] mb-4 text-shadow">Interior Curation</p>
                                <h4 className="text-4xl font-black uppercase tracking-tighter">Oakwood Residence</h4>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="md:col-span-4 relative group overflow-hidden rounded-2xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACit1tfPCw62NDeOsc-JuD5YHXHBJbIBiswVatiB8coL2MO9oOHMfrRKArVVmaQd_nqms8mqp5bD8Eq9EJhX-pZBAS3Jb82ZpFAK_rrpDTcMYIgVUmT5g1xaafaVkV9KFMUbRlx7auz_U3r9AjDoelJ_zsNC_0ArKIBvtPTnVFVeSFLUb77noCNafTmWyo0oBrr_YLMVECfycCFNiX9tMJf3P55OX3VxLIjht8Q5DEqv2GZsfHZJ34e_dlG8-L4SpsdXv45eiyFuY8"
                                alt="The Apex Plaza"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                                <p className="text-primary font-bold uppercase text-sm tracking-[0.4em] mb-4">Commercial</p>
                                <h4 className="text-4xl font-black uppercase tracking-tighter">The Apex Plaza</h4>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="md:col-span-4 relative group overflow-hidden rounded-2xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYjs2In_lfFDsQQHNb6U-WMzapmWweiAvmrylsOsYT7TTyep1C1Vd3CszzUp7VegiqFhm4BR5ELH4075Ft2-Vw0pqfBl8a-5ntyxGWIC6h7ptapufhqfAKbqrJNrrUgAAsV1ju5udVAvQlie2KtmX5cLDZDNALOqxOW8s2n9v01xyut87iya1ZTKCxleVydKEfJF4rm23Hnqa5UBJp9rXNWxzKwPiNJbl_MFPlIiS6awCSKjFafLs-VzZrkcQfXf3N79aCGbvtelse"
                                alt="Hillside Villa"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                                <p className="text-primary font-bold uppercase text-sm tracking-[0.4em] mb-4">Construction</p>
                                <h4 className="text-4xl font-black uppercase tracking-tighter">Hillside Villa Extension</h4>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="md:col-span-8 relative group overflow-hidden rounded-2xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWBuDfOSXeUh1C06MT2CDMHpbq3bZpRXL4Hrvo8etW_BmwfYqqQK323SKHLsAsefiEBe0vpQV9gNrLyRKOwB0sDjiu8QSZWLgdhZ6x34YaQxXf-Vr7P7MhQ70v5XThrOTlDBJJYaArRUMwlEZhIZefaTmtn3z-YFYIQ2xvwjQtz5eS_E__8ri15uKDmQlWPoNy72PLP_Re92x3anBdf4fKQ_kjHe3qmpX1uznoF7Wljj-FcK9Ur06AbrIanj4FxFmgCn_gSFtAALuV"
                                alt="Horizon Estate"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                                <p className="text-primary font-bold uppercase text-sm tracking-[0.4em] mb-4">Architecture</p>
                                <h4 className="text-4xl font-black uppercase tracking-tighter">Horizon Estate</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-6 md:px-20 bg-secondary border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeIn} className="mb-24">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-4">The Process</h2>
                        <p className="text-primary text-xl font-bold italic tracking-wider">From Vision to Reality</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-20"
                    >
                        {[
                            {
                                num: "01",
                                icon: <Lightbulb className="size-10 text-primary" />,
                                title: "Planning",
                                desc: "We start with a deep dive into your lifestyle and site potential. This stage includes comprehensive surveys and conceptual sketches."
                            },
                            {
                                num: "02",
                                icon: <PenTool className="size-10 text-primary" />,
                                title: "Design",
                                desc: "Detailed 3D renders and material boards. We bridge the gap between technical blueprinting and sensory interior aesthetics."
                            },
                            {
                                num: "03",
                                icon: <Hammer className="size-10 text-primary" />,
                                title: "Execution",
                                desc: "Our construction team takes over with surgical precision. We manage every subcontractor and finish to ensure architectural fidelity."
                            }
                        ].map((step, idx) => (
                            <motion.div key={idx} variants={fadeIn} className="flex flex-col gap-10">
                                <div className="text-8xl font-black text-white/5 leading-none">{step.num}</div>
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary transition-colors">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold uppercase tracking-tight">{step.title}</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-lg font-light italic">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
