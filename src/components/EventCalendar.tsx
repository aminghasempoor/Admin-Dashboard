"use client"
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar";

const EventCalendar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return(
        <div>
            <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                className="rounded-md border flex justify-center items-center w-full"
            />
        </div>
    )
}
export default EventCalendar