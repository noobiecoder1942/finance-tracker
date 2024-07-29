import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<any>[] = [

    {
        accessorKey: "symbol",
        header: "symbol",
    },
    {
        accessorKey: "account",
        header: "account",
    },
    {
        accessorKey: "inv",
        header: "total invested",
    },
    {
        accessorKey: "PNL",
        header: "total PNL",
    },
    {
        accessorKey: "change",
        header: "change",
    }
]
