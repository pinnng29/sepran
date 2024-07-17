"use client";

import { useState } from "react";
import { useMount } from "react-use";

import { Button } from "@/components/ui/button";
import { useCreateLinkToken } from "@/features/plaid/api/use-create-link-token";

export default function PlaidConnect() {
  const [token, setToken] = useState<string | null>(null);

  const createLinkToken = useCreateLinkToken();

  useMount(() => {
    createLinkToken.mutate(undefined, {
      onSuccess: ({ data }) => {
        setToken(data);
      },
    });
  });

  return (
    <Button
      disabled={!token}
      size={"sm"}
      variant={"default"}
      className="text-white"
    >
      Connect
    </Button>
  );
}
