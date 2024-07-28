"use client";

import { useEffect, useState } from "react";
import { columns } from "./columns"
import { DataTable } from "./data-table"


export default function Transactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTransactions = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/transactions');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTransactions(data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchTransactions();
    }, []);

    console.log(transactions);

    return <div className="container mx-auto py-10">
        <DataTable columns={columns} data={transactions} />
    </div>
}