import React, { FC } from "react";
import Link from "next/link";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export type Crumb = {
    name: string;
    href: string;
}

interface Props {
    crumbs: Crumb[];
}

const Breadcrumbs:FC<Props> = ({ crumbs }) => {

    const popped = crumbs.pop();

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>

                {crumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={crumb.href}>{crumb.name}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </React.Fragment>
                ))}

                {
                    popped && (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{ popped.name }</BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )
                }

            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Breadcrumbs;


