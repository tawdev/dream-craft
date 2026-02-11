"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Share2, Globe } from "lucide-react";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState("Residential Construction");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = "212621122318";
        const text = `*New Lead from Dream Craft Footer*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project:* ${projectType}\n*Message:* ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    };

    return (
        <footer className="bg-secondary text-white py-24 px-6 md:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-black mb-8 leading-tight">
                        Start Your <br />
                        <span className="text-primary">Transformation.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-md">
                        Ready to build or redesign? Our experts are here to consult on your next high-end project in Marrakech.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <MapPin className="text-primary" size={24} />
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider">Studio Headquarters</p>
                                <p className="text-sm text-slate-400">Marrakech Design District, Morocco</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-primary" size={24} />
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider">Direct Inquiry</p>
                                <p className="text-sm text-slate-400">hello@dreamcraft.ma</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex gap-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Share2 size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Globe size={16} />
                        </a>
                    </div>
                </div>

                <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-slate-700 focus:border-primary focus:ring-0 py-2 outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    className="w-full bg-transparent border-b border-slate-700 focus:border-primary focus:ring-0 py-2 outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Type</label>
                            <select
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full bg-transparent border-b border-slate-700 focus:border-primary focus:ring-0 py-2 outline-none text-slate-400"
                            >
                                <option className="bg-secondary">Residential Construction</option>
                                <option className="bg-secondary">Interior Design</option>
                                <option className="bg-secondary">Commercial Build</option>
                                <option className="bg-secondary">Renovation</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                            <textarea
                                rows={4}
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Briefly describe your vision..."
                                className="w-full bg-transparent border-b border-slate-700 focus:border-primary focus:ring-0 py-2 outline-none transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-background-dark py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all mt-6">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs uppercase tracking-widest">
                <p>© 2026 Dream Craft. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
