"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ThemeToggler() {
    const { setTheme, resolvedTheme } = useTheme();

    // State to track if the component has mounted on the client
    const [mounted, setMounted] = useState(false);

    // Ensure the component is only rendered on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid rendering the theme toggle until the component has mounted
    if (!mounted) {
        return null;  // Render nothing until the component has mounted
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {resolvedTheme === "dark" ? (
                    <Button onClick={() => setTheme("light")} variant="ghost" size={"icon"}>
                        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-yellow-300"/>
                    </Button>
                ) : (
                    <Button onClick={() => setTheme("dark")} variant="ghost" size={"icon"}>
                        <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-blue-700"/>
                    </Button>
                )}
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
    );
}

export default ThemeToggler;
