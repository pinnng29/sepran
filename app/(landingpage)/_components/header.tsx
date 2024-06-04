import ThemeSwitcher from "@/components/theme-switcher";
import HeaderLogo from "./logo-header";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-20 w-full border-b shadow-md px-4 py-6 border-slate">
      <div className="lg:max-w-screen-2xl mx-auto flex items-center justify-between">
        <div>
          <HeaderLogo />
        </div>
        <div className="flex items-center gap-x-2">
          <ClerkLoading>
            <Loader className="size-4 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button
                asChild
                variant={"link"}
              >
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <ThemeSwitcher />
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <ThemeSwitcher />
              <SignInButton mode="modal">
                <Button variant={"secondary"}>
                  <LogIn className="size-4 mr-2" />
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
