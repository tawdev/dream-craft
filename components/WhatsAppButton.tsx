"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/212621122318"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-6 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20"
        >
            <MessageCircle size={32} />
        </motion.a>
    );
}
