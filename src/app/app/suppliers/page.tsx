import { ReactNode } from "react";
import { Mail, Phone, ArrowRight, BookText } from "lucide-react";

import { env } from "@/lib/env";

import PageHeading from "@/components/Typography/PageHeading";
import SubMenu from "@/components/SubMenu";
import Snippet from "@/components/Snippet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatusChip from "@/components/Chips/StatusChip";
import TooltipItem from "@/components/TooltipItem";

export default async function Suppliers() {
    const { APP_NAME } = env;

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

    const contacts = [
        {
            value: "contact-1",
            initial: "JD",
            name: "Mr. John Doe",
            title: "Account Manager",
            email: "john.doe@acme.com",
            phone: "(555) 123-4567",
        },
        {
            value: "contact-2",
            initial: "JS",
            name: "Ms. Jane Smith",
            title: "Sales Representative",
            email: "jane.smith@acme.com",
            phone: "(555) 234-5678",
        },
        {
            value: "contact-3",
            initial: "RJ",
            name: "Mr. Robert Johnson",
            title: "Support Specialist",
            email: "robert.j@acme.com",
            phone: "(555) 345-6789",
        },
    ];

    const Links = [
        { title: "Overview", href: "/app/suppliers", icon: null },
        { title: "Purchase Orders", href: "/app/suppliers/purchase-orders", icon: null },
        { title: "Documents", href: "/app/profile/corporate", icon: null },
        { title: "Remarks", href: "/app/profile/banking", icon: null },
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

                    <div className="lg:col-span-4 xl:col-span-6">
                        <DashCard
                            title="Information"
                            description="Information for ACME Supplies"
                        >
                            <div className="space-y-2 p-4">
                                <InfoRow
                                    label="Registration No:"
                                    value={<Snippet>1234567890 (ABN-1234567890)</Snippet>}
                                />
                                <InfoRow
                                    label="Phone:"
                                    value={<Snippet>+6012 885 8859</Snippet>}
                                />
                                <InfoRow
                                    label="Email:"
                                    value={<Snippet>info@acme.com</Snippet>}
                                />
                                <InfoRow
                                    label="Address:"
                                    rowClassName="items-start"
                                    value={<Address address="#60-01, Wisma Minlon" address2="Lebuhraya Sg Besi" city="Sri Kembangan" state="Selangor" zip="43300" country="Malaysia" />}
                                />
                            </div>
                            <Separator />

                            <div className="flex items-center px-4 py-3 ">
                                <Button variant="warning" size="sm" className="font-semibold">
                                    Supplier has 10 remarks
                                </Button>
                                <Button variant="secondary" size="sm" className="ms-auto">
                                    View All Documents
                                </Button>
                            </div>
                        </DashCard>


                        <DashCard
                            title="Recent Purchase Orders"
                            description="Last 3 purchase orders from ACME Supplies"
                            className="mt-6"
                        >
                            <div className="">
                                <Table className="card-table">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>PO Number</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><Snippet size="small">PO-2024-001</Snippet></TableCell>
                                            <TableCell>Jan 15, 2024</TableCell>
                                            <TableCell>$12,450.00</TableCell>
                                            <TableCell><StatusChip status="delivered" /></TableCell>
                                            <TableCell>
                                                <ViewButton />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Snippet size="small">PO-2024-002</Snippet></TableCell>
                                            <TableCell>Jan 28, 2024</TableCell>
                                            <TableCell>$8,920.00</TableCell>
                                            <TableCell><StatusChip status="in_transit" /></TableCell>
                                            <TableCell>
                                                <ViewButton />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><Snippet size="small">PO-2024-003</Snippet></TableCell>
                                            <TableCell>Feb 05, 2024</TableCell>
                                            <TableCell>$15,730.00</TableCell>
                                            <TableCell><StatusChip status="processing" /></TableCell>
                                            <TableCell>
                                                <ViewButton />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Separator />
                                <div className="px-4 py-3 flex justify-start">
                                    <Button variant="default" size="sm">
                                        Create Purchase Order
                                    </Button>
                                    <Button variant="secondary" size="sm" className="ms-auto">
                                        View All Purchase Orders
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </DashCard>

                    </div>

                    <div className="lg:col-span-3 xl:col-span-3">
                        <DashCard
                            title="Contacts"
                            description="Contacts for ACME Supplies"
                            className="pb-0"
                        >
                            <Accordion type="single" collapsible className="w-full">
                                {contacts.map(contact => (
                                    <AccordionItem key={contact.value} value={contact.value} className="last-child:[&>button]:border-b-0">
                                        <AccordionTrigger className="hover:no-underline px-4">
                                            <div className="flex items-center gap-4 no-underline">
                                                <div className="h-12 w-12 rounded-full bg-slate-100 px- flex items-center justify-center">
                                                    <span className="text-xl font-medium text-slate-600">{contact.initial}</span>
                                                </div>
                                                <div className="text-left">
                                                    <h3 className="font-medium">{contact.name}</h3>
                                                    <p className="text-sm text-muted">{contact.title}</p>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-2 pt-4 px-6">
                                                <p className="text-sm flex items-center gap-2">
                                                    <Mail className="w-4 h-4 mx-2" />
                                                    <Snippet size="small">{contact.email}</Snippet>
                                                </p>
                                                <p className="text-sm flex items-center gap-2">
                                                    <Phone className="w-4 h-4 mx-2" />
                                                    <Snippet size="small">{contact.phone}</Snippet>
                                                </p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </DashCard>


                    </div>


                </div>
            </div>


        </main>
    );
}



const DashCard = ({ children, title, description, className }: { children: ReactNode, title: string, description: string | null, className?: string }) => {
    return (
        <div className={cn("bg-white rounded-lg shadow", className)}>
            <div className="px-4 py-3">
                <h3 className="text-lg font-medium">{title}</h3>
                {description && <p className="text-sm text-muted">{description}</p>}
            </div>
            <Separator />
            {children}
        </div>
    );
}

const InfoRow = ({ label, value, rowClassName }: { label: string, value: string | ReactNode, rowClassName?: string }) => {
    return (
        <div className={cn("flex items-center w-full", rowClassName)}>
            <div className="w-1/3 font-medium text-dark bg-slate-50 p-2">{label}</div>
            <div className="grow ps-2">{value}</div>
        </div>
    );
}

const Address = ({ address, address2, city, state, zip, country }: { address: string, address2: string, city: string, state: string, zip: string, country: string }) => {
    return (
        <address className="not-italic">
            <div>{address}</div>
            <div>{address2}</div>
            <div>{city}, {state} {zip}</div>
            <div>{country}</div>
        </address>
    );
}


const ViewButton = () => {
    return (
        <TooltipItem
            content={<Button variant="ghost" size="sm">View</Button>}
        >
            <Button variant="ghost" size="icon">
                <BookText className="w-4 h-4" />
            </Button>
        </TooltipItem>
    )
}
