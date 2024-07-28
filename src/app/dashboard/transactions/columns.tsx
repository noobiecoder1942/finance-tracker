"use client"

import { ColumnDef } from "@tanstack/react-table"
// fix holding hierarchy
export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "account",
        header: "accountId",
    },
    {
        accessorKey: "transactionType",
        header: "transactionType",
    },
    {
        accessorKey: "date",
        header: "date",
    },
    {
        accessorKey: "units",
        header: "units",
    },
    {
      accessorKey: "price",
      header: "price",
    },
    {
      accessorKey: "holding.assetClass",
      header: "asset class",
    },
    {
      accessorKey: "holding.symbol",
      header: "symbol",
    },
    {
      accessorKey: "holding.exchange",
      header: "exchange",
    },
]
