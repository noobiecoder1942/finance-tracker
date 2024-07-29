"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = (isOpen: boolean) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <section className="flex items-start justify-between">
            <div className={`transition-all min-h-screen border-r 
                ${isSidebarOpen ? 'w-[300px] min-w-[300px]' : 'w-[50px] min-w-[50px]'}`}>
                <Sidebar onToggle={handleToggleSidebar} />
            </div>

            <div className="grid w-full h-full">
                <Header />
                {children}
            </div>
        </section>
    );
}
