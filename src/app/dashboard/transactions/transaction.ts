enum TransactionType {
    BANK_ACCOUNT_DEPOSIT,
    BANK_ACCOUNT_CREDIT,
    BANK_ACCOUNT_WITHDRAWAL
}

type Transaction = {
    id: string
    type: TransactionType
    timestamp: Date
  }

type Payment = {
id: string
amount: number
status: "pending" | "processing" | "success" | "failed"
email: string
}
   
export const payments: Payment[] = [
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
// ...
]