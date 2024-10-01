import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBarMenu from "@/components/SideBarMenu";
import Navbar from "@/components/NavBar";

function WithAuthlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen px-4 pt-2">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
          <span className="hidden lg:block text-[#4ed9f1]">Dashboard</span>
        </Link>
        <SideBarMenu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default WithAuthlayout;
