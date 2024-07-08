"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader 
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


interface AccountFormProps {
  type: string;
};

export default function AccountForm( {type}: AccountFormProps ) {


  const renderSelectGroup = ( type: string) => {
    switch (type) {
      case 'BANK':
        return (
          <div  className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bank" className="text-right">
              Bank
            </Label>
          
            <Select>
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
          
            <Select>
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
          
            <Select>
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
              defaultValue=""
              className="col-span-3"
              placeholder="1234567890"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Nickname
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
              placeholder="optional"
            />
          </div>
          {renderSelectGroup(type)}
        </div>
        <DialogFooter>
          <Button type="submit">Discard Changes</Button>
          <Button type="submit">Add Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
