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
import { ExtendedColumnDef } from "@/components/DataTable/types";
import Chip from "@/components/Chips";



export const columns: ExtendedColumnDef<User, any>[] = [
    {
        id: "firstName",
        accessorKey: "firstName",
        header: "First Name",
        label: "First Name",
        show: true,
    },
    {
        id: "lastName",
        accessorKey: "lastName",
        header: "Last Name",
        label: "Last Name",
        show: true,
    },
    {
        id: "gender",
        accessorKey: "gender",
        header: "Gender",
        label: "Gender",
        show: true,
        cell: ({ row }) => {
            const user = row.original
            const gender = user.gender.toUpperCase();
            const variant = gender === 'MALE' ? 'primary' : 'success';
            return (
                <Chip text={gender} variant={variant} />
            )
        },
    },

    {
        id: "age",
        accessorKey: "age",
        label: "Age",
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
        show: true,
    },

    {
        id: "hair",
        header: "Hair",
        label: "Hair",
        cell: ({ row }) => {
            const user = row.original

            return (
                <div className="flex items-center space-x-2">
                    <span>{user.hair.color} {user.hair.type}</span>
                </div>
            )
        },
        show: true,
    },

    {
        id: "actions",
        label: "Actions",
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
        show: true,
    },

]
