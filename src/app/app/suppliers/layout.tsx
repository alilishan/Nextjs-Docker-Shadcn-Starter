import SubMenu from "@/components/SubMenu";
import PageHeading from "@/components/Typography/PageHeading";
import { Metadata } from "next";





export const metadata: Metadata = {
    title: "Suppliers",
    description: "Manage suppliers",
};


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const breadcrumbs = [
        {
            name: "Suppliers",
            href: "/",
        },
        {
            name: "ACME Supplies",
            href: "/Suppliers",
        },
    ];

    const Links = [
        { title: "Overview", href: "/app/suppliers", icon: null },
        { title: "Purchase Orders", href: "/app/suppliers/purchase-orders", icon: null },
        { title: "Documents", href: "/app/profile/corporate", icon: null },
        { title: "Remarks", href: "/app/profile/banking", icon: null, badge: "12", badgeColor: "bg-amber-200 text-amber-800" },
        { title: "Activity", href: "/app/profile/activity", icon: null },
    ]

    return (
        <main>
            <PageHeading
                headingText="ACME Supplies"
                breadcrumbs={ breadcrumbs }
            >
                {/* <div className="flex items-center">
                    <UserCreateForm />
                </div> */}
            </PageHeading>

            <div className="py-10">
                <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">

                    <div className="lg:col-span-3 xl:col-span-2">
                        <SubMenu links={Links} />
                    </div>

                    <div className="lg:col-span-7 xl:col-span-9">
                        {children}
                    </div>


                </div>
            </div>


        </main>
    );
}
