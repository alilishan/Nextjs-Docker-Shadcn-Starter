"use client"

import DataCalendar, { Event } from "@/components/DataCalendar";
import PageHeading from "@/components/Typography/PageHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Calendar() {

    const [events, setEvents] = useState<Event[]>(eventsData);

    // DONT USE CLIENT SIDE RENDERING FOR THIS COMPONENT
    // USE SERVER SIDE RENDERING
    // THIS IS JUST A SAMPLE

    return (
        <>
            <PageHeading
                headingText="Calendar"
            >
                <Button
                    onClick={ () => {
                        setEvents([...events, {
                            "id": 5,
                            "title": "Sample Event 5",
                            "start": new Date (new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 0, 0, 0)),
                            "end": new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(13, 0, 0, 0)),
                            "classNames": "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-50"
                        }]);
                    }}
                >Add Event</Button>
            </PageHeading>


            <div className="py-10">
                <DataCalendar
                    data={ events }
                    onEventClick={ (event) => {
                        console.log(event);
                    }}
                    onCellClick={ (date) => {
                        console.log(date);
                    }}
                />
            </div>
        </>
    )
}


const eventsData: Event[] = [
    {
        "id": 1,
        "title": "Sample Event",
        "start": new Date("2024-09-26T06:27:08.574Z"),
        "end": new Date("2024-09-26T07:27:08.574Z"),
        "classNames": "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-50" // This can be mapped to a color for maybe like category with dark set as well
    },
    {
        "id": 2,
        "title": "Sample Event 2",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-blue-50 text-blue-800 dark:bg-blue-800 dark:text-blue-50"
    },
    {
        "id": 4,
        "title": "Sample Event 4",
        "start": new Date("2024-09-23T06:27:08.574Z"),
        "end": new Date("2024-09-24T07:27:08.574Z"),
        "classNames": "bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-50"
    },
    {
        "id": 3,
        "title": "Sample Event 3",
        "start": new Date("2024-09-01T06:27:08.574Z"),
        "end": new Date("2024-09-04T07:27:08.574Z"),
        "classNames": "bg-purple-50 text-purple-800 dark:bg-purple-800 dark:text-purple-50"
    }
]
