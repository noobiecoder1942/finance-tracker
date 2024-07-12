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
}