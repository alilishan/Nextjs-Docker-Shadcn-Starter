
import { env } from "@/lib/env";


import UsersListing from "@/modules/Users/listing";
import Snippet from "@/components/Snippet";
import PageHeading from "@/components/Typography/PageHeading";
import UserCreateForm from "@/modules/Users/UserCreateForm";



export default async function Dashboard() {
    const { APP_NAME } = env;

    const breadcrumbs = [
        {
            name: "Dashboard",
            href: "/",
        },
        {
            name: "Dashboard",
            href: "/dashboard",
        },
    ];



    return (
        <main>

            <PageHeading
                headingText="Dashboard"
                breadcrumbs={ breadcrumbs }
            >
                <div className="flex items-center">
                    <UserCreateForm />
                </div>
            </PageHeading>

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


        </main>
    );
}
