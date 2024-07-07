import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Plus } from "lucide-react"

type CardProps = React.ComponentProps<typeof Card>;

interface AccountCardProps extends CardProps {
    accountNumber: string;
    institution: string;
    balance: number;
    type: string;
};

const formatBalance = (balance: number): string => {
    if (balance >= 10_000_000) {
      return `₹ ${(balance / 10_000_000).toFixed(2)} Cr`;
    } else if (balance >= 100_000) {
      return `₹ ${(balance / 100_000).toFixed(2)} L`;
    } else if (balance >= 1_000) {
      return `₹ ${(balance / 1_000).toFixed(2)} K`;
    } else {
      return `₹ ${balance.toFixed(2)}`;
    }
};

export default function AccountCard({ accountNumber, institution, balance, type, className, ...props }: AccountCardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>{accountNumber}</CardTitle>
                <CardDescription>{institution} {type}</CardDescription>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm font-medium leading-none">Balance</p>
                    <p className="text-sm text-gray-600">{formatBalance(balance)}</p>
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

            </CardContent>

            <CardFooter className="flex flex-col gap-y-2">
                <Button className="w-full">
                    <Plus  className="mr-2 h-4 w-4" />Record Transaction
                </Button>
                <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />Transaction History
                </Button>
            </CardFooter>
        </Card>

    )
}
