type Transaction = {
    _id: string
    transactionType: string
    holding: Holding
    date: Date
    units: number
    price: number
}

type Holding = {
    assetClass: string
    units: number
    symbol: string
    exchange: string
}

type AccountStatistics = {
    accountBalance: number
    accountInvestment: number
    accountUnrealizedPNL: number
    accountRealizedPNL: number
    accountStatus: string
}

type Account = {
    _id: string
    accountNumber: string
    accountType: string
    accountInstitution: string
    accountStatistics: AccountStatistics
    accountTransactions: Transaction[]
    accountHoldings: Holding[]
}