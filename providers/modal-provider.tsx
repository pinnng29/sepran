"use client";

import { useMountedState } from "react-use"

import NewAccountModal from "@/features/accounts/components/new-account-modal";
import EditAccountModal from "@/features/accounts/components/edit-account-modal";

export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountModal />
      <EditAccountModal />
    </>
  )
}
