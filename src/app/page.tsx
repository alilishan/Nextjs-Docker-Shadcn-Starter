
import { env } from "@/lib/env";


import Breadcrumbs from "@/components/Breadcrumbs";
import { HeadingOne } from "@/components/Typography";
import UsersListing from "@/modules/Users/listing";
import Snippet from "@/components/Snippet";



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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Snippet>Hello World</Snippet>
                <Snippet variant="primary">Hello World</Snippet>
                <Snippet variant="success">Hello World</Snippet>
                <Snippet variant="danger">Hello World</Snippet>
                <Snippet size="small">Hello World</Snippet>
                <Snippet size="medium">Hello World</Snippet>
                <Snippet size="large">Hello World</Snippet>
                <Snippet>
                    <div>Hello World from Snippet</div>
                </Snippet>
            </div>

            {
                // create an array of 10 items
                // Array.from({ length: 10 }).map((_, index) => (
                //     <div key={index} className="bg-white shadow-md p-4 m-4 rounded-md">
                //         <h1 className="text-xl font-bold text-gray-800">
                //             { APP_NAME } - {index}
                //         </h1>
                //         <p className="text-gray-600">
                //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
                //             facilisis magna. Nullam vel turpis nec felis varius congue. Donec
                //             tincidunt, justo eget ultricies gravida, urna erat convallis nunc, nec
                //             ultrices felis neque nec ex. Sed sit amet facilisis magna. Nullam vel
                //             turpis nec felis varius congue. Donec tincidunt, justo eget ultricies
                //             gravida, urna erat convallis nunc, nec ultrices felis neque nec ex.
                //         </p>
                //     </div>
                // ))
            }
        </main>
    );
}
