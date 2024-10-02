"use client"
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar";
import EventNews from "@/components/EventNews";

const EventCalendar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return(
        <div className="rounded-md">
            <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                className="rounded-md border flex justify-center items-center w-full"
            />
            <EventNews />
        </div>
    )
}
export default EventCalendar