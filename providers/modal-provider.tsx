"use client";

import { useMountedState } from "react-use";

import NewAccountModal from "@/features/accounts/components/new-account-modal";
import EditAccountModal from "@/features/accounts/components/edit-account-modal";

import NewCategoryModal from "@/features/categories/components/new-category-modal";
import EditCategoryModal from "@/features/categories/components/edit-category-modal";

import NewTransactionModal from "@/features/transactions/components/new-transaction-modal";

export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountModal />
      <EditAccountModal />

      <NewCategoryModal />
      <EditCategoryModal />

      <NewTransactionModal />
    </>
  );
}
