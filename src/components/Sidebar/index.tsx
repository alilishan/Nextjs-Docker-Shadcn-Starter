"use client";

import React, { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { PiMonitor, PiBarcode, PiAddressBook, PiFolder, PiGear, PiUser, PiLock, PiCableCar, PiCalendarBlankDuotone, PiTruckTrailer, PiTruck } from "react-icons/pi";

import { Separator } from "@/components/ui/separator";
import MarcLogo from "@/assets/marc-logo-corp.jpg";

import SidebarContext from "./context";
import SidebarItem from "./SidebarItem";
import SidebarUserMenu from "./SidebarUserMenu";

interface Props {
    className?: string;
}

const Sidebar: FC<Props> = () => {
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
                    <SidebarItem href="/app" icon={<PiMonitor size={'22px'} />} text="Dashboard" active={pathName === '/app'} />
                    <SidebarItem href="/app/calendar" icon={<PiCalendarBlankDuotone size={'22px'} />} text="Calendar" active={pathName === '/app/calendar'} />
                    <SidebarItem href="/app/suppliers" icon={<PiTruck size={'22px'} />} text="Suppliers" active={pathName === '/app/suppliers'} />
                    <SidebarItem
                        href="/app/codes"
                        icon={<PiBarcode size={'22px'} />}
                        text="Codes"
                        active={pathName.includes('/codes')}
                        badge={{ number: 5, colorClass: 'bg-primary' }} // Using Tailwind class
                    />
                    <SidebarItem href="/app/customers" icon={<PiAddressBook size={'22px'} />} text="Customers" active={pathName.includes('/customers')} />
                    <SidebarItem href="/app/subscriptions" icon={<PiFolder size={'22px'} />} text="Subscriptions" active={pathName.includes('/subscriptions')} />

                    <Separator className="my-2" />

                    <SidebarItem
                        icon={<PiCableCar size={'22px'} />}
                        text="Settings"
                        active={pathName.includes('/settings')}
                        badge={{ number: 2, colorClass: 'bg-amber-200 text-amber-800' }} // Using Tailwind class
                        groupItems={[
                            {
                                href: "/app/settings/general",
                                icon: <PiGear size={'18px'} />,
                                text: "General Settings",
                                active: pathName.includes('/settings/general')
                            },
                            {
                                href: "/app/settings/profile",
                                icon: <PiUser size={'18px'} />,
                                text: "Profile Settings",
                                active: pathName.includes('/settings/profile')
                            },
                            {
                                href: "/app/settings/security",
                                icon: <PiLock size={'18px'} />,
                                text: "Security Settings",
                                active: pathName.includes('/settings/security')
                            }
                        ]}
                    />
                </div>



                {/* Footer */}
                <div className={`${isOpen ? 'justify-between' : 'justify-center'} border-t w-full flex items-center  gap-3 mt-auto`}>
                    <SidebarUserMenu />
                </div>


            </nav>

        </aside>
    );
};

export default Sidebar;



