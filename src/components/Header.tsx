"use client";

import * as React from "react"
import { usePathname } from 'next/navigation'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

function BreadcrumbDemo() {

    const pathName = usePathname();
    const paths = pathName.split('/').filter(Boolean);

    const accumulatedPaths = paths.reduce((acc: string[], path: string, index: number) => {
        if (index === 0) {
            return [...acc, `/${path}`];
        }
        return [...acc, `${acc[index - 1]}/${path}`];
    }, []);

    console.log(accumulatedPaths);

    return (
        <Breadcrumb>
        <BreadcrumbList className="text-xl">
            {paths.map((path: string, index: number) => (
                <React.Fragment key={index}>
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                    <BreadcrumbLink href={accumulatedPaths[index]}>
                        {path}
                    </BreadcrumbLink>
                    </BreadcrumbItem>
                </React.Fragment>
            ))}
        </BreadcrumbList>
        </Breadcrumb>
      );
}

export default function Header() {

    const { setTheme } = useTheme()

    return <div className="flex gap-4 p-4 border-b justify-between items-center">
        <div>
            <BreadcrumbDemo />
        </div>
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
}