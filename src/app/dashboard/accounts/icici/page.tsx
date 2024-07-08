import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MoveDown, MoveUp } from "lucide-react";
import yahooFinance from 'yahoo-finance2';
import { ChartComponent } from "./graph";
import { writeFileSync, readFileSync } from 'fs';
import AccountHoldingCard from "./AccountHoldingCard";

export default async function AccountHoldings() {

    // const results = await yahooFinance.historical('AAPL', {period1: '2021-06-28'});

    const accountHoldingsList: Holding[] = [
        {ticker: "AAPL"},
        {ticker: "GOOGL"},
    ]

    return <div className="flex flex-col gap-4 p-4">
        <div>
            <h2 className="py-4 text-3xl font-bold">ICICI bank XXXX7890</h2>
        </div>
        <div className="flex flex-row w-full min-w-full h-fit rounded-md border items-center 
        space-x-4 justify-between p-4">
            <Separator orientation="vertical" className="w-0" />
            <div>
                <p className="py-2 text-2xl font-semibold text-center">Balance</p>
                <p className="text-xl text-center">₹ 100</p>
            </div>
            <Separator orientation="vertical" />
            <div>
                <p className="py-2 text-2xl font-semibold text-center">Invested</p>
                <p className="text-xl text-center">₹ 1800</p>
            </div>
            <Separator orientation="vertical" />
            <div>
                <p className="py-2 text-2xl font-semibold text-center">PnL</p>
                <p className="text-xl text-center">₹ 1300</p>
            </div>
            <Separator orientation="vertical" />
            <div className="">
                <p className="py-2 text-2xl font-semibold text-center">Last Transaction</p>
                <p className="text-xl text-center">25/06/2024</p>
            </div>
            <Separator orientation="vertical" className="w-0"/>
        </div>

        {/* Holding Cards */}

        <div className="flex flex-col gap-4">
                {accountHoldingsList.map((hol, index) => (
                    <AccountHoldingCard key={index} holding={hol} />
                ))}
        </div>

    </div>
}