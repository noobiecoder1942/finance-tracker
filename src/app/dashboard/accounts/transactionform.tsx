"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { CalendarIcon, NotebookPen } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

interface TransactionFormProps {
    accid: string;
};

export default function TransactionForm({ accid }: TransactionFormProps) {

    const [assetClass, setAssetClass] = useState('');
    const [assetExchange, setAssetExchange] = useState('');
    const [assetSymbol, setAssetSymbol] = useState('');
    const [date, setDate] = React.useState<Date>()
    const [units, setUnits] = useState(0);
    const [price, setPrice] = useState(0);

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

    const dateField = () => {
        return (
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Date
                </Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        )
    }

    const unitsField = () => {
        return <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Units
            </Label>
            <Input
            id="name"
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            defaultValue=""
            className="col-span-3"
            placeholder="1000"
            />
        </div>        
    }

    const priceField = () => {
        return <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Price
            </Label>
            <Input
            id="name"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            defaultValue=""
            className="col-span-3"
            placeholder="1000"
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
                        {assetClass !== "" ? dateField() : null}
                        {assetClass !== "" ? unitsField() : null}
                        {assetClass !== ""? priceField() : null}
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
