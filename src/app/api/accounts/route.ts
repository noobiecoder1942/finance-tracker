import dbConnect from "@/app/lib/dbConnect";
import Account from "@/app/lib/models/account";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    try {
        await dbConnect();
        const accounts = await Account.find();
        return new NextResponse(JSON.stringify(accounts), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error fetching accounts: " + error.message, { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json();
        await dbConnect();
        const account = new Account(data);
        await account.save();
        return new NextResponse(JSON.stringify({
            success: true,
            message: 'Account created successfully',
            data: account,
        }), { status: 200 });
    } catch (error: any) {
        return new NextResponse(
            "Error creating account: " + error.message, {
                status: 500
            }
        )
    }
}