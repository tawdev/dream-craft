import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "dream craft | Luxury Construction & Interior Design Marrakech",
    description: "High-end construction, renovation, and interior design company based in Marrakech. Specializing in luxury villas, apartments, and commercial projects.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-background-dark text-white selection:bg-primary selection:text-background-dark`}>
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
