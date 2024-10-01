import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import { LogOut } from "lucide-react";

function NavBarUserAuth() {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-xs leading-3 font-medium">John Doe</span>
        <span className="text-[10px] text-gray-500 text-right">Admin</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"secondary"}
            size={"icon"}
            className={"rounded-full"}
          >
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="rounded-full bg-primary"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={"end"}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className={"flex items-center"}>
            {/* <LogoutLink className={"flex items-center"}> */}
            <LogOut className="mr-2 h-4 w-4" /> Log Out
            {/* </LogoutLink> */}
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default NavBarUserAuth;
