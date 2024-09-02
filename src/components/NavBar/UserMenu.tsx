import React, { FC } from "react";
import { PiGear, PiLock, PiUserCircle } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
// import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"

// import UserIcon from './user.webp';


interface Props {
    className?: string;
}

const UserMenu:FC<Props> = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="secondary"
                size="icon"
                // className="overflow-hidden rounded-full"
                >
                    {/* <Image
                        src={UserIcon}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                    /> */}
                    <FaRegUser size={18} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">

                <DropdownMenuLabel className="flex flex-col">
                    <span>Lishan Ounch</span>
                    <small className="text-muted">Administrator</small>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <PiUserCircle size={22} className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <PiGear size={22} className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <PiLock size={22} className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
