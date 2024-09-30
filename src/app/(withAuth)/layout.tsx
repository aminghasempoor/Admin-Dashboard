import React from "react";
import NavBar from "@/layouts/dashboard/Navbar";
import SideBar from "@/layouts/dashboard/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <SideBar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
