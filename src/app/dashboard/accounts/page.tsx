import AccountCard from "./accountcard";


async function getData(): Promise<Account[]> {
    // Fetch data from your API here.
    return [
        {id: "1",
        type: "BANK",
        accountNumber: "xxxx7890",
        balance: 1235,
        institution: "ICICI",
        invested: 5000.454,
        profit: 2000
        },
        {id: "2",
        type: "BANK",
        accountNumber: "xxxx1245",
        balance: 54984,
        institution: "SBI",
        invested: 35000.4534,
        profit: 8000.455
        },
        {id: "3",
        type: "BROKERAGE",
        accountNumber: "xxxx5445",
        balance: 11121892,
        institution: "ZERODHA",
        invested: 45343,
        profit: -251.843
        },
        {id: "4",
        type: "RETIREMENT",
        accountNumber: "xxxx6234",
        balance: 2323299,
        institution: "PPF",
        invested: 348634,
        profit: -25430.453
        },    
    ]
  }

export default async function Accounts() {

    const data = await getData();

    const bankAccounts: Account[] = data.filter(acc => acc.type === 'BANK');
    const brokerageAccounts: Account[] = data.filter(acc => acc.type === 'BROKERAGE');
    const retirementAccounts: Account[] = data.filter(acc => acc.type === 'RETIREMENT');

    return <div className="flex flex-col gap-4 p-4">
        <div>
            <h2 className="py-4">Bank Accounts</h2>
            <div className="flex flex-row gap-4">
                {bankAccounts.map((acc, index) => (
                    <AccountCard key={index} account={acc}
                    />
                ))}
            </div>
        </div>
        <div>
            <h2 className="py-4">Brokerage Accounts</h2>
                <div className="flex flex-row gap-4">
                    {brokerageAccounts.map((acc, index) => (
                        <AccountCard key={index} account={acc}
                        />
                    ))}
            </div>
        </div>
        <div>
            <h2 className="py-4">Retirement Accounts</h2>
                <div className="flex flex-row gap-4">
                    {retirementAccounts.map((acc, index) => (
                        <AccountCard key={index} account={acc}
                        />
                    ))}
            </div>
        </div>
    </div>
}