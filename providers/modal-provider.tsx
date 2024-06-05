"use client";

import { useMountedState } from "react-use"

import NewAccountModal from "@/features/accounts/components/new-account-modal";

export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountModal />
    </>
  )
}
