"use client";

import { Button } from "@/components/ui/button";

import { useDeleteConnectedBank } from "@/features/plaid/api/use-delete-connected-bank";
import { useConfirm } from "@/hooks/use-confirm";

export default function PlaidDisconnect() {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "This will disconnect your bank account, and remove all associated data"
  );
  const deleteConnectedBank = useDeleteConnectedBank();

  const onClick = async () => {
    const ok = await confirm();

    if (ok) {
      deleteConnectedBank.mutate();
    }
  };

  return (
    <>
      <ConfirmDialog />
      <Button
        disabled={deleteConnectedBank.isPending}
        size={"sm"}
        variant={"default"}
        onClick={onClick}
        className="text-white"
      >
        Disconnect
      </Button>
    </>
  );
}
