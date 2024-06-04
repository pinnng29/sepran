import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export default function NavButton({ href, label, isActive }: Props) {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn(
        "w-full lg:w-auto justify-between font-normal border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition hover:bg-muted-foreground/30 text-foreground focus:bg-muted-foreground/20",
        isActive ? "bg-muted-foreground/20 " : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
