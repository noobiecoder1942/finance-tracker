"use client";

import { Button } from "@/components/ui/button";
import AccountCard from "./accountcard";
import { NotebookPen, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import AccountForm from "./accountform";
import { Skeleton } from "@/components/ui/skeleton";

export default function Accounts() {

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAccounts = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch('/api/accounts');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setAccounts(data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchAccounts();
      }, []);

    const bankAccounts = accounts.filter(acc => acc.accountType === 'BANK');
    const brokerageAccounts = accounts.filter(acc => acc.accountType === 'BROKERAGE');
    const retirementAccounts = accounts.filter(acc => acc.accountType === 'RETIREMENT');

    return <div className="flex flex-col gap-4 p-4">
        <div>
            <div className="flex flex-row items-center gap-4">
                <h2 className="py-4 text-3xl font-bold">Bank Accounts</h2>
                <AccountForm type="BANK"/>
            </div>
            <div className="flex flex-row gap-4">
                {loading ? <Skeleton className="h-[468px] w-[380px] rounded-xl"/> : null}
                {!loading && bankAccounts.map((acc, index) => (
                    <AccountCard key={index} account={acc}
                    />
                ))}
            </div>
        </div>
        <div>
            <div className="flex flex-row items-center gap-4">
                <h2 className="py-4 text-3xl font-bold">Brokerage Wallets</h2>
                <AccountForm type="BROKERAGE"/>
            </div>
            <div className="flex flex-row gap-4">
                {loading ? <Skeleton className="h-[468px] w-[380px] rounded-xl"/> : null}
                {!loading && brokerageAccounts.map((acc, index) => (
                    <AccountCard key={index} account={acc}
                    />
                ))}
            </div>
        </div>
        <div>
            <div className="flex flex-row items-center gap-4">
                <h2 className="py-4 text-3xl font-bold">Retirement Accounts</h2>
                <AccountForm type="RETIREMENT"/>
            </div>
            <div className="flex flex-row gap-4">
                {loading ? <Skeleton className="h-[468px] w-[380px] rounded-xl"/> : null}
                {!loading && retirementAccounts.map((acc, index) => (
                    <AccountCard key={index} account={acc}
                    />
                ))}
            </div>
        </div>
    </div>
}