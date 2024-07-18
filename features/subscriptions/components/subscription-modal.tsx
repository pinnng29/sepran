import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { useCheckoutSubscription } from "@/features/subscriptions/api/use-checkout-subscription";
import { useSubscriptionModal } from "@/features/subscriptions/hooks/use-subscription-modal";
import { CheckCircle2 } from "lucide-react";

export default function SubscriptionModal() {
  const checkout = useCheckoutSubscription();
  const { isOpen, onClose } = useSubscriptionModal();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader className="flex items-center space-y-4">
          <h1 className="text-2xl font-bold">
            Next
            <span className="ml-1 text-background rounded-md bg-gradient-to-br from-violet-400 to-cyan-500 p-1">
              Sepran
            </span>
          </h1>
          <DialogTitle>Upgrade to a paid plan</DialogTitle>
          <DialogDescription>
            Upgrade to a paid plan to unlock more features
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
            <p className="text-sm text-muted-foreground">
              Bank account syncing
            </p>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
            <p className="text-sm text-muted-foreground">Upload CSV File</p>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
            <p className="text-sm text-muted-foreground">
              Different chart types
            </p>
          </li>
        </ul>
        <DialogFooter className="pt-2 mt-4 gap-y-2">
          <Button
            onClick={() => checkout.mutate()}
            disabled={checkout.isPending}
            className="w-full text-white"
          >
            Upgrade
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
