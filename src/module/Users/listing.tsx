"use client";

import React, { FC, useReducer } from "react";
import useSWR from "swr";

import { fetcher } from "@/services/SWR";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import LoadingSpinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";
import SelectBox from "@/components/SelectBox";

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
        filterHairColor: "ALL",
    });

    // Calculate the skip value
    const getSkip = () => (state.page - 1) * state.perPage;

    // Get the filter values
    const getFilterValues = () => {
        return {
            ...(state.filterHairColor !== "ALL" && { key: 'hair.color', value: state.filterHairColor }),
        };
    }

    // Fetch the data
    const { data, isLoading, mutate } = useSWR([
        '/api/users',
        JSON.stringify({
            "skip": getSkip(),
            "limit": state.perPage,
            // "orderSort": "desc",
            // "orderBy": "createdTs",
            ...(getFilterValues()),
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
            <div className="pb-3 flex w-full items-center gap-1">
                <p className="text-xs">Filter Hair Color:</p>
                <SelectBox
                    placeholder="Choose Hair Color"
                    value={state.filterHairColor}
                    options={[
                        { key: "ALL", value: "All" },
                        { key: "Black", value: "Black" },
                        { key: "Brown", value: "Brown" },
                    ]}
                    onChange={(value) => setState({ filterHairColor: value })}
                />

            </div>

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
