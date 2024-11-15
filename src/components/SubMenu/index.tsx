"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
    links: {
        title: string;
        href: string;
        icon: React.ReactNode;
    }[];
    className?: string;
}

const SubMenu:FC<Props> = ({
    links,
    className,
}) => {
    const pathName = usePathname();

    return (
        <div className={cn('w-full max-w-[260px] px-1 flex flex-col gap-4 sticky top-[80px]', className)}>
            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`flex items-center gap-2 py-2 px-4 rounded-md ${pathName === link.href ? "bg-white shadow text-primary-800 dark:bg-slate-700 dark:text-primary-400" : ""}`}
                    >
                        {link.icon}
                        {link.title}
                    </Link>
                ))
            }
        </div>
    );
};

export default SubMenu;
