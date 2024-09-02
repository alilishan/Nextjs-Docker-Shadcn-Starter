"use client";

import React, { FC } from "react";
import useSWR from "swr";

import { fetcher } from "@/services/SWR";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";

interface Props {
    identifiers?: string;
}

const UsersListing:FC<Props> = () => {

    // Fetch the data
    const { data, isLoading, mutate } = useSWR([
        '/api/payments',
        JSON.stringify({
            // "skip": getSkip(),
            // "take": state.perPage,
            // "orderSort": "desc",
            // "orderBy": "createdTs",
            // ...(getFilterValues()),
        })
    ], fetcher, {
        keepPreviousData: true,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <DataTable
                columns={columns}
                data={data.users}
            />
        </div>
    );
};

export default UsersListing;
