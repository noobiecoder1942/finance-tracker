"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { NotebookPen } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function TransactionForm( ) {

    const [assetClass, setAssetClass] = useState('');
    const [assetExchange, setAssetExchange] = useState('');
    const [assetSymbol, setAssetSymbol] = useState('');

    const classSelectGroup = () => {
        return (
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="assetClass" className="text-right">Asset Class</Label>
                <Select onValueChange={setAssetClass}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select asset class" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Asset Class</SelectLabel>
                            <SelectItem value="bonds">Bonds</SelectItem>
                            <SelectItem value="commodities">Commodities</SelectItem>
                            <SelectItem value="etf">ETFs</SelectItem>
                            <SelectItem value="mutualfunds">Mutual Funds</SelectItem>
                            <SelectItem value="stocks">Stocks</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        )
    }

    const exchangeSelectGroup = () => {
        return (
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="selectExchange" className="text-right">Exchange</Label>
                <Select onValueChange={setAssetExchange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Exchange" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Exchange</SelectLabel>
                            <SelectItem value="bse">BSE</SelectItem>
                            <SelectItem value="nse">NSE</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        )
    }

    const symbolField = () => {
        return <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Symbol
            </Label>
            <Input
            id="name"
            value={assetSymbol}
            onChange={(e) => setAssetSymbol(e.target.value)}
            defaultValue=""
            className="col-span-3"
            placeholder="AAPL"
            />
        </div>
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="min-w-full w-full">
                        <NotebookPen className="mr-2 h-4 w-4" />Record Transaction
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Record a new Transaction</DialogTitle>
                        <DialogDescription>
                        Fill up the following, click add when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {classSelectGroup()}
                        {assetClass === "stocks" ? exchangeSelectGroup() : null}
                        {assetClass === "stocks" ? symbolField() : null}
                    </div>
                    <DialogFooter>
                        <Button type="submit">Discard Changes</Button>
                        <Button type="submit">Add Transaction</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
