enum AccountType {
    BANK,
    BROKERAGE,
    RETIREMENT
}

type Account = {
    id: string
    type: string
    accountNumber: string
    balance: number
    institution: string
    invested: number
    profit: number
    status: string
}