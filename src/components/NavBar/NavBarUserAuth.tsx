import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {Button} from "../ui/button";
import Image from "next/image";
import {LogOut} from "lucide-react";
import Link from "next/link";
import {AuthItems} from "@/lib/MenuItems";

function NavBarUserAuth() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant={"secondary"}
                        size={"icon"}
                        className={"rounded-full"}
                    >
                        <Image
                            src="/profiles.png"
                            alt=""
                            width={40}
                            height={40}
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"end"}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    {AuthItems.map((authItem, index) => {
                        return(
                            <DropdownMenuLabel key={index}>
                                <Link className={"flex items-center"} href={authItem.href}>
                                    <Image width={20} height={20} className="mr-2 h-4 w-4" src={authItem.icon}
                                           alt={"profile"}/> {authItem.label}
                                </Link>
                            </DropdownMenuLabel>
                        )
                    })}
                    <DropdownMenuSeparator/>
                    <DropdownMenuLabel className={"flex items-center"}>
                        {/* <LogoutLink className={"flex items-center"}> */}
                        <LogOut className="mr-2 h-4 w-4"/> Log Out
                        {/* </LogoutLink> */}
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default NavBarUserAuth;
