import { Schema, model, models } from'mongoose';

const HoldingSchema = new Schema({
    assetClass: {type: "string", required: true},
    units: {type: "number", required: true},
    symbol: {type: "string", required: true},
    exchange: {type: "string", required: true}
})

const TransactionSchema = new Schema({
    transactionType: {type: "string", required: true},
    holding: {type: HoldingSchema, required: true},
    date: {type: "date", required: true},
    units: {type: "number", required: true},
    price: {type: "number", required: true}
})

const AccountStatisticsSchema = new Schema({
    accountBalance: {type: "number", required: false},
    accountInvestment: {type: "number", required: false},
    accountUnrealizedPNL: {type: "number", required: false},
    accountRealizedPNL: {type: "number", required: false},
    accountStatus: {type: "string", required: false}
})

const AccountSchema = new Schema({
    accountType: {type: "string", required: true},
    accountNumber: {type: "string", required: true},
    accountInstitution: {type: "string", required: true},
    accountStatistics: {type: AccountStatisticsSchema, required: false}
})

const Account = models.Account || model('Account', AccountSchema);

export default Account;