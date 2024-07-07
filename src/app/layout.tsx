"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className={`transition-all min-h-screen border-r 
              ${isSidebarOpen ? 'w-[300px] min-w-[300px]' : 'w-[50px] min-w-[50px]'}`}>
                <Sidebar onToggle={handleToggleSidebar} />
            </div>

            <main className="grid w-full h-full">
              <Header />
              {children}
            </main>
        </ThemeProvider>



        </body>
    </html>
  );
}
