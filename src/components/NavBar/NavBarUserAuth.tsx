"use client"
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {Button} from "../ui/button";
import Image from "next/image";
import {LogOut} from "lucide-react";
import Link from "next/link";
import {AuthItems} from "@/lib/MenuItems";
import useUser from "@/lib/app/hooks/useUser";

function NavBarUserAuth() {
    const {changeAuthState} = useUser()
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
                    <DropdownMenuGroup>
                        {AuthItems.map((authItem, index) => {
                            return (
                                <Link key={index} href={authItem.href}>
                                    <DropdownMenuItem className={"p-0 w-full"}>
                                        <Button className={" flex justify-between items-center w-full "}
                                                variant={"ghost"} onClick={() => changeAuthState(`${authItem.label}`)}>
                                            <Image width={20} height={20} className="mr-2 h-4 w-4" src={authItem.icon}
                                                   alt={"profile"}/>
                                            <h1 className={"capitalize"}>{authItem.label}</h1>
                                        </Button>
                                    </DropdownMenuItem>
                                </Link>
                            )
                        })}
                    </DropdownMenuGroup>
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
