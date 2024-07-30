"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <section>
            <Sidebar />

            <div className={cn(
          "min-h-[calc(100vh_-_56px)] transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}>
                <Header />
                {children}
            </div>
        </section>
    );
}
