"use client"

import DataCalendar, { Event } from "@/components/DataCalendar";
import PageHeading from "@/components/Typography/PageHeading";


export default function Calendar() {

    return (
        <>
            <PageHeading
                headingText="Calendar"
            >
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


const events: Event[] = [
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
