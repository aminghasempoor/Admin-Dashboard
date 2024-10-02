import {events} from "@/lib/events";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const EventNews = () => {
    return (
        <div className="pt-4 flex flex-col gap-4">
            {events.map((event) => (
                <Card className="p-5 rounded-md border-2 "
                      key={event.id}>
                    <CardHeader>
                        <CardTitle className="font-bold text-xl">Events</CardTitle>
                        <CardDescription className="text-xs">{event.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="font-bold">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                        <span className="text-gray-600 text-xs">{event.time}</span>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default EventNews;