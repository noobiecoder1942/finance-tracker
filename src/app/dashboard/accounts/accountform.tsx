"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface AccountFormProps {
    type: string;
};

export default function AccountForm( {type}: AccountFormProps ) {

    const [accountNumber, setAccountNumber] = useState('');
    const [nickname, setNickname] = useState('');
    const [selectValue, setSelectValue] = useState('');
    // TODO Fix toasts
    const { toast } = useToast();

    const handleAddAccount = async () => {
        const accountData = {
            accountType: type,
            accountNumber: accountNumber,
            accountInstitution: selectValue,
            accountNickname: nickname,
            accountStatistics: {
                  accountBalance: 0,
                  accountInvestment: 0,
                  accountUnrealizedPNL: 0,
                  accountRealizedPNL: 0,
                  accountStatus: 'ACTIVE',
        }
    };

    try {
        const response = await fetch('/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountData),
        });

        const data = await response.json();
        console.log(data.message);
        // toast({
        //   title: 'Success',
        //   description: data.message,
        // });
    } catch (error) {
        console.error('Error:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to add account',
        });
    }
}


  const renderSelectGroup = ( type: string ) => {
    switch (type) {
      case 'BANK':
        return (
          <div  className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bank" className="text-right">
              Bank
            </Label>
          
            <Select onValueChange={setSelectValue}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Banks</SelectLabel>
                  <SelectItem value="icici">ICICI Bank</SelectItem>
                  <SelectItem value="sbi">SBI</SelectItem>
                  <SelectItem value="canara">Canara Bank</SelectItem>
                  <SelectItem value="hdfc">HDFC Bank</SelectItem>
                  <SelectItem value="boi">Bank of India</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      case 'BROKERAGE':
        return (
          <div  className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="broker" className="text-right">
              Broker
            </Label>
          
            <Select onValueChange={setSelectValue}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a broker" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brokers</SelectLabel>
                  <SelectItem value="zerodha">Zerodha</SelectItem>
                  <SelectItem value="groww">Groww</SelectItem>
                  <SelectItem value="dhan">Dhan</SelectItem>
                  <SelectItem value="coindcx">Coin DCX</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      case 'RETIREMENT':
        return (
          <div  className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contributor" className="text-right">
              Contributor
            </Label>
          
            <Select onValueChange={setSelectValue}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a contributor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Contributors</SelectLabel>
                  <SelectItem value="empepf">Employee EPF</SelectItem>
                  <SelectItem value="govtppf">Government PPF</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      default:
        return null
    }
  };

  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-100">
          <Plus className="mr-2 h-4 w-4" />Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Account</DialogTitle>
          <DialogDescription>
            Fill up the following, click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Number
            </Label>
            <Input
              id="name"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              defaultValue=""
              className="col-span-3"
              placeholder="1234567890"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nickname" className="text-right">
              Nickname
            </Label>
            <Input
              id="username"
              defaultValue=""
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="col-span-3"
              placeholder="optional"
            />
          </div>
          {renderSelectGroup(type)}
        </div>
        <DialogFooter>
          <Button type="submit">Discard Changes</Button>
          <Button type="submit" onClick={handleAddAccount}>Add Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}
