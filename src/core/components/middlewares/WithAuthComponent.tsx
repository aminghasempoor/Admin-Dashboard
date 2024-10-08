import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";
import SvgLoading from "@/core/svgs/SvgLoading";
import {Button} from "@/components/ui/button";
import {Card, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const WithAuthComponent = () => {
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
                                    Your access to this page has expired Please login again
                                </h3>
                                <Link className={"w-full"} href={"/signin"}>
                                    <Button className={"w-full"}>
                                        Sign In
                                    </Button>
                                </Link>
                            </CardHeader>
                        </Card>
                    </CenterLayout>
                </FullPageLayout>
            </div>
        </>
    );
};

export default WithAuthComponent;
