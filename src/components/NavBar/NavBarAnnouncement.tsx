import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function NavBarAnnouncement() {
  return (
    <Link href={""}>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Image src="/announcement.png" alt="" width={20} height={20} />
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full text-xs">
              1
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Announcement</DialogTitle>
            <DialogDescription>Be aware of important events</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Link>
  );
}

export default NavBarAnnouncement;
