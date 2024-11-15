"use client"

import { useMemo, useState } from "react"

import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"



interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    isLoading: boolean
}


export function DataTable<TData, TValue>({
    columns,
    data,
    isLoading,
}: DataTableProps<TData, TValue>) {

    // Sorting
    const [sorting, setSorting] = useState<SortingState>([]);

    // Handle the data
    const tableData = useMemo(
        () => (isLoading ? Array(10).fill({}) : data),
        [isLoading, data]
    );

    // Handle the columns
    const tableColumns = useMemo(() =>
        isLoading
            ? columns.map((column) => ({
                ...column,
                cell: () => (
                <Skeleton className="h-[20px] my-2 rounded" />
                )
            }))
            : columns,
        [isLoading, columns]
    );

    // Use the react table
    const table = useReactTable({
        data: tableData,
        columns: tableColumns,
        getCoreRowModel: getCoreRowModel(),

        // getPaginationRowModel: getPaginationRowModel(),
        // Disabled for manual pagination
        // https://tanstack.com/table/v8/docs/api/features/pagination#manualpagination

        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })

    return (
        <div>

            <div className="data-table">
                <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => {
                                return (
                                <TableHead
                                    key={header.id}
                                    // className={cn(
                                    //     'text-slate-4700 uppercase text-xs font-bold bg-muted',
                                    //     index === 0 && 'rounded-l-lg',
                                    //     index === headerGroup.headers.length - 1 && 'rounded-r-lg'
                                    // )}
                                >
                                    {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                        )}
                                </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                                ))}
                            </TableRow>
                            ))
                        ) : (
                            <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* <DataTablePagination table={table} /> */}

        </div>
    )
}
