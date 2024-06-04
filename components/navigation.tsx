"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";

import NavButton from "@/components/nav-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LogoHeader from "@/app/(landingpage)/_components/logo-header";

const routers = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Transactions",
    href: "/transactions",
  },
  {
    label: "Accounts",
    href: "/accounts",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "Settings",
    href: "/settings",
  },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetTrigger>
          <Button
            size={"sm"}
            variant={"outline"}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/30 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-foreground focus:bg-muted-foreground/20"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="px-2"
        >
          <nav className="flex flex-col gap-y-2 pt-6">
            <div className="flex items-center justify-center">
              <LogoHeader />
            </div>
            <Separator />
            {routers.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routers.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
}
