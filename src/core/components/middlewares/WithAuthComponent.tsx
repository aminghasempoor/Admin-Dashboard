import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";
import SvgLoading from "@/core/svgs/SvgLoading";
import {Button} from "@/components/ui/button";
import NextLink from "next/link"
import {Card, CardHeader} from "@/components/ui/card";

const WithAuthComponent = () => {
    return (
        <FullPageLayout>
            <CenterLayout>
                <Card className={"dark:opacity-80"}>
                    <CardHeader className={"flex flex-col justify-center items-center"}>
                        <SvgLoading height={100} width={100}/>
                        <h3 className={"text-center py-3"}>
                            Your access to this page has expired Please login again
                        </h3>
                        <Button className={"w-full"}>
                            <NextLink
                                href={{
                                    pathname: "/signup",
                                    // query : {back_url : encodeURIComponent("/")}
                                }}
                            >
                                Sign In
                            </NextLink>
                        </Button>
                    </CardHeader>
                </Card>
            </CenterLayout>
        </FullPageLayout>
    );
};

export default WithAuthComponent;
