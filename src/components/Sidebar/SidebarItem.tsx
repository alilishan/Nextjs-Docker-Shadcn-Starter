import Link from "next/link";
import React, { FC, useContext } from "react";
import SidebarContext from "./context";

interface Props {
    href: string;
    icon: JSX.Element;
    text: string;
    alert?: boolean;
    active?: boolean;
}

const SidebarItem:FC<Props> = ({
    href,
    icon,
    text,
    alert,
    active
}) => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <Link
            href={href}
            className={`
                group
                relative flex items-center py-2 ${isOpen ? 'px-3' : 'px-1 justify-center'} my-1
                font-medium rounded-md cursor-pointer
                transition-all duration-200
                ${active
                    ? "bg-muted"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 "
                }
            `}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${isOpen ? 'w-auto ms-2' : 'w-0'}`}>{text}</span>
            {alert && (
                <span className={`absolute w-2 h-2 bg-slate-400 rounded ${isOpen ? 'right-2' : 'top-2 -right-1    '}`} />
            )}

            {
                !isOpen && (
                    <div className={`
                        absolute left-full rounded-md px-3 py-2 ml-6
                        bg-slate-700 text-slate-50 text-sm
                        invisible opacity-20 transition-all duration-200
                        -translate-x-2
                        shadow-md
                        group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
                        z-[99999]
                        text-nowrap
                        whitespace-nowrap
                    `}>{text}</div>
                )
            }
            <div className=" bg-blu"></div>
        </Link>
    );
};

export default SidebarItem;
