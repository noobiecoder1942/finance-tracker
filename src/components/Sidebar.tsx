"use client";

import { useState } from "react";

import UserItem from "./UserItem";
import { User, Mail, Bell, Settings, Cookie, ChevronRight, ChevronLeft} from "lucide-react";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

export default function Sidebar({ onToggle }: { onToggle: (isOpen: boolean) => void }) {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);
    };

    const menuList = [
        {
            group: "Dashboard",
            items: [
                {link: "/dashboard", text: "Home", icon: <User />},
                {link: "/dashboard/transactions", text: "Transactions", icon: <Mail />},
                {link: "/dashboard/accounts", text: "Accounts", icon: <Bell />},
            ]
        },
        {
            group: "General",
            items: [
                {link: "/profile", text: "Profile", icon: <User />},
                {link: "/", text: "Inbox", icon: <Mail />},
                {link: "/", text: "Notifications", icon: <Bell />},
            ]
        },
        {
            group: "Settings",
            items: [
                {link: "/", text: "General Settings", icon: <Settings />},
                {link: "/", text: "Privacy", icon: <Cookie />},
            ]
        }
    ]

    return <div className={`fixed flex flex-col gap-4 min-h-screen transition-all 
        ${isOpen ? 'w-[300px] min-w-[300px] p-4' : 'w-[50px] min-w-[50px] p-4'}`}>

        <button onClick={toggleSidebar} className="self-end-left">
                {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
        
        <div>
            <UserItem isOpen={isOpen} />
        </div>

        {isOpen && (
            <div className="grow">
            <Command style={{overflow: 'visible'}}>
                <CommandList style={{overflow: 'visible'}}>

                    {menuList.map((menu: any, key: number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number) => 
                                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                    {option.icon}
                                    {option.text}
                                </CommandItem>
                            )}
                        </CommandGroup>
                    ))}

                </CommandList>
            </Command>

            </div>
        )}
        {/* <div>Settings / Notifications</div> */}
    </div>
}