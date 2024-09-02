import React, { FC } from "react";


import SidebarNavButton from "@/components/Sidebar/SidebarNavButton";
import ThemeSwitcher from "@/components/NextThemes/ThemeSwitcher";
import UserMenu from "./UserMenu";

interface Props {
    identifiers?: string;
}

const NavBar:FC<Props> = () => {

    return (
        <header className="sticky top-0 z-30 flex items-center gap-4 backdrop-blur-sm bg-white/20 dark:bg-slate-700 dark:bg-opacity-10 back px-4 py-4 h-auto">
            <SidebarNavButton />
            <div className="flex items-center gap-4 ms-auto">
                <ThemeSwitcher />
                <UserMenu />
            </div>
        </header>
    );
};

export default NavBar;
