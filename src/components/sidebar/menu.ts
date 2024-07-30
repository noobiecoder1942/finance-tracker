import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "Dashboard",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname === "/dashboard",
            icon: SquarePen,
            submenus: []
          },
          {
            href: "/dashboard/accounts",
            label: "Accounts",
            active: pathname === "/dashboard/accounts",
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/dashboard/transactions",
            label: "Transactions",
            active: pathname === "/dashboard/transactions",
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/categories",
            label: "Categories",
            active: pathname.includes("/categories"),
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/tags",
            label: "Tags",
            active: pathname.includes("/tags"),
            icon: Tag,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "",
            label: "Users",
            active: pathname.includes("/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "",
            label: "Account",
            active: pathname.includes("/bleh"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }