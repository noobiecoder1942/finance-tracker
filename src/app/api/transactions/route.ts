import dbConnect from "@/app/lib/dbConnect";
import Transaction from "@/app/lib/models/transaction";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        await dbConnect();
        const transactions = await Transaction.find();
        console.log(transactions);
        return new NextResponse(JSON.stringify(transactions), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error fetching transactions: " + error.message, { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();
        await dbConnect();
        const transaction = new Transaction(data);
        await transaction.save();
        return new NextResponse(JSON.stringify({
            success: true,
            message: 'Transaction recorded successfully',
            data: transaction,
        }), { status: 200 });
    } catch (error: any) {
        return new NextResponse(
            "Error saving transaction: " + error.message, {
                status: 500
            }
        )
    }
}