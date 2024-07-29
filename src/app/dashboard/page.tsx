import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/table";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Dashboard() {

    const data = [
        {
            "account": "324267",
            "symbol": "AAPL",
            "inv": "1564",
            "PNL": "23452",
            "change": 12
        },
        {
            "account": "634346",
            "symbol": "GOOGL",
            "inv": "634",
            "PNL": "-5456",
            "change": 23
        },
        {
            "account": "324287967",
            "symbol": "MSFT",
            "inv": "6798",
            "PNL": "9697",
            "change": -34
        },
    ]

    return (
        <div className="grid gap-4 p-4">
            <div className="grid gap-4 grid-cols-2">
                <Card className="h-[600px]"/>
                <div className="grid gap-4 h-[600px]">
                    <Card className="h-full">
                        <CardTitle className="pl-4 pt-4 pb-2">
                            Top Performing Holdings
                        </CardTitle>
                        <CardContent className="container mx-auto py-4">
                            <DataTable data={data} columns={columns}/>
                        </CardContent>
                    </Card>
                    <Card className="h-full">
                        <CardTitle className="pl-4 pt-4 pb-2">
                            Least Performing Holdings
                        </CardTitle>
                        <CardContent className="container mx-auto py-4">
                            <DataTable data={data} columns={columns}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}