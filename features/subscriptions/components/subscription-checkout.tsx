import { useCheckoutSubscription } from "@/features/subscriptions/api/use-checkout-subscription";

import { Button } from "@/components/ui/button";
import { useGetSubscription } from "@/features/subscriptions/api/use-get-subscription";

export default function SubscriptionCheckout() {
  const checkout = useCheckoutSubscription();

  const { data: subscription, isLoading: isLoadingSubscription } =
    useGetSubscription();

  return (
    <Button
      disabled={checkout.isPending || isLoadingSubscription}
      size={"sm"}
      variant={"default"}
      onClick={() => checkout.mutate()}
      className="text-white"
    >
      {subscription ? "Manage" : "Upgrade"}
    </Button>
  );
}
