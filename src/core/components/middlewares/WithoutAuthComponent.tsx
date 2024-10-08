import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";
import SvgLoading from "@/core/svgs/SvgLoading";
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

const WithoutAuthComponent = () => {
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
                        <Card className={"dark:opacity-80"}>
                            <CardHeader className={"flex flex-col justify-center items-center"}>
                                <SvgLoading height={100} width={100}/>
                                <h3 className={"text-center text-primary py-3"}>
                                    Your login is valid and you do not need to login again
                                </h3>
                                <div className={"flex"}>
                                    <h3 className={"px-2"}>
                                        redirecting to :
                                    </h3>
                                    <h3>
                                        dashboard page
                                    </h3>
                                </div>
                            </CardHeader>
                        </Card>
                    </CenterLayout>
                </FullPageLayout>
            </div>
        </>
    );
};

export default WithoutAuthComponent;
