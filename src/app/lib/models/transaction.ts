import { Schema, model, models } from'mongoose';

const HoldingSchema = new Schema({
    assetClass: {type: "string", required: true},
    symbol: {type: "string", required: true},
    exchange: {type: "string", required: true}
})

const TransactionSchema = new Schema({
    accountId: {type: "string", required: true},
    transactionType: {type: "string", required: true},
    holding: {type: HoldingSchema, required: true},
    date: {type: "date", required: true},
    units: {type: "number", required: true},
    price: {type: "number", required: true}
})

const Transaction = models.Transaction || model('Transaction', TransactionSchema);

export default Transaction;