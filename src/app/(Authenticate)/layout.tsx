import React from "react";
import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";
import Image from "next/image";

export default function AuthenticateLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Image
                src={"/authphoto5.png"}
                fill
                priority
                className="blur-sm"
                style={{objectFit: "cover"}} alt={"background"}
            />
            {/*<div className={"fixed bg-black/50 top-0 left-0 w-full h-screen"}/>*/}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg w-[70%]">
            <FullPageLayout>
                <CenterLayout>
                    {children}
                </CenterLayout>
            </FullPageLayout>
            </div>
        </>
    )
}