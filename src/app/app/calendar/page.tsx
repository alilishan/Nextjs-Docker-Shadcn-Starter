import DataCalendar, { Event } from "@/components/DataCalendar";
import PageHeading from "@/components/Typography/PageHeading";


export default async function Calendar() {

    return (
        <>
            <PageHeading
                headingText="Calendar"
            >
            </PageHeading>


            <div className="py-10">
                <DataCalendar
                    data={ events }
                    // onEventClick={ (event) => {
                    //     console.log(event);
                    // }}
                    // onCellClick={ (date) => {
                    //     console.log(date);
                    // }}
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
        "classNames": "bg-blue-200"
    },
    {
        "id": 2,
        "title": "Sample Event 2",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-blue-200"
    },
    {
        "id": 4,
        "title": "Sample Event 4",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-orange-200"
    },
    {
        "id": 5,
        "title": "Sample Event 5",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-red-200"
    },
    {
        "id": 6,
        "title": "Sample Event 6",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-green-200"
    },
    {
        "id": 7,
        "title": "Sample Event 7",
        "start": new Date("2024-09-27T06:27:08.574Z"),
        "end": new Date("2024-09-27T07:27:08.574Z"),
        "classNames": "bg-purple-200"
    },
    {
        "id": 3,
        "title": "Sample Event 3",
        "start": new Date("2024-09-01T06:27:08.574Z"),
        "end": new Date("2024-09-04T07:27:08.574Z"),
        "classNames": "bg-blue-200"
    }
]
