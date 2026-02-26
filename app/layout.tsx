import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

import ScrollToTop from "@/components/ScrollToTop";
import WhatsappContact from "@/components/WhatsappContact";

const font = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Dream Craft | Luxury Construction & Interior Design",
    description: "High-end construction and interior design with an architectural focus based in Marrakech.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${font.variable} font-sans antialiased bg-background-dark`}>
                {children}
                <ScrollToTop />
                <WhatsappContact />
            </body>
        </html>
    );
}
