import React from "react";
import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";

export default function AuthenticateLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <FullPageLayout>
                <CenterLayout>
                    {children}
                </CenterLayout>
            </FullPageLayout>
        </>
    )
}