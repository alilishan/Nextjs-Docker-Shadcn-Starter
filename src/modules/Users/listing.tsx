"use client";

import React, { FC, useReducer, useState } from "react";
import useSWR from "swr";

import { columns } from "./columns";

import { fetcher } from "@/services/SWR";
import { DataTable } from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import SelectBox from "@/components/SelectBox";
import DataTableToolBar from "@/components/DataTable/ToolBar";
import FilterSheet from "@/components/FilterSheet";
import SelectSearchBox from "@/components/SelectSearchBox";


interface Props {
    identifiers?: string;
}

const UsersListing:FC<Props> = () => {

    // State management
    const [state, setState] = useReducer((state: any, newState: any) => ({
        ...state,
        ...newState
    }), {
        isFetching: false,
        perPage: 10,
        page: 1,
        total: 0,
        filterHairColor: "ALL",
        columns: columns.filter((column) => column.show),
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


    // if (isLoading) {
    //     return <div>
    //         <LoadingSpinner />
    //     </div>;
    // }

    return (
        <div>

            <DataTableToolBar
                columns={columns}
                onShowColumnsChange={(columns) => setState({ columns })}
                isLoading={isLoading}
            >
                <>
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
                        width="180px"
                    />

                    <FilterSheet
                        title="Custom Filters"
                        filterGroups={
                            [
                                {
                                    name: "Hair",
                                    type: "checkbox",
                                    options: [
                                        { key: "hair.color", label: "Hair Color" },
                                        { key: "hair.length", label: "Hair Length" },
                                        { key: "hair.type", label: "Hair Type" },
                                    ]
                                },
                                {
                                    name: "Age",
                                    type: "radio",
                                    options: [
                                        { key: "18-25", label: "18-25" },
                                        { key: "26-35", label: "26-35" },
                                        { key: "36-45", label: "36-45" },
                                        { key: "46+", label: "46+" }
                                    ]
                                },
                                {
                                    name: "Gender",
                                    type: "select",
                                    options: [
                                        { key: "male", label: "Male" },
                                        { key: "female", label: "Female" },
                                        { key: "other", label: "Other" }
                                    ]
                                },
                                {
                                    name: "Occupation",
                                    type: "checkbox",
                                    options: [
                                        { key: "student", label: "Student" },
                                        { key: "employed", label: "Employed" },
                                        { key: "self-employed", label: "Self-employed" },
                                        { key: "unemployed", label: "Unemployed" }
                                    ]
                                }
                            ]
                        }
                        onSubmitFilters={(filters) => {
                            console.log(filters);
                        }}
                    />
                </>

                <SelectSearchBox
                    placeholder="Search..."
                    width="250px"
                    options={[
                        { key: "hair.color", value: "Hair Color" },
                        { key: "hair.length", value: "Hair Length", selected: true },
                        { key: "hair.type", value: "Hair Type" },
                    ]}
                    onChange={(items) => console.log(items)}
                />
            </DataTableToolBar>


            <DataTable
                columns={state.columns}
                data={isLoading ? [] : data.users}
                isLoading={isLoading}
            />


            <Pagination
                totalItems={isLoading ? 0 : data.total}
                itemsPerPage={state.perPage}
                skipCount={getSkip()}
                currentPage={state.page}
                onPageChange={(page) => setState({ page: page })}
                onItemsPerPageChange={(perPage) => setState({ perPage: perPage })}
                isLoading={isLoading}
            />
        </div>
    );
};

export default UsersListing;
