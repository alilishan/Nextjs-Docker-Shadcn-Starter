"use client";
import { useState } from "react";
import { SWRConfig } from "swr";

import SidebarContext from "@/components/Sidebar/context";

export function AppProviders({children, sidebarOpen}: { children: React.ReactNode, sidebarOpen: boolean}) {

    const [isOpen, setIsOpen] = useState(sidebarOpen);

    return (
        <SidebarContext.Provider value={{
            isOpen,
            setIsOpen
        }}>
            <SWRConfig
                value={{
                    refreshInterval: 3000,
                    fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
                }}
            >
                {children}
            </SWRConfig>
        </SidebarContext.Provider>
    )
}
