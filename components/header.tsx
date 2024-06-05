import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import HeaderLogo from "@/components/header-logo";
import Navigation from "@/components/navigation";
import WelcomeMsg from "@/components/welcome-msg";
import ThemeSwitcher from "@/components/theme-switcher";

export default function Header() {
  return (
    <header className="border-b shadow-md px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoading>
            <Loader className="size-6 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="flex items-center gap-x-3">
              <ThemeSwitcher />
              <UserButton afterSignOutUrl="/" />
            </div>
          </ClerkLoaded>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
}
