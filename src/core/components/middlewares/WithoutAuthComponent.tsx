import FullPageLayout from "@/layouts/FullPageLayout";
import CenterLayout from "@/layouts/CenterLayout";
import SvgLoading from "@/core/svgs/SvgLoading";
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import NextLink from "next/link";

const WithoutAuthComponent = () => {
    return (
        <FullPageLayout>
            <CenterLayout>
                <Card className={"dark:opacity-80"}>
                    <CardHeader className={"flex flex-col justify-center items-center"}>
                        <SvgLoading height={100} width={100}/>
                        <h3 className={"text-center py-3"}>
                            Your login is valid and you do not need to login again
                        </h3>
                        <Button>
                            <NextLink
                                className={"p-3 flex"}
                                href={{
                                    pathname: "/dashboard",
                                    // query : {back_url : encodeURIComponent("/")}
                                }}
                            >
                                <h3 className={"px-2"}>
                                    redirect to :
                                </h3>
                                <h3>
                                    dashboard page
                                </h3>
                            </NextLink>
                        </Button>

                    </CardHeader>
                </Card>
            </CenterLayout>
        </FullPageLayout>
    );
};

export default WithoutAuthComponent;
