"use client";

import React, { FC, useReducer } from "react";
import useSWR from "swr";

import { fetcher } from "@/services/SWR";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import LoadingSpinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";

interface Props {
    identifiers?: string;
}

const UsersListing:FC<Props> = () => {

    const [state, setState] = useReducer((state: any, newState: any) => ({
        ...state,
        ...newState
    }), {
        isFetching: false,
        perPage: 10,
        page: 1,
        total: 0,
        filter: {},
    });

    // Calculate the skip value
    const getSkip = () => (state.page - 1) * state.perPage;

    // Fetch the data
    const { data, isLoading, mutate } = useSWR([
        '/api/users',
        JSON.stringify({
            "skip": getSkip(),
            "limit": state.perPage,
            // "orderSort": "desc",
            // "orderBy": "createdTs",
            // ...(getFilterValues()),
        })
    ], fetcher, {
        keepPreviousData: true,
    });

    if (isLoading) {
        return <div>
            <LoadingSpinner />
        </div>;
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <DataTable
                columns={columns}
                data={data.users}
            />

            <Pagination
                totalItems={data.total}
                itemsPerPage={state.perPage}
                skipCount={getSkip()}
                currentPage={state.page}
                onPageChange={(page) => setState({ page: page })}
                onItemsPerPageChange={(perPage) => setState({ perPage: perPage })}
            />
        </div>
    );
};

export default UsersListing;
