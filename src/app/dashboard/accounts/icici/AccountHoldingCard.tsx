import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MoveDown, MoveUp } from "lucide-react";
import { ChartComponent } from "./graph";
import Transactions from "../../transactions/page";
import { DataTable } from "../../transactions/data-table";
import { Button } from "@/components/ui/button";

interface AccountHoldingCardProps {
    holding: Holding;
};


function AccountHoldingCardDetails( {holding}: AccountHoldingCardProps) {
    return (
        <Card className="w-full max-w-fit border my-4" >
            <CardHeader className="flex flex-row justify-between">
                <div className="grid gap-y-2">
                    <CardTitle>{holding.ticker}</CardTitle>
                    <CardDescription>ASHOK LEYLAND</CardDescription>
                </div>
            </CardHeader>
            <div className="flex flex-row">
                <CardContent className="flex flex-row gap-4">

                    <div className="grid gap-4">

                        <div className="flex justify-between gap-x-4 rounded-md border p-4">
                            <div className="items-center align-middle text-left">
                                <p>Invested</p>
                                <p>₹ 200</p>
                            </div>
                            <div className="flex items-center text-right">
                                <div>
                                    <p>PnL</p>
                                    <p>800</p>
                                </div>
                                {50 > 0 ? (
                                    <MoveUp className="ml-2" color="#00ff00" size={32}/>
                                    ) : (
                                    <MoveDown className="ml-2" color="#ff0000" size={32}/>
                                    )}
                                
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 rounded-md border p-4">
                            <div>
                                <p className="text-sm font-medium leading-none">Balance</p>
                                <p className="text-sm text-gray-600">600</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium leading-none">Date Added</p>
                                <p className="text-sm text-gray-600">11/06/2019</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">Status</p>
                                <p className="text-sm text-gray-600">Active</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium leading-none">Last Activity</p>
                                <p className="text-sm text-gray-600">11/06/2024</p>
                            </div>
                        </div>
                    </div>
                    

                </CardContent>
            </div>
        </Card>
    )
} 

function AccountHoldingLastFiveTransactions( {holding}: AccountHoldingCardProps) {

    const columns: any = [
        {
          accessorKey: "status",
          header: "Status",
        },
        {
          accessorKey: "email",
          header: "Email",
        },
        {
          accessorKey: "amount",
          header: "Amount",
        },
    ];

    const data = [
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
    ];

    return (
        <div className="my-4">
            {/* HEader title : Most Recent Transactions and a button: See All -> */}
            <div className="flex flex-row items-center justify-between gap-4">
                <h2 className="py-4 text-xl font-bold">Most Recent Transactions</h2>
                <Button className="w-fit">
                    <ExternalLink className="mr-2 h-4 w-4" />See All
                </Button>
            </div>
            <div><DataTable columns={columns} data={data} /></div>
        </div>
    )
}

export default function AccountHoldingCard( {holding}: AccountHoldingCardProps) {

    return (
        <div className="flex flex-col gap-y-4 border rounded-md p-4 w-full">
            <div className="grid gap-x-4" style={{ gridTemplateColumns: 'max-content 1fr' }}>
                <AccountHoldingCardDetails holding={holding} />
                <ChartComponent />
            </div>
            <div className="border-2 rounded-md px-4">
                <AccountHoldingLastFiveTransactions holding={holding} />
            </div>
        </div>
    )

}