import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";


const UserCard = ({type}: { type: string }) => {
    return (
        <Card className={"w-full"}>
            <CardHeader>
                <CardTitle className={"capitalize text-primary pb-2"}>{type}s</CardTitle>
                <CardDescription>1,234</CardDescription>
            </CardHeader>
            <CardContent>
                <p className={"text-green-600"}>2024/25</p>
                <Image src="/more.png" alt="" width={20} height={20} />
            </CardContent>
        </Card>
    );
};

export default UserCard;