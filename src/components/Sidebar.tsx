"use client";

import UserItem from "./UserItem";
import { User, Mail, Bell, Settings, Cookie} from "lucide-react";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

export default function Sidebar() {


    const menuList = [
        {
            group: "General",
            items: [
                {link: "/", text: "Profile", icon: <User />},
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

    return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>

                {menuList.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) => (
                            <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                {option.icon}
                                {option.text}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                ))}

            </CommandList>
        </Command>

        </div>
        <div>Settings / Notifications</div>
    </div>
}