import { ArrowRight, BookText } from "lucide-react";

import { env } from "@/lib/env";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import Snippet from "@/components/Snippet";
import StatusChip from "@/components/Chips/StatusChip";
import TooltipItem from "@/components/TooltipItem";
import DashCard from "@/components/DashCard";
import UsersListing from "@/modules/Users/listing";


export default async function PurchaseOrders() {
    const { APP_NAME } = env;

    return (

        <div className="">

            <DashCard
                title="Purchase Orders"
                description="Purchase orders from ACME Supplies"
                className="mt-6"
                actions={
                    <Button variant="default" size="sm">
                        Create Purchase Order
                    </Button>
                }
            >
                <div className="px-4 pt-4 [&_.data-table]:p-0">
                    <UsersListing />
                </div>
            </DashCard>

        </div>
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
