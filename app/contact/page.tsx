"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

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

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState("Villa Construction");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = "212661879373";
        const text = `*New Inquiry | Dream Craft*\n\n*Client:* ${fullName}\n*Email:* ${email}\n*Project:* ${projectType}\n\n*Message:*\n${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mb-24"
                    >
                        <motion.span variants={fadeIn} className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Contact Us</motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-12"
                        >
                            Start Your <br /><span className="text-primary italic font-light">Dialogue</span>
                        </motion.h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white/5 p-10 md:p-20 rounded-[3rem] border border-white/10"
                        >
                            <h2 className="text-4xl text-white font-bold mb-10 uppercase tracking-tighter">Inquiry Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <motion.div variants={staggerContainer} initial="initial" animate="whileInView" className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">FullName</label>
                                            <input
                                                type="text"
                                                required
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-white transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-white transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Project Type</label>
                                        <select
                                            value={projectType}
                                            onChange={(e) => setProjectType(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-slate-400 transition-colors"
                                        >
                                            <option className="bg-background-dark">Villa Construction</option>
                                            <option className="bg-background-dark">Hotel Renovation</option>
                                            <option className="bg-background-dark">Commercial Interior</option>
                                            <option className="bg-background-dark">Bespoke Furniture</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Message</label>
                                        <textarea
                                            rows={4}
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-white transition-colors resize-none"
                                            placeholder="Describe your vision..."
                                        />
                                    </div>
                                </motion.div>
                                <button type="submit" className="flex items-center gap-4 bg-primary text-background-dark px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
                                    Send Inquiry <Send size={24} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info and Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-12"
                        >
                            <div className="space-y-12">
                                <div className="flex gap-8 group">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Marrakech</h4>
                                        <p className="text-slate-400 italic font-light">lot iguider n48 avenue allal el fassi, Marrakech</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Direct Line</h4>
                                        <p className="text-slate-400 italic font-light">+212 661 879373</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Email</h4>
                                        <p className="text-slate-400 italic font-light">contact@dreamcraft.ma</p>
                                    </div>
                                </div>
                            </div>

                            {/* Live Google Map */}
                            <div className="flex-1 w-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                                <iframe
                                    src="https://www.google.com/maps?q=lot+iguider+n48+avenue+allal+el+fassi,+Marrakech&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-1000"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
