"use client"


import { ColumnDef } from "@tanstack/react-table";


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { User } from "./type"
import { IoIosMore } from "react-icons/io";
import { ArrowUpDown } from "lucide-react";


export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "status",
        header: "Status",
    },

    {
        accessorKey: "age",
        header: ({ column }) => {
            return (
                <div className="text-center">
                    <Button
                        variant="ghost"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Age
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => <div className="text-center">{row.getValue("age")}</div>,
    },

    {
        id: "hair",
        cell: ({ row }) => {
            const user = row.original

            return (
                <div className="flex items-center space-x-2">
                    <span>{user.hair.color} {user.hair.type}</span>
                </div>
            )
        }
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original

            return (
                <div className="flex justify-end w-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <IoIosMore size={18} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(user.id)}
                            >
                                Copy user ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },

]
