"use client";

import Link from "next/link";
import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 px-6 md:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-5 md:max-w-sm">
                    <div className="h-20 w-auto self-start">
                        <img
                            src="/images/logo.png"
                            alt="Dream Craft Logo"
                            className="h-full w-auto object-contain brightness-0 invert"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">
                        Crafting <span className="text-primary italic">Excellence.</span>
                    </h2>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                        High-end construction and interior design with an architectural focus based in Marrakech.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-500 border border-white/10">
                            <Facebook size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-500 border border-white/10">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-500 border border-white/10">
                            <TikTokIcon size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-500 border border-white/10">
                            <Youtube size={16} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                    <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary transition-colors flex-1 min-w-[200px]">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-0.5">Studio</h4>
                            <p className="text-xs text-white">Marrakech, Morocco</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary transition-colors flex-1 min-w-[200px]">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-0.5">Enquiries</h4>
                            <p className="text-xs text-white">contact@dreamcraft.ma</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                <p>© 2026 C-digital. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
