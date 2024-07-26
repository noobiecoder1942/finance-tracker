import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, CandlestickChart, MoveUp, MoveDown } from "lucide-react"
import Link from "next/link";
import TransactionForm from "./transactionform";

type CardProps = React.ComponentProps<typeof Card>;

interface AccountCardProps extends CardProps {
    account: Account;
};

const formatBalance = (balance: number): string => {
    const absBalance = Math.abs(balance); // Get the absolute value of the balance
  
    let formattedBalance: string;
  
    if (absBalance >= 10_000_000) {
      formattedBalance = `₹ ${(absBalance / 10_000_000).toFixed(2)} Cr`;
    } else if (absBalance >= 100_000) {
      formattedBalance = `₹ ${(absBalance / 100_000).toFixed(2)} L`;
    } else if (absBalance >= 1_000) {
      formattedBalance = `₹ ${(absBalance / 1_000).toFixed(2)} K`;
    } else {
      formattedBalance = `₹ ${absBalance.toFixed(2)}`;
    }
  
    // Add negative sign back if the original balance was negative
    return balance < 0 ? `- ${formattedBalance}` : formattedBalance;
};

const getStatusColor = (status: string): string => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-500';
      case 'INACTIVE':
        return 'bg-custom-red';
      case 'SUSPENDED':
        return 'bg-orange-500';
      default:
        return 'bg-green-500';
    }
}

export default function AccountCard({ account, className, ...props }: AccountCardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader className="flex flex-row justify-between">
                <div className="grid gap-y-2">
                    <CardTitle>{account.accountNumber}</CardTitle>
                    <CardDescription>{account.accountInstitution.toUpperCase()} {account.accountType}</CardDescription>
                </div>
                <div className="flex flex-row items-center gap-x-2 rounded-md border px-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(account.accountStatistics.accountStatus)}`}></div>
                    <p className="text-xs">{account.accountStatistics.accountStatus}</p>
                </div>
            </CardHeader>

            <CardContent className="grid gap-4">

                <div className="flex justify-between gap-x-4 rounded-md border p-4">
                    <div  className="text-left">
                        <p>Invested</p>
                        <p>{formatBalance(account.accountStatistics.accountBalance)}</p>
                    </div>
                    <div className="flex items-center text-right">
                        <div>
                            <p>PnL</p>
                            <p>{formatBalance(account.accountStatistics.accountRealizedPNL)}</p>
                        </div>
                        {account.accountStatistics.accountRealizedPNL > 0 ? (
                            <MoveUp className="ml-2" color="#00ff00" size={32}/>
                            ) : (
                            <MoveDown className="ml-2" color="#ff0000" size={32}/>
                            )}
                        
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium leading-none">Balance</p>
                        <p className="text-sm text-gray-600">{formatBalance(account.accountStatistics.accountBalance)}</p>
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

            </CardContent>

            <CardFooter className="flex flex-col gap-y-2">
                <TransactionForm accid={account._id}/>
                
                <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />Transaction History
                </Button>

                <Button className="w-full">
                    <Link href={`accounts/${account._id}`} className="flex flex-row">
                        <CandlestickChart className="mr-2 h-4 w-4" />See Holdings
                    </Link>
                </Button>
            </CardFooter>
        </Card>

    )
}
