"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { columns, Payment } from "./columns";

const data: Payment[] = [
  {
    id: "123",
    amount: 100,
    status: "pending",
    email: "m0@example.com",
  },
  {
    id: "123",
    amount: 100,
    status: "success",
    email: "a0@example.com",
  },
];

export default function AccountsPage() {
  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button
            size={"sm"}
            onClick={newAccount.onOpen}
          >
            <Plus className="size-4 mr-2 text-foreground" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="email"
            data={data}
            columns={columns}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}
