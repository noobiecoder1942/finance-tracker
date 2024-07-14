import dbConnect from "@/app/lib/dbConnect";
import Account from "@/app/lib/models/account";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    try {
        await dbConnect();
        const id = request.body;
        const account = await Account.findById(id);
        return new NextResponse(JSON.stringify(account), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error fetching account with ID: " + request + "" + error.message, { status: 500 });
    }
}

export const PATCH = async (request: NextRequest) => {
    try {
        await dbConnect();
        return new NextResponse("Account updated successfully", { status: 200 });
    } catch (error: any) { 
        return new NextResponse("Error updating account: " + error.message, { status: 500 });
    }
}