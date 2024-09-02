"use client";

import React, { FC, useContext } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { PiMonitor, PiBarcode, PiAddressBook, PiFolder } from "react-icons/pi";


import SidebarContext from "./context";
import MarcLogo from "@/assets/marc-logo-corp.jpg";
import Image from "next/image";
import SidebarItem from "./SidebarItem";

interface Props {
    className?: string;
}

const Sidebar:FC<Props> = () => {
    const pathName = usePathname();
    const { isOpen } = useContext(SidebarContext);

    return (
        <aside
            className={`
                shrink-0
                sticky top-0 z-10
                bg-white transition-width dark:bg-slate-900 border-r dark:border-slate-800 shadow-sm md:flex h-screen
                ${isOpen ? "w-[255px]" : "w-[72px]"}
            `}> { /** hidden */}
            <nav className="h-full flex flex-col w-full">

                {/* Header */}
                <div className={`${isOpen ? 'p-4' : 'p-2 justify-center'} overflow-hidden pb-2 border-b dark:border-slate-800 w-full flex items-center gap-3 transition-all`}>
                    <Link href="/app" className="">
                        <div
                            className={`
                                w-[48px] h-[48px]
                            `}
                        >
                            <Image src={MarcLogo} alt="Marc Logo" className="img-fluid" />
                        </div>
                    </Link>

                    { isOpen && <div className="text-sm">
                        <h6 className="font-medium">MARC Data</h6>
                        <p className="text-xs">Referrer App</p>
                    </div> }

                </div>

                <div className="flex flex-col flex-1 p-3">
                    <SidebarItem href="/app" icon={<PiMonitor size={'22px'} />} text="Dashboard" active={pathName === '/'} />
                    <SidebarItem href="/app/codes" icon={<PiBarcode size={'22px'} />} text="Codes" active={pathName.includes('/codes')} />
                    <SidebarItem href="/app/customers" icon={<PiAddressBook size={'22px'} />} text="Customers" active={pathName.includes('/customers')} />
                    <SidebarItem href="/app/subscriptions" icon={<PiFolder size={'22px'} />} text="Subscriptions" active={pathName.includes('/subscriptions')} />
                </div>



                {/* Footer */}
                {/* <div className={`${isOpen ? 'p-4 justify-between' : 'p-2 justify-center'} border-t w-full flex items-center  gap-3 mt-auto`}>
                    <Avatar name="Junior" />
                    { isOpen &&
                        <>
                            <div className="text-sm flex-1">
                                <h6 className="text-dark font-medium">Junior</h6>
                                <p className="text-xs">Reseller</p>
                            </div>
                            <BsThreeDotsVertical size={'18px'} />
                        </>
                    }
                </div> */}


            </nav>

        </aside>
    );
};

export default Sidebar;



