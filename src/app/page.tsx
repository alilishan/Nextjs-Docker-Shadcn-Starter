
import { env } from "@/lib/env";


import Breadcrumbs from "@/components/Breadcrumbs";
import { HeadingOne } from "@/components/Typography";
import UsersListing from "@/services/Users/listing";



export default async function Home() {
    const { APP_NAME } = env;

    const breadcrumbs = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Dashboard",
            href: "/dashboard",
        },
    ];



    return (
        <main>

            <HeadingOne text="Dashboard" />
            <Breadcrumbs crumbs={ breadcrumbs } />

            <div className="py-10">
                <UsersListing />
            </div>

            {
                // create an array of 10 items
                Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="bg-white shadow-md p-4 m-4 rounded-md">
                        <h1 className="text-xl font-bold text-gray-800">
                            { APP_NAME } - {index}
                        </h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
                            facilisis magna. Nullam vel turpis nec felis varius congue. Donec
                            tincidunt, justo eget ultricies gravida, urna erat convallis nunc, nec
                            ultrices felis neque nec ex. Sed sit amet facilisis magna. Nullam vel
                            turpis nec felis varius congue. Donec tincidunt, justo eget ultricies
                            gravida, urna erat convallis nunc, nec ultrices felis neque nec ex.
                        </p>
                    </div>
                ))
            }
        </main>
    );
}
