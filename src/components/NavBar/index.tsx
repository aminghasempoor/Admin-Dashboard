import {Input} from "../ui/input";
import {Search} from "lucide-react";
import NavBarAnnouncement from "./NavBarAnnouncement";
import NavBarMassages from "./NavBarMassages";
import NavBarUserAuth from "./NavBarUserAuth";
import ModeToggle from "@/components/ModeToggle";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="hidden md:flex relative w-[400px]">
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 p-2 bg-transparent outline-none w-full"
                />
            </div>
            <div className="flex items-center gap-5 justify-end w-full">
                <ModeToggle/>
                <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <NavBarMassages/>
                </div>
                <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <NavBarAnnouncement/>
                </div>
                <div className="flex gap-2 items-center">
                    <NavBarUserAuth/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
